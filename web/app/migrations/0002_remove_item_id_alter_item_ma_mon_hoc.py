# Generated by Django 5.0.3 on 2024-03-26 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='id',
        ),
        migrations.AlterField(
            model_name='item',
            name='ma_mon_hoc',
            field=models.CharField(default='000000', max_length=10, primary_key=True, serialize=False),
        ),
    ]
