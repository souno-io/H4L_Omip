from swapper import swappable_setting
from django.utils.translation import gettext_lazy as _

from .base.models import AbstractNotification, notify_handler  # noqa


class Notification(AbstractNotification):
    class Meta(AbstractNotification.Meta):
        abstract = False
        swappable = swappable_setting('notifications', 'Notification')
        verbose_name = _('Notification')
        verbose_name_plural = verbose_name
