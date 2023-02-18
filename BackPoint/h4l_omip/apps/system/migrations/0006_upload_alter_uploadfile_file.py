# Generated by Django 4.0.8 on 2023-02-18 02:12

import common.utils
from django.db import migrations, models
import model_utils.fields
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0005_rename_parent_department_parentid_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Upload',
            fields=[
                ('id', model_utils.fields.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('is_active', models.BooleanField(default=True, help_text='状态说明字段', verbose_name='激活状态')),
                ('update_datetime', models.DateTimeField(auto_now=True, help_text='修改时间', null=True, verbose_name='修改时间')),
                ('create_datetime', models.DateTimeField(auto_now_add=True, help_text='创建时间', null=True, verbose_name='创建时间')),
                ('src', models.ImageField(blank=True, default='avatar/default.png', help_text='上传文件', null=True, upload_to=common.utils.PathAndRename('upload/2023-02-18/'), verbose_name='上传文件')),
            ],
            options={
                'verbose_name': '上传文件',
                'verbose_name_plural': '上传文件',
                'ordering': ['create_datetime'],
            },
        ),
        migrations.AlterField(
            model_name='uploadfile',
            name='file',
            field=models.FileField(default='avatar/default.png', help_text='存放文件字段', upload_to=common.utils.PathAndRename('avatar/2023-02-18/'), verbose_name='上传的文件'),
        ),
    ]
