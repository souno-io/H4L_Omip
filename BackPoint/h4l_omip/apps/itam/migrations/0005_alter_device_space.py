# Generated by Django 4.0.8 on 2023-02-07 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('itam', '0004_alter_device_options_alter_device_space'),
    ]

    operations = [
        migrations.AlterField(
            model_name='device',
            name='space',
            field=models.IntegerField(blank=True, help_text='空间占用：占用的机柜单元数量,2,3等', null=True, verbose_name='空间占用'),
        ),
    ]