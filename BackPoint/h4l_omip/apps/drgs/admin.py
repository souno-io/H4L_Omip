# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import SingleDisease, StaResults


@admin.register(SingleDisease)
class SingleDiseaseAdmin(admin.ModelAdmin):
    list_display = (
        'label',
        'description',
        'primary_diagnostic_code',
        'second_diagnostic_code',
        'main_surgical_code',
        'is_adult',
        'remark',
        'is_active',
    )
    list_filter = (
        'is_active',
        'update_datetime',
        'create_datetime',
        'is_adult',
    )


@admin.register(StaResults)
class StaResultsAdmin(admin.ModelAdmin):
    list_display = (
        'cls',
        'remarks',
    )
    list_filter = (
        'is_active',
        'update_datetime',
        'create_datetime',
        'cls',
    )
