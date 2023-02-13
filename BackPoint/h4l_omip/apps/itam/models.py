from django.contrib.auth import get_user_model
from django.db import models, IntegrityError
from django.utils.translation import gettext_lazy as _
from pythonping import ping as python_ping

from common.models import H4LBaseModel

User = get_user_model()


class IPAddressManager(models.Manager):
    """
    使用文档查看：https://github.com/autocracy/python-ipy/
    """

    def generate(self, net_seg: str) -> None:
        from IPy import IP
        for i in IP(net_seg):
            try:
                self.create(ip_address=str(i))
            except IntegrityError as e:
                pass

    def application(self, user) -> str:
        if self.filter(usage_status=2).filter(usage_user=user).first() is not None:
            return self.filter(usage_status=2).filter(usage_user=user).first()
        else:
            new_ip = self.filter(usage_status=1).first()
            new_ip.usage_status = 2
            new_ip.usage_user = user
            new_ip.save()
            return new_ip

    def release(self, ip_address: str) -> int:
        new_ip = self.get(ip_address=ip_address)
        new_ip.usage_status = 1
        new_ip.use_device = None
        new_ip.bind_device = None
        new_ip.location = None
        new_ip.purpose = None
        new_ip.save()
        return new_ip.usage_status

    def purge(self, net_seg: str):
        from IPy import IP
        for i in IP(net_seg):
            return self.get(ip_address=str(i)).delete()


class DataCenter(H4LBaseModel):
    label = models.CharField(
        '数据中心名称', unique=True, blank=True, null=False, max_length=255, help_text="数据中心名称:老院机房,新院机房等"
    )

    class Meta:
        verbose_name = '数据中心'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.label


class Cabinet(H4LBaseModel):
    label = models.CharField(
        '机柜编号', unique=True, blank=True, null=False, max_length=255, help_text="机柜编号:微模块1-1-2,微模块2-1-2等"
    )
    data_center = models.ForeignKey(
        "DataCenter", verbose_name=_("数据中心"), blank=True, null=True, on_delete=models.SET_NULL,
        related_name='cabinet_of_dc'
    )
    units = models.IntegerField('单元数量', unique=True, blank=True, help_text="单元数量:20,25等")
    remark = models.TextField(_('备注'), null=True, blank=False, help_text="备注:微模块1等")

    class Meta:
        verbose_name = '机柜'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.label


class DeviceType(H4LBaseModel):
    label = models.CharField(
        '设备类型名', unique=True, blank=True, null=False, max_length=255,
        help_text="设备类型名:PC,路由器,交换机等"
    )

    class Meta:
        verbose_name = '设备类型'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.label


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
    space = models.IntegerField('空间占用', blank=True, null=True, help_text="空间占用：占用的机柜单元数量,2,3等")
    bind_Cabinet = models.ForeignKey(
        "Cabinet", verbose_name="绑定机柜", blank=True, null=True, on_delete=models.SET_NULL,
        related_name='device_Cabinet'
    )
    location = models.CharField(
        _('使用位置'), null=True, blank=False, max_length=255,
        help_text="备注使用位置:楼层，办公室等"
    )

    class Meta:
        verbose_name = '设备'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.label


class IPAddress(H4LBaseModel):
    class UsageStatus(models.IntegerChoices):
        IDLE = 1, _('空闲中')
        OCCUPIED = 2, _('占用中')
        IS_USED = 3, _('被使用')
        OTHER = 9, _('其他')

    ip_address = models.GenericIPAddressField(
        _('IP地址'), unique=True, blank=False, null=False,
        help_text="需要管理的IP地址信息"
    )
    use_device = models.ForeignKey(
        "Device", verbose_name=_("本端使用设备"), blank=True, null=True, on_delete=models.SET_NULL,
        related_name='ip_use_device'
    )
    bind_device = models.ForeignKey(
        "Device", verbose_name=_("对端绑定设备"), blank=True, null=True, on_delete=models.SET_NULL,
        related_name='ip_bind_device'
    )
    location = models.CharField(
        _('使用位置'), null=True, blank=True, max_length=255,
        help_text="备注使用位置:楼层，办公室等"
    )
    os_type = models.CharField(
        '操作系统类型', null=True, blank=True, max_length=255,
        help_text="备注使用位置:楼层，办公室等"
    )
    usage_user = models.ForeignKey(
        User, verbose_name=_("占用人"), blank=True, null=True, on_delete=models.SET_NULL,
        related_name='ip_bind_user'
    )
    usage_status = models.IntegerField(
        _('使用状态'), choices=UsageStatus.choices, null=False, blank=False, default=UsageStatus.IDLE,
        help_text="备注IP地址状态情况"
    )
    purpose = models.TextField(_('用途备注'), null=True, blank=True, help_text="备注IP地址使用情况")

    objects = IPAddressManager()

    class Meta:
        ordering = ['ip_address']
        verbose_name = 'IP地址'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.ip_address

    def ping(self):
        return python_ping(self.ip_address).packet_loss
