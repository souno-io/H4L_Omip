# -*- coding: utf-8 -*-
from django.contrib import admin
from mptt.admin import DraggableMPTTAdmin

from .models import SingleDisease, StaResults


@admin.register(SingleDisease)
class SingleDiseaseAdmin(DraggableMPTTAdmin):
    list_display = (
        "tree_actions", 'indented_title', 'parentId',
        # 'label',
        # 'description',
        # 'primary_diagnostic_code',
        # 'main_surgical_code',
        'is_adult',
        'is_active',
    )
    list_display_links = ("indented_title", 'parentId',)  # Sane defaults.
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
