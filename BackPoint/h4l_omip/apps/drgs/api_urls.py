from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter

from .api_views import SingleDiseaseViewSet, StaResultsViewSet

app_name = "drgs"

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("single_disease", SingleDiseaseViewSet)
router.register("result", StaResultsViewSet)

urlpatterns = router.urls
