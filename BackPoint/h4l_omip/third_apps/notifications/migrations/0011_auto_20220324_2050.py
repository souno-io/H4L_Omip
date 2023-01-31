# Generated by Django 3.2.12 on 2022-03-24 12:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('notifications', '0010_alter_notification_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='recipient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to=settings.AUTH_USER_MODEL, verbose_name='recipient'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='unread',
            field=models.BooleanField(db_index=True, default=True, verbose_name='unread'),
        ),
    ]
