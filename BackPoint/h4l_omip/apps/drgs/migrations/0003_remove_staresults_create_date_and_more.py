# Generated by Django 4.0.8 on 2023-02-22 06:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drgs', '0002_alter_staresults_options'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='staresults',
            name='create_date',
        ),
        migrations.RemoveField(
            model_name='staresults',
            name='update_date',
        ),
    ]
