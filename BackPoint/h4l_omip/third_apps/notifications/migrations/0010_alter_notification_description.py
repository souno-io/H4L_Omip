# Generated by Django 3.2.12 on 2022-03-24 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0009_auto_20220324_2030'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='description'),
        ),
    ]
