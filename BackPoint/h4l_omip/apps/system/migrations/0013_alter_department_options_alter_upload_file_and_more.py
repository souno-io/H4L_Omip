# Generated by Django 4.0.8 on 2023-02-22 03:48

import common.utils
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0012_department_sort'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='department',
            options={'ordering': ['-sort'], 'verbose_name': '科室', 'verbose_name_plural': '科室'},
        ),
        migrations.AlterField(
            model_name='upload',
            name='file',
            field=models.ImageField(blank=True, default='avatar/default.png', help_text='上传文件', null=True, upload_to=common.utils.PathAndRename('upload/2023-02-22/'), verbose_name='上传文件'),
        ),
        migrations.AlterField(
            model_name='uploadfile',
            name='file',
            field=models.FileField(default='avatar/default.png', help_text='存放文件字段', upload_to=common.utils.PathAndRename('avatar/2023-02-22/'), verbose_name='上传的文件'),
        ),
    ]
