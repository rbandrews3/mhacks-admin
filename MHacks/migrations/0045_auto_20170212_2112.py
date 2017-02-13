# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2017-02-13 03:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MHacks', '0044_auto_20170208_1149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='employment',
            field=models.CharField(choices=[(b'internship', b'Internship (I am graduating in December 2018 or later)'), (b'full time', b'Full Time Employment (I am graduating prior to June 2018)'), (b'part time', b'Part Time Employment while in school (Co-op)'), (b'none', b'Not Interested')], max_length=64),
        ),
    ]
