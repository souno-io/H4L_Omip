# Generated by Django 4.0.8 on 2023-02-13 08:10

import common.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_userprofile_avatar_alter_userprofile_email_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='avatar',
            field=models.ImageField(blank=True, default='avatar/default.png', help_text='个人资料图片', null=True, upload_to=common.utils.PathAndRename('avatar/2023-02-13/'), verbose_name='头像'),
        ),
    ]