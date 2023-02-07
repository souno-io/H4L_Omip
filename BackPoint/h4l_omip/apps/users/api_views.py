import datetime
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
# from drf_spectacular.utils import extend_schema, OpenApiParameter
from rest_framework import status, permissions
from rest_framework.decorators import action, api_view
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet, ModelViewSet
from common.pagination import H4LPageNumberPagination
from system.serializers import MenuSerializer
from .serializers import UserProfileSerializer
from .models import HISEmployee, HISDepartment

User = get_user_model()


class UserViewSet(ModelViewSet):
    serializer_class = UserProfileSerializer
    queryset = User.objects.all()
    lookup_field = "username"
    pagination_class = H4LPageNumberPagination

    def get_queryset(self, *args, **kwargs):
        if self.request.user.is_superuser:
            return self.queryset.order_by('-id')
        else:
            return self.queryset.filter(id=self.request.user.id)

    @action(detail=True, methods=["GET"])
    def transfer_history(self, request, *args, **kwargs):
        return Response(self.get_object().employee_num.transfer_history_chs())

    @action(detail=False, methods=["GET"])
    def get_list(self, request):
        """
        :param request:
        :return: 返回用户列表
        """
        user_list = []
        for i in self.queryset:
            user_list.append(self.serializer_class(i, context={"request": request}).data)
        return Response({
            "code": 200,
            "message": "success",
            "info": {
                'rows': user_list,
            },
            'total': len(user_list),
        })

    @action(detail=False, methods=["GET"])
    def myinfo(self, request):
        """
        :param request:
        :return: owner info
        """
        serializer = self.serializer_class(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)

    @action(detail=False, methods=["GET"])
    def userinfo(self, request):
        """
        获取用户信息
        :param request:None
        :return:用户信息json
        """
        ability = []
        for i in request.user.get_all_menus():
            for j in i.competence_menu.all().values_list('code', flat=True):
                ability.append(str(j) + ':' + str(i.name))
        print(request.user.get_all_menus())
        result = {
            "code": 200,
            "message": "success",
            "info": {
                'roles': list(request.user.get_roles().values_list('label', flat=True)),
                'permissions': ability,
                'menu': [
                    MenuSerializer(menu).data for menu in
                    list(request.user.get_all_menus().order_by('seq').filter(level=0))
                ],
                "user_id": str(request.user.id),
                "username": str(request.user.username),
                "name": str(request.user.name),
                "department": str(request.user.user_departments.code),
                "avatar": request.build_absolute_uri(request.user.avatar.url)
            }
        }
        return Response(
            status=status.HTTP_200_OK,
            data=result,
        )

    @action(detail=False, methods=["POST"], permission_classes=[permissions.IsAuthenticated, ])
    def change_pass(self, request):
        """
        修改密码
        :param {
            "old_password":"ll@123456",
            "new_password":"ll@12345678",
            "replay_password":"ll@12345678"
        }
        :return:修改是否成功提示信息
        """
        if request.method == 'POST':
            user = request.user
            old_password = request.data['old_password']
            new_password = request.data['new_password']
            replay_password = request.data['replay_password']

            # 判断用户原密码是否匹配
            info = ""
            if new_password == replay_password:
                if check_password(old_password, user.password):
                    user.set_password(new_password)
                    user.save()  ##如果用户名、原密码匹配则更新密码
                    info = {'code': 200, 'message': '密码修改成功!，请重新登录！'}
                else:
                    info = {'code': 204, 'message': '修改密码失败，请检查原密码是否输入正确!'}
            else:
                info = {'code': 204, 'message': '修改密码失败，请检查两次密码是否一致!'}
            return Response(info)
        else:
            return Response({'code': 204, 'message': '修改密码失败，不允许GET!'})

    @action(detail=False, methods=["GET"])
    def router(self, request):
        """
        获取用户菜单
        :param request:
        :return:用户菜单
        """
        menus_list = list(request.user.get_all_menus().order_by('seq').filter(level=0))
        # menus_list = request.user.get_all_menus().order_by('seq')
        print(menus_list)
        return Response({
            "code": 200,
            "message": "success",
            "info": {"list": [MenuSerializer(menu).data for menu in menus_list]}
        })

    @action(detail=False, methods=["GET"])
    def logout(self, request):
        """
        :param request: title:退出登录
        """
        result = {
            "code": 200,
            "message": "success",
        }
        return Response(result)


@api_view()
def sync_employee(request):
    """
    ### 同步HIS员工信息
    :param request: None
    :return: success
    """
    return Response(HISEmployee.objects.from_his())


@api_view()
def sync_department(request):
    """
    ### 同步HIS科室信息
    :param request: None
    :return: success
    """
    return Response(HISDepartment.objects.from_his())
