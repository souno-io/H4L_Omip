from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter
from .api_views import IPAddressViewSet

app_name = "item"

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("ip_address", IPAddressViewSet)

urlpatterns = router.urls
