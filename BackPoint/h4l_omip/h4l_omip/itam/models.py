from django.db import models
from django.utils.translation import gettext_lazy as _
from pythonping import ping as python_ping

from h4l_omip.common.models import H4LBaseModel


class IPAddress(H4LBaseModel):
    ip_address = models.GenericIPAddressField(_('IP地址'), unique=True, blank=True, help_text="需要管理的IP地址信息")
    purpose = models.TextField(_('用途备注'), null=True, blank=False, help_text="备注IP地址使用情况")

    class Meta:
        verbose_name = 'IP地址管理'
        verbose_name_plural = verbose_name

    def ping(self):
        return python_ping(self.ip_address).packet_loss
