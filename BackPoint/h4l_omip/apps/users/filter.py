import rest_framework_filters as filters
from common.filter import H4LFilter
from .models import UserProfile


class UserProfileFilter(H4LFilter):
    class Meta:
        model = UserProfile
        fields = ['update_datetime', 'create_datetime', 'is_active', 'user_departments', 'user_roles']
