# Generated by Django 4.0.8 on 2023-02-07 06:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contenttypes', '0002_remove_content_type_name'),
        ('notifications', '0012_alter_notification_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='notification',
            options={'ordering': ('-timestamp',), 'verbose_name': '通知', 'verbose_name_plural': '通知'},
        ),
        migrations.AlterField(
            model_name='notification',
            name='action_object_content_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='notify_action_object', to='contenttypes.contenttype', verbose_name='动作对象内容类型'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='action_object_object_id',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='操作对象对象标识'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='actor_content_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notify_actor', to='contenttypes.contenttype', verbose_name='参与者内容类型'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='actor_object_id',
            field=models.CharField(max_length=255, verbose_name='参与者对象 ID'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='data',
            field=jsonfield.fields.JSONField(blank=True, null=True, verbose_name='数据'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='deleted',
            field=models.BooleanField(db_index=True, default=False, verbose_name='删除'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='描述'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='emailed',
            field=models.BooleanField(db_index=True, default=False, verbose_name='已发送'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='level',
            field=models.CharField(choices=[('success', 'success'), ('info', 'info'), ('warning', 'warning'), ('error', 'error')], default='info', max_length=20, verbose_name='级别'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='public',
            field=models.BooleanField(db_index=True, default=True, verbose_name='公开'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='recipient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to=settings.AUTH_USER_MODEL, verbose_name='收件人'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='target_content_type',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='notify_target', to='contenttypes.contenttype', verbose_name='目标内容类型'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='target_object_id',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='目标对象标识'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='timestamp',
            field=models.DateTimeField(db_index=True, default=django.utils.timezone.now, verbose_name='时间戳'),
        ),
        migrations.AlterField(
            model_name='notification',
            name='unread',
            field=models.BooleanField(db_index=True, default=True, verbose_name='未读'),
        ),
    ]
