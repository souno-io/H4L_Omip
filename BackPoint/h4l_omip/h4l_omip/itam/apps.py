from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ItamConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'h4l_omip.itam'
    verbose_name = _("资产管理")
