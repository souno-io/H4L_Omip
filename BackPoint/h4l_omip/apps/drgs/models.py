from string import Template

from django.db import models

from common.his import His
from common.models import H4LBaseModel
from django.utils.translation import gettext_lazy as _

from drgs.sql import BASE_SQL


class SingleDisease(H4LBaseModel):
    label = models.CharField(
        _('标题'), unique=True, blank=True, null=False, max_length=255,
        help_text=_("一、急性心肌梗死、心肌梗死、心肌梗死等对脏")
    )
    description = models.TextField(_('描述'), blank=True, null=True, default=_("指标描述"))
    diagnostic_digits = models.IntegerField(
        _('诊断代码位数'), null=False, blank=False, default=3, help_text=_('诊断代码位数:4')
    )
    primary_diagnostic_code = models.CharField(
        _('主要诊断编码'), blank=True, null=True, max_length=2048,
        help_text=_("主要诊断 ICD-10 编码：I21.0 至 I21.3 的出院患者")
    )
    second_diagnostic_code = models.CharField(
        _('第二诊断编码'), blank=True, null=True, max_length=2048,
        help_text=_("第二诊断 ICD-10 编码：I21.0 至 I21.3 的出院患者")
    )
    special_primary_diagnostic = models.CharField(
        _('特殊第一诊断'), blank=True, null=True, default=None, max_length=2048,
        help_text=_("特殊第一诊断：或 I42 至 I43 伴第二诊断为 I50的出院患者")
    )
    special_second_diagnostic = models.CharField(
        _('伴特殊第二诊断'), blank=True, null=True, default=None, max_length=2048,
        help_text=_("特殊第二诊断：或 I42 至 I43 伴第二诊断为 I50的出院患者")
    )
    surgical_digits = models.IntegerField(
        _('手术代码位数'), null=False, blank=False, default=3, help_text=_('手术代码位数:4')
    )
    main_surgical_code = models.CharField(
        _('主要手术及操作编码'), blank=True, null=True, max_length=2048,
        help_text=_("主要手术 ICD-9-CM-3 编码：36.1 的手术出院患者")
    )
    is_adult = models.BooleanField(
        _('是否特殊年龄'), default=False, null=False, blank=False, help_text=_("是否特殊年龄：True：是，False：否")
    )
    min_age = models.IntegerField(
        _('最小年龄'), null=False, blank=False, default=0, help_text=_('最小年龄:0')
    )
    max_age = models.IntegerField(
        _('最大年龄'), null=False, blank=False, default=0, help_text=_('最大年龄:0,0为不限制最大年龄')
    )
    sort = models.IntegerField(_('排序顺序'), null=True, blank=True, help_text=_('排序顺序'))
    remark = models.TextField(_('备注'), null=True, blank=True, help_text=_("备注:微模块1等"))

    class Meta:
        verbose_name = '单病种指标'
        verbose_name_plural = verbose_name
        ordering = ['sort']

    def __str__(self):
        return self.label

    def fetch(self, start_date=None, end_date=None, user=None, background=False):
        # 判断必须参数是否已给出
        if not all([start_date, end_date]):
            raise Exception('start_date 和 end_date 必须提供！')
        # 循环拼接sql语句
        sql = Template(BASE_SQL).safe_substitute(start_date=start_date, end_date=end_date)
        diag_splice: str = ""  # 诊断拼接段
        surg_splice: str = ""  # 手术拼接段
        age_splice: str = ""  # 手术拼接段
        if self.primary_diagnostic_code:
            diag_splice = f"where SUBSTR(出院主要诊断编码,0,{self.diagnostic_digits}) in ({self.primary_diagnostic_code})\n"
        if self.second_diagnostic_code:
            diag_splice = diag_splice + f" or SUBSTR(出院诊断疾病编码1,0,{self.diagnostic_digits}) in ({self.second_diagnostic_code})\n"
        if all([self.special_primary_diagnostic, self.special_second_diagnostic]):
            diag_splice = diag_splice + f" or (SUBSTR(出院主要诊断编码,0,{self.diagnostic_digits}) in ({self.special_primary_diagnostic}) and " \
                                        f"SUBSTR(出院诊断疾病编码1,0,{self.diagnostic_digits}) in ({self.special_second_diagnostic}))\n"
        if self.primary_diagnostic_code is None and self.main_surgical_code is not None:
            surg_splice = surg_splice + f"where SUBSTR(主要手术操作编码,0,{self.surgical_digits}) in({self.main_surgical_code})\n"
        elif all([self.primary_diagnostic_code, self.main_surgical_code]):
            surg_splice = surg_splice + f" and SUBSTR(主要手术操作编码,0,{self.surgical_digits}) in({self.main_surgical_code})\n"
        else:
            pass
        if self.is_adult:
            if self.max_age == 0:
                age_splice = age_splice + f" and 年龄>={self.min_age}\n"
            else:
                age_splice = age_splice + f" and {self.min_age} =< 年龄 and 年龄 <= {self.max_age}\n"
        print(sql + diag_splice + surg_splice + age_splice + " order by 住院号码")
        return His(sql + diag_splice + surg_splice + age_splice + " order by 住院号码").rows_as_dicts()


class StaResults(H4LBaseModel):
    """
    Model for the STA results.
    """
    # cls = models.CharField('项目类别', max_length=255, null=False, blank=False, help_text='对应项目的类别信息')
    cls = models.ForeignKey(
        'SingleDisease', verbose_name=_("单病种项目"), null=True, on_delete=models.SET_NULL,
        help_text=_("对应单病种项目的类别信息"), related_name="single_disease_result"
    )
    start_date = models.CharField('开始时间', max_length=255, null=False, blank=False, help_text='开始时间')
    end_date = models.CharField('结束时间', max_length=255, null=False, blank=False, help_text='结束时间')
    info = models.JSONField(
        '结果数据', null=False, blank=False, help_text='结果数据', default=dict
    )
    remarks = models.TextField('备注', null=True, blank=True, help_text='备注')

    class Meta:
        unique_together = ('cls', 'start_date', 'end_date')
        ordering = ['cls']
        verbose_name = '统计结果'
        verbose_name_plural = verbose_name

    def __str__(self):
        return '%s.%s' % (self.cls, self.start_date)

    def get_count_result(self, type='all'):
        """
        获取统计结果数据
        """
        return {
            'cls': self.cls,
            'start_date': self.start_date,
            'end_date': self.end_date,
            'info': self.info,
            'remarks': self.remarks
        }

    def get_project_disease_result(self, disease):
        """
        获取指定毕业项目下的疾病统计结果数据
        """
        return self.info.get(disease, {})

    def get_project_diseases(self):
        """
        获取毕业项目下的所有疾病统计结果数据
        """
        return self.info.keys()

    def get_disease_result(self, disease, type='all'):
        """
        获取指定疾病统计结果数据
        """
        return self.info.get(disease, {}).get(type, None)

    def get_diseases(self):
        """
        获取所有疾病统计结果数据
        """
        return self.info.keys()
