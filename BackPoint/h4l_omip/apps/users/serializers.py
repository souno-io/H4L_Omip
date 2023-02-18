import datetime

from django.contrib.auth import get_user_model
# from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from common.serializers import RecursiveField
from system.models import Menu, Role, SystemConfig

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    user_roles_str = serializers.SerializerMethodField()
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = User
        # fields = "__all__"
        exclude = ["password", "is_superuser", "is_staff"]
        extra_kwargs = {
            "url": {"view_name": "api:users:userprofile-detail", "lookup_field": "username"}
        }

    def get_user_roles_str(self, obj):
        return obj.user_roles.values_list("label", flat=True)

    def create(self, validate_data):
        user = super().create(validate_data)
        user.set_password(SystemConfig.objects.get(key='Default_PassWord').value)
        user.save()
        return user
