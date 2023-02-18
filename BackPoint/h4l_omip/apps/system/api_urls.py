from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework_sso.views import obtain_authorization_token

from common.authentication import H4LObtainSessionTokenView
from system.api_views import menu as system_menu, MenuViewSet, RoleViewSet, DepartmentViewSet, PeriodicTaskViewSet, \
    UploadViewset
from .api_views import SystemConfigViewSet, site_status

app_name = "system"

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("config", SystemConfigViewSet)
router.register("router", MenuViewSet)
router.register("roles", RoleViewSet)
router.register("depart", DepartmentViewSet)
router.register("tasks", PeriodicTaskViewSet)
router.register("upload", UploadViewset)

urlpatterns = [
    # path("~redirect/", view=user_redirect_view, name="redirect"),
    path("site_status/<str:platform>", view=site_status, name="site_status"),
] + router.urls
