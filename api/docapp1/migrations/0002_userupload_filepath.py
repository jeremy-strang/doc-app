# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-19 18:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('docapp1', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userupload',
            name='filePath',
            field=models.CharField(blank=True, default='', max_length=150),
        ),
    ]