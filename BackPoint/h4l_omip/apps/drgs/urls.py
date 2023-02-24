from django.urls import path
from . import views as system_views

app_name = "drgs"

urlpatterns = [
    path("", view=system_views.manage, name="index"),
]
