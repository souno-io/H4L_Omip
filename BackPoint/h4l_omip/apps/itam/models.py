from django.db import models
from django.utils.translation import gettext_lazy as _
from pythonping import ping as python_ping

from common.models import H4LBaseModel


class DataCenter(H4LBaseModel):
    label = models.CharField(
        '数据中心名称', unique=True, blank=True, null=False, max_length=255, help_text="数据中心名称:老院机房,新院机房等"
    )

    class Meta:
        verbose_name = '数据中心'
        verbose_name_plural = verbose_name


class Cabinet(H4LBaseModel):
    label = models.CharField(
        '机柜编号', unique=True, blank=True, null=False, max_length=255, help_text="机柜编号:微模块1-1-2,微模块2-1-2等"
    )
    units = models.IntegerField('单元数量', unique=True, blank=True, help_text="单元数量:20,25等")
    remark = models.TextField(_('备注'), null=True, blank=False, help_text="备注:微模块1等")

    class Meta:
        verbose_name = '机柜'
        verbose_name_plural = verbose_name


class DeviceType(H4LBaseModel):
    label = models.CharField(
        '设备类型名', unique=True, blank=True, null=False, max_length=255,
        help_text="设备类型名:PC,路由器,交换机等"
    )

    class Meta:
        verbose_name = '设备类型'
        verbose_name_plural = verbose_name


class Device(H4LBaseModel):
    label = models.CharField(
        "设备名称", unique=True, blank=False, null=False, max_length=255,
        help_text="设备类型名:核心交换机等"
    )
    type = models.ForeignKey(
        "DeviceType", verbose_name="设备类型", blank=False, null=True, on_delete=models.SET_NULL,
        related_name='device_type'
    )
    model_spec = models.CharField("型号规格", null=True, blank=True, max_length=255, help_text="型号规格:ar2000等")
    manufacturer = models.CharField("生产厂家", null=True, blank=True, max_length=255, help_text="生产厂家:华三，华为等")
    warranty_period = models.DateField('保修期限', null=True, blank=True, help_text="生产厂家:2021/11/22等")
    space = models.IntegerField('空间占用', unique=True, blank=True, help_text="空间占用：占用的机柜单元数量,2,3等")
    bind_Cabinet = models.ForeignKey(
        "Cabinet", verbose_name="绑定机柜", blank=True, null=True, on_delete=models.SET_NULL,
        related_name='device_Cabinet'
    )
    location = models.CharField(
        _('使用位置'), null=True, blank=False, max_length=255,
        help_text="备注使用位置:楼层，办公室等"
    )

    class Meta:
        verbose_name = '设备类型'
        verbose_name_plural = verbose_name


class IPAddress(H4LBaseModel):
    ip_address = models.GenericIPAddressField(_('IP地址'), unique=True, blank=False, help_text="需要管理的IP地址信息")
    use_device = models.ForeignKey(
        "Device", verbose_name=_("使用设备"), blank=True, null=True, on_delete=models.SET_NULL,
        related_name='ip_use_device'
    )
    bind_device = models.ForeignKey(
        "Device", verbose_name=_("绑定设备"), blank=True, null=True, on_delete=models.SET_NULL,
        related_name='ip_bind_device'
    )
    location = models.CharField(
        _('使用位置'), null=True, blank=False, max_length=255,
        help_text="备注使用位置:楼层，办公室等"
    )
    purpose = models.TextField(_('用途备注'), null=True, blank=False, help_text="备注IP地址使用情况")

    class Meta:
        verbose_name = 'IP地址'
        verbose_name_plural = verbose_name

    def ping(self):
        return python_ping(self.ip_address).packet_loss
