# Generated by Django 4.0.8 on 2023-02-28 06:59

from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('drgs', '0009_alter_singledisease_max_age'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='singledisease',
            options={},
        ),
        migrations.AddField(
            model_name='singledisease',
            name='level',
            field=models.PositiveIntegerField(default=0, editable=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='singledisease',
            name='lft',
            field=models.PositiveIntegerField(default=0, editable=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='singledisease',
            name='parent',
            field=mptt.fields.TreeForeignKey(blank=True, max_length=100, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='drgs.singledisease', verbose_name='上级项目'),
        ),
        migrations.AddField(
            model_name='singledisease',
            name='rght',
            field=models.PositiveIntegerField(default=0, editable=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='singledisease',
            name='tree_id',
            field=models.PositiveIntegerField(db_index=True, default=0, editable=False),
            preserve_default=False,
        ),
    ]
