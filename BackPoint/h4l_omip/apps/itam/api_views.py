from rest_framework.decorators import action

from common.pagination import H4LPageNumberPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import IPAddress, DataCenter, Cabinet, Device
from .serializers import IPAddressSerializer, DataCenterSerializer, CabinetSerializer, DeviceSerializer


class IPAddressViewSet(ModelViewSet):
    serializer_class = IPAddressSerializer
    queryset = IPAddress.objects.all()
    lookup_field = "ip_address"
    pagination_class = H4LPageNumberPagination

    def get_queryset(self, *args, **kwargs):
        return self.queryset.order_by('-ip_address')

    @action(detail=False, methods=["GET", "POST"])
    def apply(self, request):
        """
        :param request: get请求不需要数据
        :return: get请求返回新申请的IP地址信息，post返回IP地址注册状态
        """
        if request.method == "GET":
            return Response(self.serializer_class(instance=IPAddress.objects.application(request.user)).data)
        elif request.method == "POST":
            info = request.data
            new_ip = self.serializer_class(data=request.data)
            new_ip.is_valid(raise_exception=True)
            try:
                self.perform_create(new_ip)
                return Response({'code': 200, 'msg': '新增成功！'})
            except:
                return Response({'code': 400, 'msg': '新增失败！'})
