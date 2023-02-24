"""
Base settings to build other settings files upon.
"""
import os
import sys
import datetime
from pathlib import Path

import environ
from django.utils.translation import gettext_noop

ROOT_DIR = Path(__file__).resolve(strict=True).parent.parent.parent
sys.path.insert(0, os.path.join(ROOT_DIR, "apps"))
sys.path.insert(0, os.path.join(ROOT_DIR, "third_apps"))
# h4l_omip/
# APPS_DIR = ROOT_DIR / "h4l_omip"
env = environ.Env()

READ_DOT_ENV_FILE = env.bool("DJANGO_READ_DOT_ENV_FILE", default=True)
if READ_DOT_ENV_FILE:
    # OS environment variables take precedence over variables from .env
    env.read_env(str(ROOT_DIR / ".env"))

# GENERAL
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#debug
DEBUG = env.bool("DJANGO_DEBUG", False)
# Local time zone. Choices are
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# though not all of them may be available with every OS.
# In Windows, this must be set to your system time zone.
TIME_ZONE = "Asia/Shanghai"
# https://docs.djangoproject.com/en/dev/ref/settings/#language-code
LANGUAGE_CODE = "zh-hans"
# https://docs.djangoproject.com/en/dev/ref/settings/#site-id
SITE_ID = 1
# https://docs.djangoproject.com/en/dev/ref/settings/#use-i18n
USE_I18N = True
# https://docs.djangoproject.com/en/dev/ref/settings/#use-tz
USE_TZ = True
# https://docs.djangoproject.com/en/dev/ref/settings/#locale-paths
LOCALE_PATHS = [str(ROOT_DIR / "locale")]

# DATABASES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#databases
DATABASES = {"default": env.db("DATABASE_URL")}
DATABASES["default"]["ATOMIC_REQUESTS"] = True
# https://docs.djangoproject.com/en/stable/ref/settings/#std:setting-DEFAULT_AUTO_FIELD
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# URLS
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#root-urlconf
ROOT_URLCONF = "config.urls"
# https://docs.djangoproject.com/en/dev/ref/settings/#wsgi-application
WSGI_APPLICATION = "config.wsgi.application"

# APPS
# ------------------------------------------------------------------------------
DJANGO_APPS = [
    "jazzmin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.sites",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # "django.contrib.humanize", # Handy template tags
    "django.contrib.admin",
    "django.forms",
]
THIRD_PARTY_APPS = [
    "crispy_forms",
    "crispy_bootstrap5",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "django_celery_beat",
    "rest_framework",
    "rest_framework_sso",
    "rest_framework.authtoken",
    "rest_framework_filters",
    "corsheaders",
    "drf_spectacular",
    "notifications",
    "notifications_rest",
    "mptt",
    "explorer",
]

LOCAL_APPS = [
    "users",
    "system",
    "itam",
    "drgs",
    # Your stuff: custom apps go here
]
# https://docs.djangoproject.com/en/dev/ref/settings/#installed-apps
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

# MIGRATIONS
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#migration-modules
MIGRATION_MODULES = {"sites": "contrib.sites.migrations"}

# AUTHENTICATION
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#authentication-backends
AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
    "allauth.account.auth_backends.AuthenticationBackend",
    # 'oauth2_provider.backends.OAuth2Backend',
    'common.auth_backends.MultiAuthBackend',
]
# https://docs.djangoproject.com/en/dev/ref/settings/#auth-user-model
AUTH_USER_MODEL = "users.UserProfile"
# https://docs.djangoproject.com/en/dev/ref/settings/#login-redirect-url
LOGIN_REDIRECT_URL = "users:redirect"
# https://docs.djangoproject.com/en/dev/ref/settings/#login-url
LOGIN_URL = "account_login"

ALL_MODELS_OBJECTS = []
# PASSWORDS
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#password-hashers
PASSWORD_HASHERS = [
    # https://docs.djangoproject.com/en/dev/topics/auth/passwords/#using-argon2-with-django
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
]
# https://docs.djangoproject.com/en/dev/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# MIDDLEWARE
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#middleware
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.common.BrokenLinkEmailsMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "common.logs.RequestLogMiddleware",
]

# STATIC
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#static-root
STATIC_ROOT = str(ROOT_DIR / "staticfiles")
# https://docs.djangoproject.com/en/dev/ref/settings/#static-url
STATIC_URL = "/static/"
# https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/#std:setting-STATICFILES_DIRS
STATICFILES_DIRS = [str(ROOT_DIR / "static")]
# https://docs.djangoproject.com/en/dev/ref/contrib/staticfiles/#staticfiles-finders
STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]

# MEDIA
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#media-root
MEDIA_ROOT = str(ROOT_DIR / "media")
# https://docs.djangoproject.com/en/dev/ref/settings/#media-url
MEDIA_URL = "/media/"

# TEMPLATES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#templates
TEMPLATES = [
    {
        # https://docs.djangoproject.com/en/dev/ref/settings/#std:setting-TEMPLATES-BACKEND
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        # https://docs.djangoproject.com/en/dev/ref/settings/#dirs
        "DIRS": [str(ROOT_DIR / "templates")],
        # https://docs.djangoproject.com/en/dev/ref/settings/#app-dirs
        "APP_DIRS": True,
        "OPTIONS": {
            # https://docs.djangoproject.com/en/dev/ref/settings/#template-context-processors
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.template.context_processors.i18n",
                "django.template.context_processors.media",
                "django.template.context_processors.static",
                "django.template.context_processors.tz",
                "django.contrib.messages.context_processors.messages",
                "users.context_processors.allauth_settings",
            ],
            'libraries': {
                'tags': 'templatetags.tags',
            }
        },
    }
]

# https://docs.djangoproject.com/en/dev/ref/settings/#form-renderer
FORM_RENDERER = "django.forms.renderers.TemplatesSetting"

# http://django-crispy-forms.readthedocs.io/en/latest/install.html#template-packs
CRISPY_TEMPLATE_PACK = "bootstrap5"
CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"

# FIXTURES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#fixture-dirs
FIXTURE_DIRS = (str(ROOT_DIR / "fixtures"),)

# SECURITY
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#session-cookie-httponly
SESSION_COOKIE_HTTPONLY = True
# https://docs.djangoproject.com/en/dev/ref/settings/#csrf-cookie-httponly
CSRF_COOKIE_HTTPONLY = True
# https://docs.djangoproject.com/en/dev/ref/settings/#secure-browser-xss-filter
SECURE_BROWSER_XSS_FILTER = True
# https://docs.djangoproject.com/en/dev/ref/settings/#x-frame-options
X_FRAME_OPTIONS = "DENY"

# EMAIL
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#email-backend
EMAIL_BACKEND = env(
    "DJANGO_EMAIL_BACKEND",
    default="django.core.mail.backends.smtp.EmailBackend",
)
# https://docs.djangoproject.com/en/dev/ref/settings/#email-timeout
EMAIL_TIMEOUT = 5

# ADMIN
# ------------------------------------------------------------------------------
# Django Admin URL.
ADMIN_URL = "manage/"
# https://docs.djangoproject.com/en/dev/ref/settings/#admins
ADMINS = [("""h4l""", "souno@qq.com")]
# https://docs.djangoproject.com/en/dev/ref/settings/#managers
MANAGERS = ADMINS

# LOGGING
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#logging
# See https://docs.djangoproject.com/en/dev/topics/logging for
# more details on how to customize your logging configuration.
LOGGING = {
    # 版本
    'version': 1,
    # 是否禁止默认配置的记录器
    'disable_existing_loggers': False,
    'formatters': {
        # 'standard': {
        #     'format': '{"time": "%(asctime)s", "level": "%(levelname)s", "method": "%(method)s",
        #     "username": "%(username)s", "sip": "%(sip)s", "dip": "%(dip)s", "path": "%(path)s",
        #     "status_code": "%(status_code)s", "reason_phrase": "%(reason_phrase)s",
        #     "func": "%(module)s.%(funcName)s:%(lineno)d",  "message": "%(message)s"}',
        #     'datefmt': '%Y-%m-%d %H:%M:%S'
        # }
        'rich': {
            'format': "%(message)s",
            'datefmt': "[%X]",
        }
    },
    # 过滤器
    'filters': {
        'request_info': {'()': 'common.logs.RequestLogFilter'},
    },
    'handlers': {
        # 标准输出
        # 'console': {
        #     'level': 'INFO',
        #     'class': 'common.logs.H4LRichHandler',
        #     'formatter': 'rich'
        # },
        'db_logs': {
            'level': 'DEBUG',
            'class': 'common.logs.DBHandler',
        },
    },
    'loggers': {
        # 'django': {
        #     'handlers': ['console'],
        #     'level': 'DEBUG',
        #     'propagate': False
        # },
        'systemLogs': {
            'handlers': ['db_logs'],
            'level': 'DEBUG',
            # 此记录器处理过的消息就不再让 django 记录器再次处理了
            'propagate': False
        },
    }
}

EXPLORER_CONNECTIONS = {'Default': 'default'}
EXPLORER_DEFAULT_CONNECTION = 'default'

# Celery
# ------------------------------------------------------------------------------
if USE_TZ:
    # https://docs.celeryq.dev/en/stable/userguide/configuration.html#std:setting-timezone
    CELERY_TIMEZONE = TIME_ZONE
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#std:setting-broker_url
CELERY_BROKER_URL = env("CELERY_BROKER_URL")
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#std:setting-result_backend
CELERY_RESULT_BACKEND = CELERY_BROKER_URL
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#result-extended
CELERY_RESULT_EXTENDED = True
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#result-backend-always-retry
# https://github.com/celery/celery/pull/6122
CELERY_RESULT_BACKEND_ALWAYS_RETRY = True
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#result-backend-max-retries
CELERY_RESULT_BACKEND_MAX_RETRIES = 10
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#std:setting-accept_content
CELERY_ACCEPT_CONTENT = ["json"]
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#std:setting-task_serializer
CELERY_TASK_SERIALIZER = "json"
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#std:setting-result_serializer
CELERY_RESULT_SERIALIZER = "json"
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#task-time-limit
# TODO: set to whatever value is adequate in your circumstances
CELERY_TASK_TIME_LIMIT = 5 * 60
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#task-soft-time-limit
# TODO: set to whatever value is adequate in your circumstances
CELERY_TASK_SOFT_TIME_LIMIT = 60
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#beat-scheduler
CELERY_BEAT_SCHEDULER = "django_celery_beat.schedulers:DatabaseScheduler"
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#worker-send-task-events
CELERY_WORKER_SEND_TASK_EVENTS = True
# https://docs.celeryq.dev/en/stable/userguide/configuration.html#std-setting-task_send_sent_event
CELERY_TASK_SEND_SENT_EVENT = True
# django-allauth
# ------------------------------------------------------------------------------
ACCOUNT_ALLOW_REGISTRATION = env.bool("DJANGO_ACCOUNT_ALLOW_REGISTRATION", False)
# https://django-allauth.readthedocs.io/en/latest/configuration.html
ACCOUNT_AUTHENTICATION_METHOD = "username"
# https://django-allauth.readthedocs.io/en/latest/configuration.html
ACCOUNT_EMAIL_REQUIRED = True
# https://django-allauth.readthedocs.io/en/latest/configuration.html
ACCOUNT_EMAIL_VERIFICATION = "mandatory"
# https://django-allauth.readthedocs.io/en/latest/configuration.html
ACCOUNT_ADAPTER = "users.adapters.AccountAdapter"
# https://django-allauth.readthedocs.io/en/latest/forms.html
ACCOUNT_FORMS = {"signup": "users.forms.UserSignupForm"}
# https://django-allauth.readthedocs.io/en/latest/configuration.html
SOCIALACCOUNT_ADAPTER = "users.adapters.SocialAccountAdapter"
# https://django-allauth.readthedocs.io/en/latest/forms.html
SOCIALACCOUNT_FORMS = {"signup": "users.forms.UserSocialSignupForm"}
# django-compressor
# ------------------------------------------------------------------------------
# https://django-compressor.readthedocs.io/en/latest/quickstart/#installation
INSTALLED_APPS += ["compressor"]
STATICFILES_FINDERS += ["compressor.finders.CompressorFinder"]
# django-rest-framework
# -------------------------------------------------------------------------------
# django-rest-framework - https://www.django-rest-framework.org/api-guide/settings/
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_sso.authentication.JWTAuthentication",
        "rest_framework.authentication.TokenAuthentication",
        # "rest_framework.authentication.SessionAuthentication",
        # 'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
        # 'oauth2_provider_jwt.authentication.JWTAuthentication',
    ),
    'EXCEPTION_HANDLER': 'common.exception.custom_exception_handler',
    # 修改默认返回JSON的renderer的类
    'DEFAULT_RENDERER_CLASSES': (
        # 'rest_framework.renderers.JSONRenderer',
        'common.rendererresponse_scui.CustomRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    # "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_PAGINATION_CLASS": 'common.pagination.H4LPageNumberPagination',
    # 全局配置异常模块
}

# django-cors-headers - https://github.com/adamchainz/django-cors-headers#setup
# CORS_URLS_REGEX = r"^/api/.*$"
CORS_ALLOW_ALL_ORIGINS = True

# By Default swagger ui is available only to admin user(s). You can change permission classes to change that
# See more configuration options at https://drf-spectacular.readthedocs.io/en/latest/settings.html#settings
SPECTACULAR_SETTINGS = {
    "TITLE": "H4L信息资产管理平台 API",
    "DESCRIPTION": "H4L信息资产管理平台后端接口文档",
    "VERSION": "1.0.0",
    "SERVE_PERMISSIONS": ["rest_framework.permissions.IsAdminUser"],
    "SERVERS": [
        {"url": "http://127.0.0.1:8000", "description": "本地开发服务"},
        {"url": "https://h4l.cn", "description": "生产环境服务"},
    ],
}

# swagger 配置项
SWAGGER_SETTINGS = {
    # 基础样式
    'SECURITY_DEFINITIONS': {
        "basic": {
            'type': 'basic'
        }
    },
    # 如果需要登录才能够查看接口文档, 登录的链接使用restframework自带的.
    'LOGIN_URL': 'account_login',
    'LOGOUT_URL': 'account_logout',
    # 'DOC_EXPANSION': None,
    # 'SHOW_REQUEST_HEADERS':True,
    # 'USE_SESSION_AUTH': True,
    # 'DOC_EXPANSION': 'list',
    # 接口文档中方法列表以首字母升序排列
    'APIS_SORTER': 'alpha',
    # 如果支持json提交, 则接口文档中包含json输入框
    'JSON_EDITOR': True,
    # 方法列表字母排序
    'OPERATIONS_SORTER': 'alpha',
    'VALIDATOR_URL': None,
}

# djangorestframework-sso配置项
REST_FRAMEWORK_SSO = {
    'CREATE_SESSION_PAYLOAD': 'rest_framework_sso.utils.create_session_payload',
    'CREATE_AUTHORIZATION_PAYLOAD': 'rest_framework_sso.utils.create_authorization_payload',
    'ENCODE_JWT_TOKEN': 'rest_framework_sso.utils.encode_jwt_token',
    'DECODE_JWT_TOKEN': 'rest_framework_sso.utils.decode_jwt_token',
    'AUTHENTICATE_PAYLOAD': 'rest_framework_sso.utils.authenticate_payload',
    'ENCODE_ALGORITHM': 'RS256',
    'DECODE_ALGORITHMS': None,
    'VERIFY_SIGNATURE': True,
    'VERIFY_EXPIRATION': True,
    'VERIFY_SESSION_TOKEN': True,
    'EXPIRATION_LEEWAY': 0,
    'SESSION_EXPIRATION': None,
    'AUTHORIZATION_EXPIRATION': datetime.timedelta(seconds=300),
    'IDENTITY': 'no1_datacenter',
    'SESSION_AUDIENCE': ['no1_datacenter'],
    'AUTHORIZATION_AUDIENCE': None,
    'ACCEPTED_ISSUERS': None,
    'KEY_STORE_ROOT': None,
    'AUTHENTICATE_HEADER': 'Bearer',
    'PUBLIC_KEYS': {
        'no1_datacenter': 'certs/no1-20210926.pem',
    },
    'PRIVATE_KEYS': {
        'no1_datacenter': 'certs/no1-20210926.pem',
    },
}

JAZZMIN_SETTINGS = {
    # 窗口标题（默认为 current_admin_site.site_title 如果不存在或无）
    "site_title": "H4L管理后台",
    # 登录屏幕上的标题（最多 19 个字符）（默认为 current_admin_site.site_header 如果不存在或无）
    "site_header": "H4L-Platform",
    # 品牌标题（最多 19 个字符）（默认为 current_admin_site.site_header 如果不存在或无）
    "site_brand": "H4L管理后台",
    # Logo to use for your site, must be present in static files, used for brand on top left
    "site_logo": "/images/logo.png",
    # CSS classes that are applied to the logo above
    "site_logo_classes": "img-circle",
    # 您网站的网站图标的相对路径，如果不存在，将默认为 site_logo（理想情况下为 32x32 像素）
    "site_icon": None,
    # Welcome text on the login screen
    "welcome_sign": "欢迎登录！",
    # 页脚版权所有
    "copyright": "souno souno.cn",
    # T从搜索栏搜索的模型管理员，如果排除搜索栏则省略
    "search_model": "auth.User",
    # 用户模型上的字段名称，包含头像 ImageFieldURLFieldCharfield 或接收用户的可调用对象
    "user_avatar": 'avatar',
    ############
    # Top Menu #
    ############
    # 放在顶部菜单的链接
    "topmenu_links": [
        # 反转的网址（可以添加权限）
        {"name": "首页", "url": "admin:index", "permissions": ["auth.view_user"]},
        # 在新窗口中打开的外部 url（可以添加权限）
        {"name": "帮助支持", "url": "http://h4l.cn", "new_window": True},
        # model admin to link to (Permissions checked against model)
        {"model": "auth.User"},
        # 带有所有模型页面的下拉菜单的应用程序（针对模型检查的权限）
        {"app": "books"},
    ],
    #############
    # User Menu #
    #############
    # 要包含在右上角的用户菜单中的其他链接（不允许使用“app”url 类型）
    "usermenu_links": [
        {"name": "帮助支持", "url": "http://h4l.cn", "new_window": True},
        {"model": "auth.User"}
    ],
    #############
    # Side Menu #
    #############
    # 是否显示侧边菜单
    "show_sidebar": True,
    # 是否自动展开菜单
    "navigation_expanded": True,
    # 生成侧边菜单时隐藏这些应用程序，例如（auth）
    "hide_apps": ['auth', 'account', 'socialaccount'],
    # 生成侧边菜单时隐藏这些模型（例如 auth.User）
    "hide_models": [],
    # 基本侧边菜单排序的应用程序（和或模型）列表（不需要包含所有应用程序模型）
    "order_with_respect_to": ["class3a", "sites"],
    # 附加到应用程序组的自定义链接，以应用程序名称为键
    "custom_links": {
        "books": [{
            "name": "Make Messages",
            "url": "make_messages",
            "icon": "fas fa-comments",
            "permissions": ["books.view_book"]
        }]
    },
    # Custom icons for side menu apps/models See https://fontawesome.com/icons?d=gallery&m=free&v=5.0.0,5.0.1,5.0.10,5.0.11,5.0.12,5.0.13,5.0.2,5.0.3,5.0.4,5.0.5,5.0.6,5.0.7,5.0.8,5.0.9,5.1.0,5.1.1,5.2.0,5.3.0,5.3.1,5.4.0,5.4.1,5.4.2,5.13.0,5.12.0,5.11.2,5.11.1,5.10.0,5.9.0,5.8.2,5.8.1,5.7.2,5.7.1,5.7.0,5.6.3,5.5.0,5.4.2
    # for the full list of 5.13.0 free icon classes
    "icons": {
        "auth": "fas fa-users-cog",
        "auth.User": "fas fa-user",
        "auth.Group": "fas fa-users",
        "users.UserProfile": "fas fa-user",
        "system.Competence": "fas fa-lock",
        "system.Menu": "fas fa-bars",
        "system.Department": "fas fa-campground",
        "system.Role": "fas fa-user-tag",
        "users.Notice": "fas fa-exclamation-circle",
        "class3a.MonitoringData": "fas fa-tv",
        "class3a.Project": "fas fa-bars",
        "sites.Site": "fas fa-satellite",
        "django_celery_beat.PeriodicTask": "fas fa-tasks",
        "django_celery_beat.ClockedSchedule": "fas fa-hourglass",
        "django_celery_beat.SolarSchedule": "fas fa-solar-panel",
        "django_celery_beat.CrontabSchedule": "fab fa-telegram-plane",
        "django_celery_beat.IntervalSchedule": "fas fa-clock",
        "system.ConnectionPool": "fab fa-connectdevelop",
        "system.SystemConfig": "fas fa-cogs",
        "authtoken.TokenProxy": "fas fa-fingerprint",
    },
    # 未手动指定时使用的图标
    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",
    #################
    # Related Modal #
    #################
    # 使用模态而不是弹出窗口
    "related_modal_active": False,
    #############
    # UI Tweaks #
    #############
    # 自定义 CSSJS 脚本的相对路径（必须存在于静态文件中）
    "custom_css": None,
    "custom_js": None,
    # 是否在侧边栏显示 UI 定制器
    "show_ui_builder": True,

    ###############
    # Change view #
    ###############
    # 将更改视图呈现为单个表单，或者在选项卡中，当前选项是
    # - single
    # - horizontal_tabs (default)
    # - vertical_tabs
    # - collapsible
    # - carousel
    "changeform_format": "horizontal_tabs",
    # 在每个模型管理员的基础上覆盖更改表单
    "changeform_format_overrides": {"auth.user": "collapsible", "auth.group": "vertical_tabs"},
    # 在管理员中添加语言下拉菜单
    "language_chooser": False,
}
# Your stuff...
# ------------------------------------------------------------------------------
