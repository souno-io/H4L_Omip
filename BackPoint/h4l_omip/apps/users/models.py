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

from common.ding_api_v2 import DingApi
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
        MALE = 1, _('???')
        FEMALE = 2, _('???')
        OTHER = 3, _('??????')
        NOTSET = 9, _('?????????')

    code = models.CharField(
        _('????????????'),
        max_length=255,
        unique=True,
        null=False,
        blank=False,
        help_text=_('????????????,??????HIS??????gy_ygdm.ygdm')
    )
    num = models.CharField(
        _('????????????'),
        max_length=255,
        unique=True,
        null=False,
        blank=False,
        help_text=_('????????????,??????HIS??????gy_ygdm.ygbh')
    )
    name = models.CharField(_('??????'), null=False, blank=False, max_length=30, help_text=_('????????????'))
    gender = models.IntegerField(
        _('??????'), choices=Gender.choices, null=False, blank=False,
        help_text=_('?????????1?????????2??????,9????????????')
    )
    identity = models.CharField(
        _('????????????'),
        max_length=25,
        # unique=True,
        null=True,
        blank=True,
        help_text=_('????????????,??????HIS??????gy_ygdm.sfzh')
    )
    nhic = models.CharField(
        _('??????????????????'),
        max_length=25,
        # unique=True,
        null=True,
        blank=True,
        help_text=_('??????????????????,??????HIS??????gy_ygdm.gjybysbm')
    )
    department = models.IntegerField('????????????', null=True, blank=True, help_text=_('???????????????????????????gy_ygdm.ksdm'))
    is_specialist = models.BooleanField(_('????????????'), default=False, null=False, blank=False, help_text=_('????????????'))
    antibiotic_rights = models.BooleanField(_('????????????'), default=False, null=False, blank=False,
                                            help_text=_('????????????'))
    prescription_rights = models.BooleanField(_('????????????'), default=False, null=False, blank=False,
                                              help_text=_('????????????'))
    narcotics_rights = models.BooleanField(_('????????????'), default=False, null=False, blank=False,
                                           help_text=_('????????????'))
    psychotropic_rights = models.BooleanField(_('????????????'), default=False, null=False, blank=False,
                                              help_text=_('????????????'))
    phone = models.CharField(_('????????????'), max_length=25, unique=True, blank=True, null=True, help_text=_('????????????'))
    signature = models.BinaryField('????????????', blank=True, null=True, help_text=_('????????????'))
    transfer_history = models.TextField(_('????????????'), null=True, blank=True, help_text='????????????')
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
        verbose_name = _('HIS??????')
        verbose_name_plural = _('HIS??????')
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
        _('????????????'),
        unique=True,
        null=False,
        blank=False,
        help_text=_('????????????,??????HIS??????gy_ksdm.ksdm')
    )
    name = models.CharField(_('????????????'), null=False, blank=False, max_length=50, help_text=_('????????????'))
    alias = models.CharField(_('????????????'), null=True, blank=True, max_length=50, help_text=_('????????????'))
    parent_code = models.IntegerField(_('????????????'), null=False, blank=False, default=0, help_text=_('????????????'))
    is_outpatient = models.BooleanField(_('????????????'), null=False, default=False, blank=False,
                                        help_text=_('?????????????????????'))
    is_technology = models.BooleanField(_('????????????'), null=False, default=False, blank=False,
                                        help_text=_('?????????????????????'))
    is_inpatient = models.BooleanField(_('????????????'), null=False, default=False, blank=False,
                                       help_text=_('?????????????????????'))
    is_ward = models.BooleanField(_('????????????'), null=False, default=False, blank=False, help_text=_('?????????????????????'))
    is_consultation = models.BooleanField(_('????????????'), null=False, blank=False, default=False,
                                          help_text=_('?????????????????????'))
    rated_bed = models.IntegerField(_('???????????????'), null=False, blank=False, default=0, help_text=_('?????????????????????'))
    sort = models.CharField(_('????????????'), null=True, blank=True, max_length=10, help_text=_('????????????'))
    national_code = models.CharField(_('?????????????????????'), null=True, blank=True, max_length=20,
                                     help_text=_('?????????????????????'))
    national_name = models.CharField(_('?????????????????????'), null=True, blank=True, max_length=50,
                                     help_text=_('?????????????????????'))
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
        verbose_name = _('HIS??????')
        verbose_name_plural = _('HIS??????')
        ordering = ['code']


class HISMixin(H4LBaseModel):
    employee_num = models.OneToOneField(
        'HISEmployee', verbose_name=_('????????????'), null=True, blank=True,
        help_text=_('???HIS?????????????????????!'),
        on_delete=models.SET_NULL
    )

    class Meta:
        abstract = True


class CompetenceMixin(H4LBaseModel):
    user_roles = models.ManyToManyField(
        'system.Role',
        verbose_name=_('????????????'),
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
        verbose_name=_('????????????'),
        blank=True,
        help_text=_('Specific menus for this user.'),
        related_name="user_menus",
        related_query_name="user",
    )
    user_competences = models.ManyToManyField(
        'system.Competence',
        verbose_name=_('????????????'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="user_competences",
        related_query_name="user",
    )
    user_departments = models.ManyToManyField(
        'system.Department',
        verbose_name=_('??????'),
        help_text=_(
            'The Departments this user belongs to. A user will get all permissions '
            'granted to each of their Departments.'
        ),
        related_name="user_departments",
        related_query_name="user",
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
        _('?????????'),
        max_length=150,
        unique=True,
        help_text=_('?????????????????? 150 ?????????????????????????????? @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("???????????????????????????????????????"),
        },
    )
    first_name = None  # type: ignore
    last_name = None  # type: ignore
    name = models.CharField(_("??????"), max_length=60, null=False, blank=False, help_text='??????')
    id_card_no = models.CharField(
        _('????????????'), max_length=30, unique=True, blank=True, null=True, default=None,
        help_text=_('???????????????')
    )
    avatar = models.CharField(
        _('??????'), blank=True, null=True, unique=False, max_length=1024,
        default='avatar/default.png', help_text=_('??????????????????')
    )
    email = models.EmailField(
        _('??????????????????'), max_length=50, blank=True, null=True, default=None,
        help_text=_('???????????????????????????????????????')
    )
    phone = models.CharField(
        _('????????????'), max_length=25, blank=True, null=True, default=None,
        help_text=_('?????????????????????????????????')
    )
    ding_userid = models.CharField(
        _('????????????ID'), max_length=25, unique=True, blank=True, null=True, default=None, help_text='????????????ID'
    )
    wx_userid = models.CharField(
        _('????????????ID'), max_length=25, unique=True, blank=True, null=True, default=None, help_text='????????????ID'
    )
    signature = models.CharField(
        _('????????????'), max_length=255, null=True, blank=True,
        help_text=_('????????????')
    )
    is_staff = models.BooleanField(
        _('??????????????????'),
        default=False,
        help_text=_('???????????????????????????????????????????????????'),
    )
    is_active = models.BooleanField('????????????', default=True, help_text='??????????????????')
    update_datetime = models.DateTimeField("????????????", auto_now=True, null=True, blank=True, help_text="????????????")
    create_datetime = models.DateTimeField("????????????", auto_now_add=True, null=True, blank=True, help_text="????????????")

    REQUIRED_FIELDS = ['email', 'phone']

    class Meta:
        # swappable = 'AUTH_USER_MODEL'
        verbose_name = _("??????")
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
        """????????????????????????????????????id"""
        if self.phone is not None and self.ding_userid is None:
            try:
                self.ding_userid = DingApi().get_by_mobile(self.phone)['userid']
                self.save()
                print(self.name)
                return '???????????????'
            except (IntegrityError, KeyError) as e:
                print(self.name + ':???????????????' + str(e))
        else:
            return '?????????????????????????????????'
