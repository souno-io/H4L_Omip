from django.apps import apps
from django.db import models
from django.db.models import JSONField
from model_utils.fields import UUIDField
from config import settings
from django.utils.translation import gettext_lazy as _


class H4LJSONField(JSONField):

    def db_type(self, connection):
        return 'json'


class H4LBaseModel(models.Model):
    id = UUIDField(
        primary_key=True,
        version=4,
        editable=False,
    )
    # id = models.CharField('id', primary_key=True, max_length=25, default=non_secure_generate(size=21))
    is_active = models.BooleanField(_('激活状态'), default=True, help_text='状态说明字段')
    update_datetime = models.DateTimeField(_("修改时间"), auto_now=True, null=True, blank=True, help_text="修改时间")
    create_datetime = models.DateTimeField(_("创建时间"), auto_now_add=True, null=True, blank=True, help_text="创建时间")

    class Meta:
        abstract = True
        verbose_name = _('基础模型')
        verbose_name_plural = verbose_name


def get_all_models_objects(model_name=None):
    """
    获取所有 models 对象
    :return: {}
    """
    settings.ALL_MODELS_OBJECTS = {}
    if not settings.ALL_MODELS_OBJECTS:
        all_models = apps.get_models()
        for item in list(all_models):
            table = {
                "tableName": item._meta.verbose_name,
                "table": item.__name__,
                "tableFields": []
            }
            for field in item._meta.fields:
                fields = {
                    "title": field.verbose_name,
                    "field": field.name
                }
                table['tableFields'].append(fields)
            settings.ALL_MODELS_OBJECTS.setdefault(item.__name__, {"table": table, "object": item})
    if model_name:
        return settings.ALL_MODELS_OBJECTS[model_name] or {}
    return settings.ALL_MODELS_OBJECTS or {}
