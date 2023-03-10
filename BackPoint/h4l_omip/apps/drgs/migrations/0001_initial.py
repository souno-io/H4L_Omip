# Generated by Django 4.0.8 on 2023-02-22 03:48

from django.db import migrations, models
import django.db.models.deletion
import model_utils.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SingleDisease',
            fields=[
                ('id', model_utils.fields.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('is_active', models.BooleanField(default=True, help_text='状态说明字段', verbose_name='激活状态')),
                ('update_datetime', models.DateTimeField(auto_now=True, help_text='修改时间', null=True, verbose_name='修改时间')),
                ('create_datetime', models.DateTimeField(auto_now_add=True, help_text='创建时间', null=True, verbose_name='创建时间')),
                ('label', models.CharField(blank=True, help_text='一、急性心肌梗死、心肌梗死、心肌梗死等对脏', max_length=255, unique=True, verbose_name='标题')),
                ('description', models.TextField(blank=True, default='指标描述', null=True, verbose_name='描述')),
                ('primary_diagnostic_code', models.CharField(blank=True, help_text='主要诊断 ICD-10 编码：I21.0 至 I21.3 的出院患者', max_length=2048, null=True, verbose_name='主要诊断编码')),
                ('second_diagnostic_code', models.CharField(blank=True, help_text='主要诊断 ICD-10 编码：I21.0 至 I21.3 的出院患者', max_length=2048, null=True, verbose_name='主要诊断编码')),
                ('main_surgical_code', models.CharField(blank=True, help_text='主要手术 ICD-9-CM-3 编码：36.1 的手术出院患者', max_length=2048, null=True, verbose_name='主要手术及操作编码')),
                ('is_adult', models.BooleanField(default=True, help_text='是否成人：True：是，False：否', verbose_name='是否成人')),
                ('sort', models.IntegerField(blank=True, help_text='排序顺序', null=True, verbose_name='排序顺序')),
                ('remark', models.TextField(help_text='备注:微模块1等', null=True, verbose_name='备注')),
            ],
            options={
                'verbose_name': '单病种指标',
                'verbose_name_plural': '单病种指标',
                'ordering': ['sort'],
            },
        ),
        migrations.CreateModel(
            name='StaResults',
            fields=[
                ('id', model_utils.fields.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('is_active', models.BooleanField(default=True, help_text='状态说明字段', verbose_name='激活状态')),
                ('update_datetime', models.DateTimeField(auto_now=True, help_text='修改时间', null=True, verbose_name='修改时间')),
                ('create_datetime', models.DateTimeField(auto_now_add=True, help_text='创建时间', null=True, verbose_name='创建时间')),
                ('start_date', models.CharField(help_text='开始时间', max_length=255, verbose_name='开始时间')),
                ('end_date', models.CharField(help_text='结束时间', max_length=255, verbose_name='结束时间')),
                ('info', models.JSONField(default=dict, help_text='结果数据', verbose_name='结果数据')),
                ('remarks', models.TextField(blank=True, help_text='备注', null=True, verbose_name='备注')),
                ('update_date', models.DateTimeField(auto_now=True, null=True, verbose_name='更新时间')),
                ('create_date', models.DateTimeField(auto_now_add=True, null=True, verbose_name='创建时间')),
                ('cls', models.ForeignKey(help_text='对应单病种项目的类别信息', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='single_disease_result', to='drgs.singledisease', verbose_name='单病种项目')),
            ],
            options={
                'verbose_name': '统计结果',
                'ordering': ['cls'],
                'unique_together': {('cls', 'start_date', 'end_date')},
            },
        ),
    ]
