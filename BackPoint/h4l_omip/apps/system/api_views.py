# from drf_spectacular.utils import extend_schema, extend_schema_field
import time

from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view
from rest_framework.mixins import RetrieveModelMixin, ListModelMixin, UpdateModelMixin
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet, ModelViewSet

from .icon_list import ICON_LIST
from .models import SystemConfig, UploadFile, Role, Menu, Department, Upload
from .serializers import SystemConfigSerializer, UploadFileSerializer, RoleSerializer, MenuSerializer, UploadSerializer, \
    MenuListSerializer
from .serializers import SimpleMenuSerializer, DepartmentSerializer, PeriodicTaskSerializer
from django_celery_beat.models import PeriodicTask


class PeriodicTaskViewSet(ModelViewSet):
    """
    菜单视图
    """
    serializer_class = PeriodicTaskSerializer
    queryset = PeriodicTask.objects.all()


class SystemConfigViewSet(viewsets.ModelViewSet):
    """
    系统设置消息主接口
    """
    queryset = SystemConfig.objects.all()
    serializer_class = SystemConfigSerializer

    @action(detail=False, methods=["GET"])
    def icon_list(self, request):
        """
        :param request: title:请求用户通知
        :return: GET:接受的所有title值，POST：具体的数据
        """
        page_no = int(request.GET.get("pageNo", 1))
        page_size = int(request.GET.get("pageSize", 16))
        title = request.GET.get("title", '')
        icon_list = [x for i, x in enumerate(ICON_LIST) if x.find(title) != -1][
                    (page_no - 1) * page_size:page_no * page_size]
        return Response({
            "code": 200,
            "message": "success",
            "info": {
                'list': icon_list,
                'total': len(ICON_LIST),
            }
        })

    @action(detail=False, methods=["GET"])
    def version(self, request):
        """
        :param request: title:请求系统版本
        :return: GET:无，POST：无
        """
        return Response(self.queryset.get(key="version").value)


class UploadFileAPIView(APIView):
    """
    文件上传视图
    """

    def get(self, request, pk):
        try:
            file = UploadFile.objects.get(id=pk)
        except UploadFile.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = UploadFileSerializer(instance=file)
        return Response(serializer.data)

    # 改
    # def post(self, request, pk):


class RoleViewSet(viewsets.ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()

    # lookup_field = "code"

    # @action(detail=False, methods=["GET"])
    # def get_list(self, request):
    #     queryset = self.filter_queryset(self.get_queryset())
    #     page = self.paginate_queryset(queryset)
    #     if page is not None:
    #         serializer = self.get_serializer(page, many=True)
    #         return self.get_paginated_response(serializer.data)
    #
    #     serializer = self.get_serializer(queryset, many=True)
    #     print(serializer.data)
    #     return Response(serializer.data)

    @action(detail=False, methods=["GET"])
    def get_menu_roles(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        children = []
        for item in serializer.data:
            children.append({
                'id': '@id',
                'role': item['code'],
                'label': item['name']
            })
        return Response({
            "code": 200,
            "message": "success",
            "info": {
                'total': len(children),
                'list': [
                    {
                        'id': 'root',
                        'label': '全部角色',
                        'children': children,
                    }
                ],
            },
        })

    # @action(detail=False, methods=["GET"])
    # def role_menus(self, request):
    #     """
    #     获取用户菜单
    #     :param request:
    #     :return:用户菜单
    #     """
    #     # menus_list = list(request.user.get_all_menus().order_by('seq'))
    #     # menus_list = list(self.filter_queryset(self.get_queryset()).order_by('seq'))
    #     role_name = request.GET.get('role', None)
    #     if role_name is not None:
    #         menus_list = list(
    #             self.filter_queryset(self.get_queryset()).get(
    #                 codename=request.GET.get('role', None)
    #             ).menus.all().order_by('seq')
    #         )
    #     else:
    #         menus_list = list(Menu.objects.all().order_by('seq'))
    #     return Response({
    #         "code": 200,
    #         "message": "success",
    #         "info": {"list": menu_render(menus_list)}
    #     })


class MenuViewSet(ModelViewSet):
    """
    菜单视图
    """
    serializer_class = MenuSerializer
    queryset = Menu.objects.viewable()

    # lookup_field = "id"

    @action(detail=False, methods=["GET"])
    def simple_list(self, request):
        queryset = self.get_queryset()
        serializer = SimpleMenuSerializer(queryset, many=True)
        return Response(serializer.data)


class MenuListViewSet(ModelViewSet):
    """
    菜单视图
    """
    serializer_class = MenuListSerializer
    queryset = Menu.objects.all()


class DepartmentViewSet(ModelViewSet):
    """
    菜单视图
    """
    serializer_class = DepartmentSerializer
    queryset = Department.objects.viewable()


class UploadViewset(viewsets.ModelViewSet):
    """ 文件上传 """
    queryset = Upload.objects.all()
    serializer_class = UploadSerializer


@api_view(['GET'])
def menu(request):
    return Response({
        "menu": [
            {
                "name": "home",
                "path": "/home",
                "meta": {
                    "title": "首页",
                    "icon": "el-icon-eleme-filled",
                    "type": "menu"
                },
                "children": [
                    {
                        "name": "dashboard",
                        "path": "/dashboard",
                        "meta": {
                            "title": "控制台",
                            "icon": "el-icon-menu",
                            "affix": True,
                        },
                        "component": "home"
                    },
                    {
                        "name": "userCenter",
                        "path": "/usercenter",
                        "meta": {
                            "title": "个人信息",
                            "icon": "el-icon-user"
                        },
                        "component": "userCenter"
                    }
                ]
            },
            {
                "name": "vab",
                "path": "/vab",
                "meta": {
                    "title": "组件",
                    "icon": "el-icon-takeaway-box",
                    "type": "menu"
                },
                "children": [
                    {
                        "path": "/vab/mini",
                        "name": "minivab",
                        "meta": {
                            "title": "原子组件",
                            "icon": "el-icon-magic-stick",
                            "type": "menu"
                        },
                        "component": "vab/mini"
                    },
                    {
                        "path": "/vab/iconfont",
                        "name": "iconfont",
                        "meta": {
                            "title": "扩展图标",
                            "icon": "el-icon-orange",
                            "type": "menu"
                        },
                        "component": "vab/iconfont"
                    },
                    {
                        "path": "/vab/data",
                        "name": "vabdata",
                        "meta": {
                            "title": "Data 数据展示",
                            "icon": "el-icon-histogram",
                            "type": "menu"
                        },
                        "children": [
                            {
                                "path": "/vab/chart",
                                "name": "chart",
                                "meta": {
                                    "title": "图表 Echarts",
                                    "type": "menu"
                                },
                                "component": "vab/chart"
                            },
                            {
                                "path": "/vab/statistic",
                                "name": "statistic",
                                "meta": {
                                    "title": "统计数值",
                                    "type": "menu"
                                },
                                "component": "vab/statistic"
                            },
                            {
                                "path": "/vab/video",
                                "name": "scvideo",
                                "meta": {
                                    "title": "视频播放器",
                                    "type": "menu"
                                },
                                "component": "vab/video"
                            },
                            {
                                "path": "/vab/qrcode",
                                "name": "qrcode",
                                "meta": {
                                    "title": "二维码",
                                    "type": "menu"
                                },
                                "component": "vab/qrcode"
                            }
                        ]
                    },
                    {
                        "path": "/vab/form",
                        "name": "vabform",
                        "meta": {
                            "title": "Form 数据录入",
                            "icon": "el-icon-edit",
                            "type": "menu"
                        },
                        "children": [
                            {
                                "path": "/vab/tableselect",
                                "name": "tableselect",
                                "meta": {
                                    "title": "表格选择器",
                                    "type": "menu"
                                },
                                "component": "vab/tableselect"
                            },
                            {
                                "path": "/vab/formtable",
                                "name": "formtable",
                                "meta": {
                                    "title": "表单表格",
                                    "type": "menu"
                                },
                                "component": "vab/formtable"
                            },
                            {
                                "path": "/vab/filterbar",
                                "name": "filterBar",
                                "meta": {
                                    "title": "过滤器v2",
                                    "type": "menu"
                                },
                                "component": "vab/filterBar"
                            },
                            {
                                "path": "/vab/upload",
                                "name": "upload",
                                "meta": {
                                    "title": "上传",
                                    "type": "menu"
                                },
                                "component": "vab/upload"
                            },
                            {
                                "path": "/vab/select",
                                "name": "scselect",
                                "meta": {
                                    "title": "异步选择器",
                                    "type": "menu"
                                },
                                "component": "vab/select"
                            },
                            {
                                "path": "/vab/iconselect",
                                "name": "iconSelect",
                                "meta": {
                                    "title": "图标选择器",
                                    "type": "menu"
                                },
                                "component": "vab/iconselect"
                            },
                            {
                                "path": "/vab/cron",
                                "name": "cron",
                                "meta": {
                                    "title": "Cron规则生成器",
                                    "type": "menu"
                                },
                                "component": "vab/cron"
                            },
                            {
                                "path": "/vab/editor",
                                "name": "editor",
                                "meta": {
                                    "title": "富文本编辑器",
                                    "type": "menu"
                                },
                                "component": "vab/editor"
                            }
                        ]
                    },
                    {
                        "path": "/vab/feedback",
                        "name": "vabfeedback",
                        "meta": {
                            "title": "Feedback 反馈",
                            "icon": "el-icon-mouse",
                            "type": "menu"
                        },
                        "children": [
                            {
                                "path": "/vab/drag",
                                "name": "drag",
                                "meta": {
                                    "title": "拖拽排序",
                                    "type": "menu"
                                },
                                "component": "vab/drag"
                            },
                            {
                                "path": "/vab/contextmenu",
                                "name": "contextmenu",
                                "meta": {
                                    "title": "右键菜单",
                                    "type": "menu"
                                },
                                "component": "vab/contextmenu"
                            },
                            {
                                "path": "/vab/cropper",
                                "name": "cropper",
                                "meta": {
                                    "title": "图像剪裁",
                                    "type": "menu"
                                },
                                "component": "vab/cropper"
                            },
                            {
                                "path": "/vab/fileselect",
                                "name": "fileselect",
                                "meta": {
                                    "title": "资源库选择器",
                                    "type": "menu"
                                },
                                "component": "vab/fileselect"
                            },
                            {
                                "path": "/vab/dialog",
                                "name": "dialogExtend",
                                "meta": {
                                    "title": "弹窗扩展",
                                    "type": "menu"
                                },
                                "component": "vab/dialog"
                            }
                        ]
                    },
                    {
                        "path": "/vab/others",
                        "name": "vabothers",
                        "meta": {
                            "title": "Others 其他",
                            "icon": "el-icon-more-filled",
                            "type": "menu"
                        },
                        "children": [
                            {
                                "path": "/vab/print",
                                "name": "print",
                                "meta": {
                                    "title": "打印",
                                    "type": "menu"
                                },
                                "component": "vab/print"
                            },
                            {
                                "path": "/vab/watermark",
                                "name": "watermark",
                                "meta": {
                                    "title": "水印",
                                    "type": "menu"
                                },
                                "component": "vab/watermark"
                            }
                        ]
                    },
                    {
                        "path": "/vab/workflow",
                        "name": "workflow",
                        "meta": {
                            "title": "工作流设计器",
                            "icon": "el-icon-share",
                            "type": "menu"
                        },
                        "component": "vab/workflow"
                    },
                    {
                        "path": "/vab/formrender",
                        "name": "formRender",
                        "meta": {
                            "title": "动态表单(Beta)",
                            "icon": "el-icon-message-box",
                            "type": "menu"
                        },
                        "component": "vab/form"
                    }
                ]
            },
            {
                "name": "template",
                "path": "/template",
                "meta": {
                    "title": "模板",
                    "icon": "el-icon-files",
                    "type": "menu"
                },
                "children": [
                    {
                        "path": "/template/blank",
                        "name": "blank",
                        "meta": {
                            "title": "空白模板",
                            "icon": "el-icon-folder",
                            "type": "menu"
                        },
                        "component": "template/blank"
                    },
                    {
                        "path": "/template/chartlist",
                        "name": "chartlist",
                        "meta": {
                            "title": "统计列表",
                            "icon": "el-icon-data-analysis",
                            "type": "menu"
                        },
                        "component": "template/chartlist"
                    },
                    {
                        "path": "/template/calendar",
                        "name": "calendar",
                        "meta": {
                            "title": "日历计划",
                            "icon": "el-icon-calendar",
                            "type": "menu"
                        },
                        "component": "template/calendar"
                    },
                    {
                        "path": "/template/list",
                        "name": "list",
                        "meta": {
                            "title": "详细列表",
                            "icon": "el-icon-fold",
                            "type": "menu"
                        },
                        "component": "template/list"
                    },
                    {
                        "path": "/template/list/save/:id?",
                        "name": "list-save",
                        "meta": {
                            "title": "新标签",
                            "hidden": True,
                            "active": "/template/list",
                            "type": "menu"
                        },
                        "component": "template/list/save"
                    },
                    {
                        "path": "/template/svgmap",
                        "name": "svgmap",
                        "meta": {
                            "title": "地理信息",
                            "icon": "el-icon-map-location",
                            "type": "menu"
                        },
                        "component": "template/svgmap"
                    },
                    {
                        "path": "/template/tabinfo",
                        "name": "tabinfo",
                        "meta": {
                            "title": "分栏明细",
                            "icon": "el-icon-document",
                            "type": "menu"
                        },
                        "component": "template/tabinfo"
                    },
                    {
                        "path": "/template/server",
                        "name": "server",
                        "meta": {
                            "title": "服务器监控",
                            "icon": "el-icon-cpu",
                            "type": "menu"
                        },
                        "component": "template/server"
                    },
                    {
                        "path": "/template/stepform",
                        "name": "stepform",
                        "meta": {
                            "title": "分步表单",
                            "icon": "el-icon-switch",
                            "type": "menu"
                        },
                        "component": "template/stepform"
                    }
                ]
            },
            {
                "name": "other",
                "path": "/other",
                "meta": {
                    "title": "其他",
                    "icon": "el-icon-more-filled",
                    "type": "menu"
                },
                "children": [
                    {
                        "path": "/other/directive",
                        "name": "directive",
                        "meta": {
                            "title": "指令",
                            "icon": "el-icon-price-tag",
                            "type": "menu"
                        },
                        "component": "other/directive"
                    },
                    {
                        "path": "/other/viewTags",
                        "name": "viewTags",
                        "meta": {
                            "title": "标签操作",
                            "icon": "el-icon-files",
                            "type": "menu"
                        },
                        "component": "other/viewTags",
                        "children": [
                            {
                                "path": "/other/fullpage",
                                "name": "fullpage",
                                "meta": {
                                    "title": "整页路由",
                                    "icon": "el-icon-monitor",
                                    "fullpage": True,
                                    "hidden": True,
                                    "type": "menu"
                                },
                                "component": "other/fullpage"
                            }
                        ]
                    },
                    {
                        "path": "/link",
                        "name": "link",
                        "meta": {
                            "title": "外部链接",
                            "icon": "el-icon-link",
                            "type": "menu"
                        },
                        "children": [
                            {
                                "path": "https://baidu.com",
                                "name": "百度",
                                "meta": {
                                    "title": "百度",
                                    "type": "link"
                                }
                            },
                            {
                                "path": "https://www.google.cn",
                                "name": "谷歌",
                                "meta": {
                                    "title": "谷歌",
                                    "type": "link"
                                }
                            }
                        ]
                    },
                    {
                        "path": "/iframe",
                        "name": "Iframe",
                        "meta": {
                            "title": "Iframe",
                            "icon": "el-icon-position",
                            "type": "menu"
                        },
                        "children": [
                            {
                                "path": "https://v3.cn.vuejs.org",
                                "name": "vue3",
                                "meta": {
                                    "title": "VUE 3",
                                    "type": "iframe"
                                }
                            },
                            {
                                "path": "https://element-plus.gitee.io",
                                "name": "elementplus",
                                "meta": {
                                    "title": "Element Plus",
                                    "type": "iframe"
                                }
                            },
                            {
                                "path": "https://lolicode.gitee.io/scui-doc",
                                "name": "scuidoc",
                                "meta": {
                                    "title": "SCUI文档",
                                    "type": "iframe"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "name": "test",
                "path": "/test",
                "meta": {
                    "title": "实验室",
                    "icon": "el-icon-mouse",
                    "type": "menu"
                },
                "children": [
                    {
                        "path": "/test/autocode",
                        "name": "autocode",
                        "meta": {
                            "title": "代码生成器",
                            "icon": "sc-icon-code",
                            "type": "menu"
                        },
                        "redirect": "/test/autocode/index",
                        "children": [
                            {
                                "path": "/test/autocode/index",
                                "name": "autocode-index",
                                "meta": {
                                    "title": "代码生成器",
                                    "hidden": True,
                                    "hiddenBreadcrumb": True,
                                    "active": "/test/autocode",
                                    "type": "menu"
                                },
                                "component": "test/autocode"
                            },
                            {
                                "path": "/test/autocode/list",
                                "name": "autocode-list",
                                "meta": {
                                    "title": "列表生成器",
                                    "hidden": True,
                                    "active": "/test/autocode",
                                    "type": "menu"
                                },
                                "component": "test/autocode/list"
                            }
                        ]
                    },
                    {
                        "path": "/test/codebug",
                        "name": "codebug",
                        "meta": {
                            "title": "异常处理",
                            "icon": "sc-icon-bug-line",
                            "type": "menu"
                        },
                        "component": "test/codebug"
                    }
                ]
            },
            {
                "name": "setting",
                "path": "/setting",
                "meta": {
                    "title": "配置",
                    "icon": "el-icon-setting",
                    "type": "menu"
                },
                "children": [
                    {
                        "path": "/setting/system",
                        "name": "system",
                        "meta": {
                            "title": "系统设置",
                            "icon": "el-icon-tools",
                            "type": "menu"
                        },
                        "component": "setting/system"
                    },
                    {
                        "path": "/setting/user",
                        "name": "user",
                        "meta": {
                            "title": "用户管理",
                            "icon": "el-icon-user-filled",
                            "type": "menu"
                        },
                        "component": "setting/user"
                    },
                    {
                        "path": "/setting/role",
                        "name": "role",
                        "meta": {
                            "title": "角色管理",
                            "icon": "el-icon-notebook",
                            "type": "menu"
                        },
                        "component": "setting/role"
                    },
                    {
                        "path": "/setting/dic",
                        "name": "dic",
                        "meta": {
                            "title": "字典管理",
                            "icon": "el-icon-document",
                            "type": "menu"
                        },
                        "component": "setting/dic"
                    },
                    {
                        "path": "/setting/table",
                        "name": "tableSetting",
                        "meta": {
                            "title": "表格列管理",
                            "icon": "el-icon-scale-to-original",
                            "type": "menu"
                        },
                        "component": "setting/table"
                    },
                    {
                        "path": "/setting/menu",
                        "name": "settingMenu",
                        "meta": {
                            "title": "菜单管理",
                            "icon": "el-icon-fold",
                            "type": "menu"
                        },
                        "component": "setting/menu"
                    },
                    {
                        "path": "/setting/task",
                        "name": "task",
                        "meta": {
                            "title": "计划任务",
                            "icon": "el-icon-alarm-clock",
                            "type": "menu"
                        },
                        "component": "setting/task"
                    },
                    {
                        "path": "/setting/client",
                        "name": "client",
                        "meta": {
                            "title": "应用管理",
                            "icon": "el-icon-help-filled",
                            "type": "menu"
                        },
                        "component": "setting/client"
                    },
                    {
                        "path": "/setting/log",
                        "name": "log",
                        "meta": {
                            "title": "系统日志",
                            "icon": "el-icon-warning",
                            "type": "menu"
                        },
                        "component": "setting/log"
                    }
                ]
            },
            {
                "path": "/other/about",
                "name": "about",
                "meta": {
                    "title": "关于",
                    "icon": "el-icon-info-filled",
                    "type": "menu"
                },
                "component": "other/about"
            }
        ],
        "permissions": [
            "list.add",
            "list.edit",
            "list.delete",
            "user.add",
            "user.edit",
            "user.delete"
        ]
    })


def site_status(request, platform):
    if platform == 'ali':
        return JsonResponse({
            "statusCode": 200,
            "data": "0",
            "succeeded": True,
            "errors": None,
            "extras": None,
            "timestamp": int(time.time())
        })
