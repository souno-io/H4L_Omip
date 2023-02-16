from rest_framework.response import Response
from rest_framework_sso.models import SessionToken
from rest_framework_sso.views import create_session_payload, encode_jwt_token, ObtainSessionTokenView
from django.contrib.auth import get_user_model
from rest_framework_sso import claims
from rest_framework import exceptions, serializers
from django.utils.translation import gettext_lazy as _

User = get_user_model()


def authenticate_payload(payload):
    user_model = get_user_model()
    user, created = user_model.objects.get_or_create(
        service=payload.get(claims.ISSUER),
        external_id=payload.get(claims.USER_ID),
    )
    if not user.is_active:
        raise exceptions.AuthenticationFailed(_('User inactive or deleted.'))
    return user


# class AuthorizationTokenSerializer(serializers.Serializer):
#     userInfo =
#     class Meta:
#         fields = '__all__'
#
#
class H4LObtainSessionTokenView(ObtainSessionTokenView):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        client_id = serializer.validated_data["client_id"]
        session_token = (
            SessionToken.objects.active()
            .filter(user=user, client_id=client_id)
            .with_user_agent(request=request)
            .first()
        )
        if session_token is None:
            session_token = SessionToken(user=user, client_id=client_id)
        session_token.update_attributes(request=request)
        session_token.save()
        payload = create_session_payload(session_token=session_token, user=user)
        jwt_token = encode_jwt_token(payload=payload)
        userInfo = {
            'dashboard': 0,
            'userId': user.id,
            'role': list(user.get_roles().values_list('label', flat=True)),
            'userName': user.name,
            'account': user.username,
            # 'sex': user.gender,
            'about': user.signature,
            'email': user.email,
        }
        return Response({"token": jwt_token, "userInfo": userInfo})
