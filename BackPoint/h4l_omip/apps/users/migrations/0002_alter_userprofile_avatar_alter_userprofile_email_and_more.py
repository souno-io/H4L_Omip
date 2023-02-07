# Generated by Django 4.0.8 on 2023-02-07 06:37

import common.utils
import django.contrib.auth.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='avatar',
            field=models.ImageField(blank=True, default='avatar/default.png', help_text='个人资料图片', null=True, upload_to=common.utils.PathAndRename('avatar/2023-02-07/'), verbose_name='头像'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='email',
            field=models.EmailField(blank=True, default=None, help_text='用于登录验证的电子邮件地址', max_length=50, null=True, verbose_name='电子邮件地址'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='id_card_no',
            field=models.CharField(blank=True, default=None, help_text='身份证号码', max_length=30, null=True, unique=True, verbose_name='身份证号'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='is_staff',
            field=models.BooleanField(default=False, help_text='指定用户是否可以登录到此管理站点。', verbose_name='工作人员状况'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='name',
            field=models.CharField(help_text='姓名', max_length=60, verbose_name='姓名'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='phone',
            field=models.CharField(blank=True, default=None, help_text='用于登录验证的电话号码', max_length=25, null=True, verbose_name='电话号码'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='signature',
            field=models.CharField(blank=True, help_text='个人签名', max_length=255, null=True, verbose_name='个人签名'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='username',
            field=models.CharField(error_messages={'unique': '具有该用户名的用户已存在。'}, help_text='必填。不超过 150 个字符。字母、数字和 @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='用户名'),
        ),
    ]