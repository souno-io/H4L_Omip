import uuid
from datetime import datetime

import cx_Oracle
import requests
from model_utils.models import TimeStampedModel
from mptt.fields import TreeForeignKey
from mptt.managers import TreeManager
from mptt.models import MPTTModel
from rich.console import Console

import environ
from django.contrib.auth import get_user_model
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from common.models import H4LBaseModel
from common.utils import PathAndRename
from django.conf import settings
from django.db import connections


# User = get_user_model()

class Competence(H4LBaseModel):
    """
    权限表
    """
    code = models.CharField(_('codename'), max_length=100, unique=True, null=False, blank=False)
    name = models.CharField(_('name'), max_length=255, unique=True, null=False, blank=False)
    menu = models.ForeignKey(
        'Menu',
        verbose_name=_('绑定菜单'),
        null=True,
        blank=True,
        help_text=_(
            'The menu this Competence belongs to. A user will get all permissions '
            'granted to each of their menu.'
        ),
        related_name="competence_menu",
        related_query_name="competence_menu",
        on_delete=models.CASCADE
    )
    remark = models.CharField(_('备注'), max_length=255, null=True, blank=True, help_text=_('备注'))

    # objects = PermissionManager()

    class Meta:
        verbose_name = _('权限')
        verbose_name_plural = _('权限')
        unique_together = [['name', 'code']]
        ordering = ['name', 'code']

    def __str__(self):
        if self.menu is not None:
            return '%s:%s' % (self.code, self.menu.name)
        else:
            return '%s:%s' % (self.code, None)


class ConnectionPoolManager(models.Manager):
    def apply_connection_pool(self):
        for i in self.all():
            i.apply()

    def execute_sql(self, db, sql):
        return connections[db].cursor().execute(sql)

    def execute_sql_as_dict(self, db, sql):
        try:
            cursor = connections[db].cursor().execute(sql)
            col_names = [i[0] for i in cursor.description]
            return [dict(zip(col_names, row)) for row in cursor]
        except Exception as e:
            return [str(e)]


class SystemConfig(H4LBaseModel):
    class TypeChoice(models.TextChoices):
        TEXT = 'TEXT', _('文本')
        TEXTAREA = 'TEXTAREA', _('大文本')
        NUMBER = 'NUMBER', _('数字')
        SELECT = 'SELECT', _('选项')
        RADIO = 'RADIO', _('单选')
        CHECKBOX = 'CHECKBOX', _('复选')
        DATE = 'DATE', _('日期')
        DATETIME = 'DATETIME', _('日期时间')
        IMAGES = 'IMAGES', _('图片')
        FILES = 'FILES', _('文件')
        TIME = 'TIME', _('时间')
        ARRAY = 'ARRAY', _('数组')
        SQL = 'SQL', _('SQL代码')
        URL = 'URL', _('URL连接')
        OTHER = 'OTHER', _('其他')

    title = models.CharField("标题", max_length=50, null=False, blank=False, help_text="标题")
    key = models.CharField(
        max_length=100, unique=True, null=False, blank=False, verbose_name=_('Config code'),
        help_text='配置键'
    )
    value = models.TextField(_('配置值'), null=False, blank=False, help_text='配置值')
    type = models.CharField(
        choices=TypeChoice.choices, max_length=20, verbose_name="配置项类型", default=TypeChoice.TEXT, blank=True,
        help_text="配置项类型"
    )
    sort = models.IntegerField(_("排序"), default=0, null=True, blank=True, help_text="表单类型", )
    rule = models.JSONField(_("校验规则"), null=True, blank=True, help_text="校验规则")
    data_options = models.JSONField(_("数据options"), null=True, blank=True, help_text="数据options")
    setting = models.JSONField(_("配置"), null=True, blank=True, help_text="配置")
    placeholder = models.CharField(_("提示信息"), max_length=200, null=True, blank=True, help_text="提示信息")
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )

    class Meta:
        # swappable = 'AUTH_USER_MODEL'
        verbose_name = _("system settings")
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.key + ':' + self.title


class ConnectionPool(H4LBaseModel):
    class TypeChoice(models.TextChoices):
        ORACLE = 'ORACLE', _('ORACLE')
        MYSQL = 'MYSQL', _('MYSQL')
        SQLSERVER = 'SQLSERVER', _('SQLSERVER')
        SQLITE = 'SQLITE', _('SQLITE')
        POSTGRESQL = 'POSTGRESQL', _('POSTGRESQL')
        RESTAPI = 'RESTAPI', _('REST访问接口')

    id = models.UUIDField('id', primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100, unique=True, null=False, blank=False, verbose_name='数据库名称',
                            help_text='数据库配置名称')
    type = models.CharField(
        max_length=100, choices=TypeChoice.choices, default=TypeChoice.POSTGRESQL,
        null=False, blank=False, verbose_name='数据库类型', help_text='数据库类型'
    )
    host = models.CharField('服务器地址', max_length=1024, null=False, blank=False, help_text='服务器地址')
    port = models.CharField('服务器端口', max_length=10, null=False, blank=False, help_text='服务器端口')
    user = models.CharField('数据库用户名', max_length=1024, null=False, blank=False, help_text='数据库用户名')
    pwd = models.CharField('数据库密码', max_length=1024, null=False, blank=False, help_text='数据库密码')
    db = models.CharField('数据库名', max_length=1024, null=False, blank=False, help_text='数据库名')
    create_by = models.ForeignKey(
        'users.UserProfile', on_delete=models.SET_NULL, verbose_name='创建者', null=True, blank=True, help_text="创建者"
    )
    remark = models.TextField('备注', max_length=1024, null=True, blank=True, help_text='备注', )
    is_active = models.BooleanField(
        _('激活'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting connection pool.'
        ),
    ),
    objects = ConnectionPoolManager()

    class Meta:
        # swappable = 'AUTH_USER_MODEL'
        verbose_name = "数据库连接池"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

    @property
    def configuration(self):
        engine = ''
        if self.type == 'ORACLE':
            engine = "oracle"
        elif self.type == "POSTGRESQL":
            engine = "postgres"
        elif self.type == "MYSQL":
            engine = "mysql"
        elif self.type == "SQLITE":
            engine = "sqlite"
        elif self.type == "SQLSERVER":
            engine = "sqlserver"
        return f"{engine}://{self.user}:{self.pwd}@{self.host}:{self.port}/{self.db}"

    def apply(self):
        settings.DATABASES[self.name] = environ.Env().db('', self.configuration)
        if self.type == "POSTGRESQL":
            settings.DATABASES[self.name]["ATOMIC_REQUESTS"] = True
            settings.DATABASES[self.name]["AUTOCOMMIT"] = True
        if not self.test():
            settings.DATABASES.pop(self.name)

    def test(self):
        """
        :parameter:无
        :return: 数据库系统时间
        :describe:爬坑说明：这里每个数据库类型对应的使用有细微区别不能够直接套用！
        """
        try:
            if self.type == 'ORACLE':
                cur = connections[self.name].cursor()
                cur.execute("select sysdate from dual;")
                return cur.fetchall()
                # return connections[self.name].cursor().execute("select sysdate from dual").fetchall()
            elif self.type in ["POSTGRESQL", "MYSQL"]:
                cur = connections[self.name].cursor()
                cur.execute("select now()")
                return cur.fetchall()
            elif self.type == "SQLSERVER":
                return connections[self.name].cursor().execute("select getdate()").fetchall()
            elif self.type == "SQLITE":
                return connections[self.name].cursor().execute(
                    "select datetime(CURRENT_TIMESTAMP,'localtime')").fetchall()
        except Exception as e:
            Console().log(
                [
                    {
                        '数据库名字': self.name, '数据库类型': self.type, '数据库配置': self.configuration,
                        '数据库状态': '连接数据库失败！'
                    },
                    {
                        '错误信息': str(e)
                    }
                ],
                log_locals=True,
            )
            return False

    def execute(self, sql):
        if self.type == 'ORACLE':
            try:
                cursor = connections[self.name].cursor().execute(sql)
                col_names = [i[0] for i in cursor.description]
                return [dict(zip(col_names, (str(i) if isinstance(i, cx_Oracle.LOB) else i for i in row))) for row in cursor]
            except Exception as e:
                return [{'errCode': '500', 'errMsg': str(e)}]
        elif self.type in ["POSTGRESQL", "MYSQL"]:
            try:
                cur = connections[self.name].cursor()
                cur.execute(sql)
                col_names = [i[0] for i in cur.description]
                return [dict(zip(col_names, (str(i) if isinstance(i, cx_Oracle.LOB) else i for i in row))) for row in cur]
            except Exception as e:
                return [{'errCode': '500', 'errMsg': str(e)}]
        else:
            try:
                return [{'data': requests.get(self.configuration).text}]
            except Exception as e:
                return [{'errCode': '500', 'errMsg': str(e)}]


class SystemLogs(H4LBaseModel):
    id = models.UUIDField('id', primary_key=True, default=uuid.uuid4, editable=False)
    sip = models.GenericIPAddressField(_('服务器IP地址'), blank=True, null=True, help_text=_('服务器IP地址'))
    dip = models.GenericIPAddressField(_('客户端IP地址'), blank=True, null=True, help_text=_('客户端IP地址'))
    body = models.TextField(
        _('Request body'), max_length=1024, blank=True, null=True, help_text=_('Request body')
    )
    path = models.CharField(
        _('Request path'), max_length=1024, blank=True, null=True, help_text=_('Request path')
    )
    method = models.CharField(
        _('Request method'), max_length=20, blank=True, null=True, help_text=_('Request method')
    )
    username = models.CharField(
        _('Request username'), max_length=200, blank=True, null=True, help_text=_('Request username')
    )
    status_code = models.CharField(
        _('Request status code'), max_length=200, blank=True, null=True, help_text=_('Request status code')
    )
    reason_phrase = models.CharField(
        _('Reason phrase'), max_length=200, blank=True, null=True, help_text=_('Reason phrase')
    )
    time = models.DateTimeField('时间', null=True, blank=True, default=timezone.now)

    class Meta:
        verbose_name = _("系统日志")
        verbose_name_plural = verbose_name
        ordering = ['-time']


class Dictionary(H4LBaseModel):
    code = models.CharField(max_length=100, blank=True, null=True, verbose_name="编码", help_text="编码")
    label = models.CharField(max_length=100, blank=True, null=True, verbose_name="显示名称", help_text="显示名称")
    value = models.CharField(max_length=100, blank=True, null=True, verbose_name="实际值", help_text="实际值")
    parent = models.ForeignKey(
        to='self', related_name='sublist', db_constraint=False, on_delete=models.PROTECT,
        blank=True, null=True,
        verbose_name="父级", help_text="父级"
    )
    status = models.BooleanField(default=True, blank=True, verbose_name="状态", help_text="状态")
    sort = models.IntegerField(default=1, verbose_name="显示排序", null=True, blank=True, help_text="显示排序")
    remark = models.CharField(max_length=2000, blank=True, null=True, verbose_name="备注", help_text="备注")

    class Meta:
        verbose_name = "系统字典"
        verbose_name_plural = verbose_name
        ordering = ('sort',)


class UploadFile(H4LBaseModel):
    path_and_rename = PathAndRename("avatar/" + timezone.now().strftime("%Y-%m-%d") + "/")
    file = models.FileField("上传的文件", upload_to=path_and_rename, default='avatar/default.png',
                            help_text='存放文件字段')

    class Meta:
        verbose_name = "上传文件"
        verbose_name_plural = verbose_name


class MenuManager(TreeManager):
    def viewable(self):
        queryset = self.get_queryset().filter(level=0)
        return queryset


class DepartmentManager(TreeManager):
    def viewable(self):
        queryset = self.get_queryset().filter(level=0)
        return queryset


class Menu(MPTTModel, H4LBaseModel, TimeStampedModel):
    """
    菜单表
    """
    TYPE = (
        ('menu', '菜单'),
        ('link', '链接'),
        ('iframe', '内嵌框架'),
    )
    name = models.CharField(
        _('Module English name'), max_length=100, unique=True, null=False, blank=False,
        help_text=_("Menu code, capitalized")
    )
    title = models.CharField(_('Title'), max_length=255, null=False, blank=False, default='标题',
                             help_text=_("菜单中文标题"))
    icon = models.CharField(_('Icon'), max_length=100, help_text=_('图标'), default=None, null=True, blank=True)
    parent = TreeForeignKey(
        'self', verbose_name=_('上级菜单'), null=True, blank=True,
        max_length=100, related_name='children', on_delete=models.CASCADE
    )
    path = models.CharField(_('路径'), max_length=100, help_text=_('路径'), default=None, null=True, blank=True)
    type = models.CharField(_('类型'), choices=TYPE, max_length=100, help_text=_('类型'), default='menu', null=True,
                            blank=True)
    component = models.CharField(_('组件路径'), max_length=100, help_text=_('组件路径'), default=None, null=True,
                                 blank=True)
    affix = models.BooleanField(_('词缀'), default=False, null=True, blank=True, help_text=_('词缀'), )
    active = models.CharField(_('激活组件'), max_length=100, help_text=_('激活组件'), default=None, null=True,
                              blank=True)
    fullpage = models.BooleanField(_('整页'), default=False, null=True, blank=True, help_text=_('整页'), )
    redirect = models.CharField(_('重定向'), max_length=100, help_text=_('重定向路径'), default=None, null=True,
                                blank=True)
    hidden = models.BooleanField(_('隐藏路由'), help_text=_('是否显示在菜单中显示隐藏路由'), default=False)
    hiddenBreadcrumb = models.BooleanField(_('隐藏面包屑导航'), help_text=_('隐藏面包屑导航'), default=False)
    levelHidden = models.BooleanField(_('显示隐藏一级路由'), help_text=_('是否显示在菜单中显示隐藏一级路由'),
                                      default=False)
    noKeepAlive = models.BooleanField(_('当前路由是否不缓存'), help_text=_('当前路由是否不缓存'), default=False)
    noClosable = models.BooleanField(_('是否可关闭多标签页'), help_text=_('是否可关闭多标签页'), default=True)
    badge = models.CharField(
        _('badge小标签'), help_text=_('badge小标签（只支持子级）'), max_length=20, default=None, null=True, blank=True
    )
    tabHidden = models.BooleanField(_('是否不显示多标签页'), help_text=_('是否不显示多标签页'), default=False)
    activeMenu = models.CharField(
        _('高亮指定菜单'), help_text=_('高亮指定菜单'), max_length=20, default=None, null=True,
        blank=True
    )
    dot = models.BooleanField(_('小圆点'), help_text=_('小圆点'), default=False)
    dynamicNewTab = models.BooleanField(_('动态传参路由是否新开标签页'), help_text=_('动态传参路由是否新开标签页'),
                                        default=False)
    seq = models.CharField(_('排序'), max_length=100, help_text=_('排序'), default=None, null=True, blank=True)
    remark = models.CharField(_('描述'), max_length=255, null=True, blank=True, help_text=_('描述'))

    objects = MenuManager()

    class Meta:
        verbose_name = _('菜单')
        verbose_name_plural = _('菜单')
        unique_together = [['title', 'name']]
        ordering = ['title', 'name']

    def __str__(self):
        return '%s | %s' % (self.title, self.name)

    def delete(self, using=None, soft=True, *args, **kwargs):
        """
        Soft delete object (set its ``is_removed`` field to True).
        Actually delete object if setting ``soft`` to False.
        """
        if soft:
            self.is_active = True
            self.save(using=using)
        else:
            return super().delete(using=using, *args, **kwargs)


class Role(H4LBaseModel):
    code = models.CharField(_('code'), max_length=100, null=False, blank=False, help_text=_('角色代码'))
    label = models.CharField(_('角色名'), max_length=255, null=False, blank=False, help_text=_('角色名称'))
    menus = models.ManyToManyField(
        'Menu',
        verbose_name=_('菜单'),
        blank=True,
        related_name="role_menus",
        related_query_name="role",
    )
    competences = models.ManyToManyField(
        'Competence',
        verbose_name=_('权限'),
        blank=True,
        related_name="role_competences",
        related_query_name="role",
    )
    remark = models.CharField(_('备注'), max_length=255, null=True, blank=True, help_text=_('描述'))

    def __str__(self):
        return self.label

    class Meta:
        verbose_name = "角色"
        verbose_name_plural = verbose_name
        ordering = ['label', 'code']


class Department(MPTTModel, H4LBaseModel, TimeStampedModel):
    label = models.CharField(_('部门名称'), max_length=100, null=False, blank=False, help_text=_('部门名称'))
    code = models.CharField(_("部门代码"), max_length=50, null=False, blank=False, help_text=_('部门代码'))
    parent = TreeForeignKey("self", verbose_name=_('上级部门'), null=True, blank=True, related_name='children',
                            on_delete=models.CASCADE)
    menus = models.ManyToManyField(
        'Menu',
        verbose_name=_('菜单'),
        blank=True,
    )
    competences = models.ManyToManyField(
        'Competence',
        verbose_name=_('权限'),
        blank=True,
    )
    remark = models.CharField(_('备注'), max_length=255, null=True, blank=True, help_text=_('描述'))

    objects = DepartmentManager()

    def __str__(self):
        return self.label

    class Meta:
        verbose_name = "科室"
        verbose_name_plural = verbose_name
        ordering = ['label', 'code']
