from rest_framework import serializers

from common.serializers import RecursiveField
from .models import SystemConfig, UploadFile, Menu, Role, Department
from django_celery_beat.models import PeriodicTask, CrontabSchedule


# class NoticeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Notice
#         fields = "__all__"
class CrontabScheduleSerializer(serializers.ModelSerializer):
    ruler = serializers.SerializerMethodField()

    class Meta:
        model = CrontabSchedule
        fields = ["id", "ruler"]

    def get_ruler(self, obj):
        return obj.__str__()


class PeriodicTaskSerializer(serializers.ModelSerializer):
    crontab = CrontabScheduleSerializer()

    class Meta:
        model = PeriodicTask
        fields = "__all__"


class DepartmentSerializer(serializers.ModelSerializer):
    children = RecursiveField(many=True)
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = Department
        # fields = ('codename',)
        fields = [
            'id', 'label', 'parentId', 'remark', 'is_active', 'create_datetime', 'update_datetime', 'children'
        ]


class SystemConfigSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = SystemConfig
        fields = "__all__"


class UploadFileSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = UploadFile
        fields = [
            'file', 'create_datetime', 'update_datetime',
        ]


class MenuMetaSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = Menu
        fields = [
            'title', 'icon', 'type', 'affix', 'active', 'hidden', 'fullpage', 'hiddenBreadcrumb', 'create_datetime',
            'update_datetime',
            # 'levelHidden', 'noKeepAlive', 'badge', 'tabHidden',
            # 'activeMenu', 'noClosable', 'dot', 'dynamicNewTab'
        ]


class MenuSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    # parentcode = serializers.StringRelatedField(many=True)
    children = RecursiveField(many=True)
    # meta = MenuMetaSerializer(many=False)
    meta = serializers.SerializerMethodField()

    class Meta:
        model = Menu
        # fields = ('codename',)
        fields = [
            'id', 'name', 'path', 'component', 'redirect', 'seq',
            'meta', 'children', 'create_datetime', 'update_datetime',
        ]

    def get_meta(self, obj):
        meta = Menu.objects.filter(id=obj.id)
        if meta is not None and len(meta) > 0:
            return MenuMetaSerializer(meta[0]).data
        else:
            return ""


class SimpleMenuSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    # parentcode = serializers.StringRelatedField(many=True)
    children = RecursiveField(many=True)

    class Meta:
        model = Menu
        fields = ['id', 'title', 'children', 'create_datetime', 'update_datetime', ]


class RoleSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    competences = serializers.StringRelatedField(many=True)
    menus = serializers.StringRelatedField(many=True)

    class Meta:
        model = Role
        # fields = ('codename',)
        fields = "__all__"
