from django.urls import path
from . import views as system_views

app_name = "system"

urlpatterns = [
    path("", view=system_views.manage, name="manage"),
]
