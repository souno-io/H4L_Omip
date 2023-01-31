from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework_sso.views import obtain_authorization_token

from common.authentication import H4LObtainSessionTokenView
from system.api_views import menu as system_menu
from .api_views import UserViewSet, sync_employee,sync_department
from .views import user_redirect_view, user_update_view, user_detail_view

app_name = "users"

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("personal", UserViewSet)

urlpatterns = [
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    path('login/', H4LObtainSessionTokenView.as_view()),
    path('authorize/', obtain_authorization_token),
    path('menu/', system_menu, name='system_menu'),
    path('sync_employee/', sync_employee, name='synchro_employee'),
    path('sync_department/', sync_department, name='synchro_department'),
] + router.urls
