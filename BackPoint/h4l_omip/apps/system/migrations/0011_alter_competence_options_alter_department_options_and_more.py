# Generated by Django 4.0.8 on 2023-02-18 09:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0010_alter_role_competences_alter_role_menus'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='competence',
            options={'ordering': ['name'], 'verbose_name': '权限', 'verbose_name_plural': '权限'},
        ),
        migrations.AlterModelOptions(
            name='department',
            options={'ordering': ['label'], 'verbose_name': '科室', 'verbose_name_plural': '科室'},
        ),
        migrations.AlterModelOptions(
            name='role',
            options={'ordering': ['-sort'], 'verbose_name': '角色', 'verbose_name_plural': '角色'},
        ),
        migrations.RemoveField(
            model_name='department',
            name='code',
        ),
        migrations.RemoveField(
            model_name='dictionary',
            name='code',
        ),
        migrations.RemoveField(
            model_name='role',
            name='code',
        ),
        migrations.AlterUniqueTogether(
            name='competence',
            unique_together={('name',)},
        ),
        migrations.RemoveField(
            model_name='competence',
            name='code',
        ),
    ]