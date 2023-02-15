from django.contrib.auth import get_user_model

User = get_user_model()


class MultiAuthBackend(object):
    """
    4合一验证器
    """

    def authenticate(self, request, username=None, password=None, **kwargs):
        for field_name in ['username', 'email', 'phone', 'employee_num__num']:
            try:
                user = User.objects.get(**{field_name: username})
                if user.check_password(password):
                    return user
                return None
            except User.DoesNotExist:
                continue
        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
