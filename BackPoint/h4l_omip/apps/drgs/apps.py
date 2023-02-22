from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class DrgsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'drgs'
    verbose_name = _("单病种监测")
