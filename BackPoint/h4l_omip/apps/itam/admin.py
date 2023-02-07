# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import DataCenter, Cabinet, DeviceType, Device, IPAddress


@admin.register(DataCenter)
class DataCenterAdmin(admin.ModelAdmin):
    list_display = (
        'label',
        'is_active',
    )
    list_filter = ('is_active', 'update_datetime', 'create_datetime')


@admin.register(Cabinet)
class CabinetAdmin(admin.ModelAdmin):
    list_display = (
        'label',
        'units',
        'data_center',
        'remark',
        'is_active',
    )
    list_filter = ('is_active', 'update_datetime', 'data_center', 'create_datetime')


@admin.register(DeviceType)
class DeviceTypeAdmin(admin.ModelAdmin):
    list_display = (
        'label',
        'is_active',
    )
    list_filter = ('is_active', 'update_datetime', 'create_datetime')


@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = (
        'label',
        'type',
        'model_spec',
        'manufacturer',
        'warranty_period',
        'space',
        'bind_Cabinet',
        'location',
        'is_active',
    )
    list_filter = (
        'type',
        'warranty_period',
        'bind_Cabinet',
        'is_active',
    )


@admin.register(IPAddress)
class IPAddressAdmin(admin.ModelAdmin):
    list_display = (
        'ip_address',
        'use_device',
        'use_device',
        'location',
        'purpose',
        'is_active',
    )
    list_filter = (
        'is_active',
        'use_device',
        'bind_device',
    )
    search_fields = (
        'ip_address',
    )
