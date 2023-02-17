from django.contrib.auth import get_user_model
# from drf_spectacular.utils import extend_schema_field
from rest_framework import serializers

from common.serializers import RecursiveField
from system.models import Menu, Role

User = get_user_model()


class UserProfileSerializer(serializers.ModelSerializer):
    # user_roles_str = serializers.StringRelatedField(many=True)
    user_roles_str = serializers.SerializerMethodField()
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = User
        fields = [
            "id", "url", "username", "name", "phone", "id_card_no", "employee_num", "avatar", "email", "signature",
            "is_staff", "is_active", "last_login", "groups", "user_departments", "user_roles", "user_roles_str",
            "user_permissions", "update_datetime", "create_datetime"
        ]
        # fields = "__all__"

        extra_kwargs = {
            "url": {"view_name": "api:users:userprofile-detail", "lookup_field": "username"}
        }

    def get_user_roles_str(self, obj):
        return obj.user_roles.values_list("label", flat=True)
