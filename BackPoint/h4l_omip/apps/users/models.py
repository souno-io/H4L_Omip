from django.contrib.auth.hashers import make_password
from model_utils.fields import UUIDField
from model_utils.models import UUIDModel, TimeStampedModel
from mptt.fields import TreeForeignKey
from mptt.managers import TreeManager
from mptt.models import MPTTModel
from common.his import His
from common.models import H4LBaseModel, H4LJSONField
from common.utils import PathAndRename

from django.contrib.auth.models import AbstractUser
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models, IntegrityError
from django.db.models.aggregates import Count
from django.urls import reverse
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from common.ding_api import DingApi
from system.models import SystemConfig


class HISEmployeeManager(models.Manager):
    def test(self):
        return His("select sysdate from dual;").rows_as_dicts()

    def from_his(self):
        for var in His(SystemConfig.objects.get(key='HISEmployee').value).rows_as_dicts():
            new_dics = {}
            for i, j in var.items():
                if j == 'Y':
                    j = True
                elif j == 'N':
                    j = False
                new_dics[i.lower()] = j
            print(new_dics)
            try:
                print(new_dics['code'], new_dics['num'])
                obj = self.get(
                    code=new_dics['code'],
                    num=new_dics['num']
                )
                for key, value in new_dics.items():
                    setattr(obj, key.lower(), value)
                if obj.transfer_history is not None and obj.transfer_history.split(',')[-1] != str(
                    new_dics['department']):
                    setattr(obj, 'transfer_history', obj.transfer_history + ',' + str(new_dics['department']))
                else:
                    setattr(obj, 'transfer_history', str(new_dics['department']))
                obj.save()
            except self.model.DoesNotExist:
                obj = self.model(**new_dics)
                obj.save()
            try:
                UserProfile.objects.get(username=new_dics['num'])
            except UserProfile.DoesNotExist:
                UserProfile.objects.create(
                    username=new_dics['num'], name=new_dics['name'],
                    password=make_password(SystemConfig.objects.get(key='Default_PassWord').value),
                    phone=new_dics['phone'], employee_num=self.get(num=new_dics['num'])
                )
        return 'success!'


class HISEmployee(H4LBaseModel):
    class Gender(models.IntegerChoices):
        MALE = 1, _('男')
        FEMALE = 2, _('女')
        OTHER = 3, _('其他')
        NOTSET = 9, _('未说明')

    code = models.CharField(
        _('员工代码'),
        max_length=255,
        unique=True,
        null=False,
        blank=False,
        help_text=_('员工代码,同步HIS系统gy_ygdm.ygdm')
    )
    num = models.CharField(
        _('员工编号'),
        max_length=255,
        unique=True,
        null=False,
        blank=False,
        help_text=_('员工编号,同步HIS系统gy_ygdm.ygbh')
    )
    name = models.CharField(_('姓名'), null=False, blank=False, max_length=30, help_text=_('员工姓名'))
    gender = models.IntegerField(
        _('性别'), choices=Gender.choices, null=False, blank=False,
        help_text=_('性别：1：男，2：女,9：未说明')
    )
    identity = models.CharField(
        _('身份证号'),
        max_length=25,
        # unique=True,
        null=True,
        blank=True,
        help_text=_('身份证号,同步HIS系统gy_ygdm.sfzh')
    )
    nhic = models.CharField(
        _('国家医保编码'),
        max_length=25,
        # unique=True,
        null=True,
        blank=True,
        help_text=_('国家医保编码,同步HIS系统gy_ygdm.gjybysbm')
    )
    department = models.IntegerField('科室代码', null=True, blank=True, help_text=_('所属科室代码，同步gy_ygdm.ksdm'))
    is_specialist = models.BooleanField(_('是否专家'), default=False, null=False, blank=False, help_text=_('是否专家'))
    antibiotic_rights = models.BooleanField(_('抗生药权'), default=False, null=False, blank=False, help_text=_('抗生药权'))
    prescription_rights = models.BooleanField(_('开处方权'), default=False, null=False, blank=False, help_text=_('开处方权'))
    narcotics_rights = models.BooleanField(_('麻醉药权'), default=False, null=False, blank=False, help_text=_('麻醉药权'))
    psychotropic_rights = models.BooleanField(_('精神药权'), default=False, null=False, blank=False, help_text=_('精神药权'))
    phone = models.CharField(_('手机号码'), max_length=25, unique=True, blank=True, null=True, help_text=_('手机号码'))
    signature = models.BinaryField('签名图片', blank=True, null=True, help_text=_('签名图片'))
    transfer_history = models.TextField(_('转岗历史'), null=True, blank=True, help_text='转岗历史')
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )

    objects = HISEmployeeManager()

    class Meta:
        verbose_name = _('HIS员工')
        verbose_name_plural = _('HIS员工')
        ordering = ['code']

    def __str__(self):
        return self.num + '|' + self.name

    def transfer_history_chs(self):
        if self.transfer_history is not None:
            return [HISDepartment.objects.get(code=int(i)).name for i in self.transfer_history.split(',')]
        else:
            return []


class HISDepartmentManager(models.Manager):
    def test(self):
        return His("select sysdate from dual;").rows_as_dicts()

    def from_his(self):
        for var in His(SystemConfig.objects.get(key='HISDepartment').value).rows_as_dicts():
            new_dics = {}
            for i, j in var.items():
                if j == 'Y':
                    j = True
                elif j == 'N':
                    j = False
                new_dics[i.lower()] = j
            print(new_dics)
            try:
                obj = self.get(code=new_dics['code'])
                for key, value in new_dics.items():
                    setattr(obj, key.lower(), value)
                obj.save()
            except self.model.DoesNotExist:
                obj = self.model(**new_dics)
                obj.save()
        return 'success!'


class HISDepartment(H4LBaseModel):
    code = models.IntegerField(
        _('科室代码'),
        unique=True,
        null=False,
        blank=False,
        help_text=_('科室代码,同步HIS系统gy_ksdm.ksdm')
    )
    name = models.CharField(_('科室名称'), null=False, blank=False, max_length=50, help_text=_('科室名称'))
    alias = models.CharField(_('科室别名'), null=True, blank=True, max_length=50, help_text=_('科室别名'))
    parent_code = models.IntegerField(_('上级科室'), null=False, blank=False, default=0, help_text=_('上级科室'))
    is_outpatient = models.BooleanField(_('门诊使用'), null=False, default=False, blank=False, help_text=_('是否是门诊科室'))
    is_technology = models.BooleanField(_('医技使用'), null=False, default=False, blank=False, help_text=_('是否是医技科室'))
    is_inpatient = models.BooleanField(_('住院使用'), null=False, default=False, blank=False, help_text=_('是否是住院科室'))
    is_ward = models.BooleanField(_('病区使用'), null=False, default=False, blank=False, help_text=_('是否是病区科室'))
    is_consultation = models.BooleanField(_('会诊使用'), null=False, blank=False, default=False, help_text=_('是否是会诊使用'))
    rated_bed = models.IntegerField(_('额定床位数'), null=False, blank=False, default=0, help_text=_('病区额定床位数'))
    sort = models.CharField(_('排序顺序'), null=True, blank=True, max_length=10, help_text=_('排序顺序'))
    national_code = models.CharField(_('国临版科室代码'), null=True, blank=True, max_length=20, help_text=_('国临版科室代码'))
    national_name = models.CharField(_('国临版科室名称'), null=True, blank=True, max_length=50, help_text=_('国临版科室名称'))
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )

    objects = HISDepartmentManager()

    class Meta:
        verbose_name = _('HIS科室')
        verbose_name_plural = _('HIS科室')
        ordering = ['code']


class HISMixin(H4LBaseModel):
    employee_num = models.OneToOneField(
        'HISEmployee', verbose_name=_('绑定工号'), null=True, blank=True,
        help_text=_('与HIS绑定的工号信息!'),
        on_delete=models.SET_NULL
    )

    class Meta:
        abstract = True


class CompetenceMixin(H4LBaseModel):
    user_roles = models.ManyToManyField(
        'system.Role',
        verbose_name=_('前端角色'),
        blank=True,
        help_text=_(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_name="user_roles",
        related_query_name="user",
    )
    user_menus = models.ManyToManyField(
        'system.Menu',
        verbose_name=_('前端菜单'),
        blank=True,
        help_text=_('Specific menus for this user.'),
        related_name="user_menus",
        related_query_name="user",
    )
    user_competences = models.ManyToManyField(
        'system.Competence',
        verbose_name=_('前端权限'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="user_competences",
        related_query_name="user",
    )
    user_departments = models.ForeignKey(
        'system.Department',
        null=True,
        verbose_name=_('Departments'),
        blank=True,
        help_text=_(
            'The Departments this user belongs to. A user will get all permissions '
            'granted to each of their Departments.'
        ),
        related_name="user_departments",
        related_query_name="user",
        on_delete=models.CASCADE
    )

    class Meta:
        abstract = True

    def get_roles(self):
        return self.user_roles.all()

    def get_user_menus(self):
        return self.user_menus.all()

    def get_user_departments(self):
        return self.user_departments

    def get_user_competences(self):
        return self.user_competences.all()

    def get_all_menus(self):
        try:
            result = self.user_menus.all() | self.user_departments.menus.all()
        except AttributeError as e:
            result = self.user_menus.all()
        for i in self.user_roles.all():
            result = result | i.menus.all()
        return result.distinct()

    def get_all_competences(self):
        try:
            result = self.user_competences.all() | self.user_departments.competences.all()
        # result = result | self.user_menus.competences.all()
        except AttributeError as e:
            result = self.user_competences.all()
        for i in self.user_menus.all():
            result = result | i.competences.all()
        for i in self.user_roles.all():
            result = result | i.competences.all()
        return result.distinct()

    def have_roles(self, codename: str) -> bool:
        return self.user_roles.filter(codename=codename).aggregate(id=Count('id'))['id'] > 0

    def have_menus(self, codename: str) -> bool:
        return self.get_all_menus().filter(codename=codename).aggregate(id=Count('id'))['id'] > 0

    def have_competences(self, codename: str) -> bool:
        return self.get_all_competences().filter(codename=codename).aggregate(id=Count('id'))['id'] > 0


class UserProfile(AbstractUser, CompetenceMixin, HISMixin):
    """Default user for no1_datacenter."""
    #: First and last name do not cover name patterns around the globe
    path_and_rename = PathAndRename("avatar/" + timezone.now().strftime("%Y-%m-%d") + "/")
    id = UUIDField(
        primary_key=True,
        version=4,
        editable=False,
    )
    username_validator = UnicodeUsernameValidator()
    username = models.CharField(
        _('用户名'),
        max_length=150,
        unique=True,
        help_text=_('必填。不超过 150 个字符。字母、数字和 @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("具有该用户名的用户已存在。"),
        },
    )
    first_name = None  # type: ignore
    last_name = None  # type: ignore
    name = models.CharField(_("姓名"), max_length=60, null=False, blank=False, help_text='姓名')
    id_card_no = models.CharField(
        _('身份证号'), max_length=30, unique=True, blank=True, null=True, default=None,
        help_text=_('身份证号码')
    )
    avatar = models.ImageField(
        _('头像'), upload_to=path_and_rename, blank=True, null=True, unique=False,
        default='avatar/default.png', help_text=_('个人资料图片')
    )
    email = models.EmailField(
        _('电子邮件地址'), max_length=50, blank=True, null=True, default=None,
        help_text=_('用于登录验证的电子邮件地址')
    )
    phone = models.CharField(
        _('电话号码'), max_length=25, blank=True, null=True, default=None,
        help_text=_('用于登录验证的电话号码')
    )
    ding_userid = models.CharField(
        _('钉钉用户ID'), max_length=25, unique=True, blank=True, null=True, default=None, help_text='钉钉用户ID'
    )
    wx_userid = models.CharField(
        _('微信用户ID'), max_length=25, unique=True, blank=True, null=True, default=None, help_text='微信用户ID'
    )
    signature = models.CharField(
        _('个人签名'), max_length=255, null=True, blank=True,
        help_text=_('个人签名')
    )
    is_staff = models.BooleanField(
        _('工作人员状况'),
        default=False,
        help_text=_('指定用户是否可以登录到此管理站点。'),
    )
    is_active = models.BooleanField('激活状态', default=True, help_text='状态说明字段')
    update_datetime = models.DateTimeField("修改时间", auto_now=True, null=True, blank=True, help_text="修改时间")
    create_datetime = models.DateTimeField("创建时间", auto_now_add=True, null=True, blank=True, help_text="创建时间")

    REQUIRED_FIELDS = ['email', 'phone']

    class Meta:
        # swappable = 'AUTH_USER_MODEL'
        verbose_name = _("用户")
        verbose_name_plural = verbose_name

    def get_absolute_url(self):
        """Get url for user's detail view.
        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        return self.name

    def get_short_name(self):
        """Return the short name for the user."""
        return self.name

    def ding_for_phone(self):
        """通过电话号码获取用户钉钉id"""
        if self.phone is not None and self.ding_userid is None:
            try:
                self.ding_userid = DingApi().get_by_mobile(self.phone)['userid']
                self.save()
                print(self.name)
                return '获取成功！'
            except (IntegrityError, KeyError) as e:
                print(self.name + ':获取失败！' + str(e))
        else:
            return '用户没有设置电话号码！'
