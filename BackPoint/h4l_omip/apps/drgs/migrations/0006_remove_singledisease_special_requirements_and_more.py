# Generated by Django 4.0.8 on 2023-02-22 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drgs', '0005_singledisease_special_requirements'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='singledisease',
            name='special_requirements',
        ),
        migrations.AddField(
            model_name='singledisease',
            name='diagnostic_digits',
            field=models.IntegerField(default=3, help_text='诊断代码位数:4', verbose_name='诊断代码位数'),
        ),
        migrations.AddField(
            model_name='singledisease',
            name='max_age',
            field=models.IntegerField(default=0, help_text='最小年龄:0,0为不限制最大年龄', verbose_name='最大年龄'),
        ),
        migrations.AddField(
            model_name='singledisease',
            name='min_age',
            field=models.IntegerField(default=0, help_text='最小年龄:0', verbose_name='最小年龄'),
        ),
        migrations.AddField(
            model_name='singledisease',
            name='special_diagnostic_code',
            field=models.CharField(blank=True, default=None, help_text='特殊第二诊断：或 I42 至 I43 伴第二诊断为 I50的出院患者', max_length=2048, null=True, verbose_name='伴特殊第二诊断'),
        ),
        migrations.AddField(
            model_name='singledisease',
            name='special_primary_diagnostic',
            field=models.CharField(blank=True, default=None, help_text='特殊第一诊断：或 I42 至 I43 伴第二诊断为 I50的出院患者', max_length=2048, null=True, verbose_name='特殊第一诊断'),
        ),
        migrations.AddField(
            model_name='singledisease',
            name='surgical_digits',
            field=models.IntegerField(default=3, help_text='手术代码位数:4', verbose_name='手术代码位数'),
        ),
        migrations.AlterField(
            model_name='singledisease',
            name='is_adult',
            field=models.BooleanField(default=True, help_text='是否特殊年龄：True：是，False：否', verbose_name='是否特殊年龄'),
        ),
    ]
