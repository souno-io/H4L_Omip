# Generated by Django 4.0.8 on 2023-02-13 08:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('itam', '0006_ipaddress_usage_status_alter_ipaddress_location_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='ipaddress',
            options={'ordering': ['ip_address'], 'verbose_name': 'IP地址', 'verbose_name_plural': 'IP地址'},
        ),
        migrations.AddField(
            model_name='ipaddress',
            name='os_type',
            field=models.CharField(blank=True, help_text='备注使用位置:楼层，办公室等', max_length=255, null=True, verbose_name='操作系统类型'),
        ),
        migrations.AlterField(
            model_name='ipaddress',
            name='bind_device',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ip_bind_device', to='itam.device', verbose_name='对端绑定设备'),
        ),
        migrations.AlterField(
            model_name='ipaddress',
            name='use_device',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='ip_use_device', to='itam.device', verbose_name='本端使用设备'),
        ),
    ]
