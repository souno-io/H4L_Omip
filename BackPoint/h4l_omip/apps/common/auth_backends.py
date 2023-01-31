from django.contrib.auth import get_user_model

# from drf_spectacular.extensions import OpenApiAuthenticationExtension
# from drf_spectacular.plumbing import build_bearer_security_scheme_object

User = get_user_model()


class UsernameAuthBackend(object):
    def authenticate(self, request, username=None, password=None):
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


class EmailAuthBackend(object):
    def authenticate(self, request, username=None, password=None):
        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


class PhoneAuthBackend(object):
    def authenticate(self, request, username=None, password=None):
        try:
            user = User.objects.get(phone=username)
            if user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None


class HISAuthBackend(object):
    def authenticate(self, request, username=None, password=None):
        try:
            user = User.objects.get(employee_num__num=username)
            if user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
