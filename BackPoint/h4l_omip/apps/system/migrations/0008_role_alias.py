# Generated by Django 4.0.8 on 2023-02-18 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0007_rename_src_upload_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='alias',
            field=models.CharField(blank=True, help_text='别名', max_length=255, null=True, verbose_name='别名'),
        ),
    ]
