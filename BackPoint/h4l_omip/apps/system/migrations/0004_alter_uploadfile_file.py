# Generated by Django 4.0.8 on 2023-02-13 08:10

import common.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0003_alter_systemconfig_options_alter_uploadfile_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='uploadfile',
            name='file',
            field=models.FileField(default='avatar/default.png', help_text='存放文件字段', upload_to=common.utils.PathAndRename('avatar/2023-02-13/'), verbose_name='上传的文件'),
        ),
    ]