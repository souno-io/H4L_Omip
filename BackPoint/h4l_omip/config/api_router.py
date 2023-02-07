from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter
from django.urls import path, re_path, include
from rest_framework_sso.views import obtain_session_token, obtain_authorization_token
from common.authentication import H4LObtainSessionTokenView
from users.api_views import UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

# router.register("users", UserViewSet)


app_name = "api"
urlpatterns = [
    path('login/', H4LObtainSessionTokenView.as_view()),
    path('authorize/', obtain_authorization_token),
    path('users/', include("users.api_urls")),
    path('system/', include("system.api_urls")),
    path('itam/', include("itam.api_urls")),
] + router.urls

