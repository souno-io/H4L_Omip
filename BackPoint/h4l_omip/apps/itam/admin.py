# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import DataCenter, Cabinet, DeviceType, Device, IPAddress


@admin.register(DataCenter)
class DataCenterAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'is_active',
        'update_datetime',
        'create_datetime',
        'label',
    )
    list_filter = ('is_active', 'update_datetime', 'create_datetime')


@admin.register(Cabinet)
class CabinetAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'is_active',
        'update_datetime',
        'create_datetime',
        'label',
        'units',
        'remark',
    )
    list_filter = ('is_active', 'update_datetime', 'create_datetime')


@admin.register(DeviceType)
class DeviceTypeAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'is_active',
        'update_datetime',
        'create_datetime',
        'label',
    )
    list_filter = ('is_active', 'update_datetime', 'create_datetime')


@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'is_active',
        'update_datetime',
        'create_datetime',
        'label',
        'type',
        'model_spec',
        'manufacturer',
        'warranty_period',
        'space',
        'bind_Cabinet',
        'location',
    )
    list_filter = (
        'is_active',
        'update_datetime',
        'create_datetime',
        'type',
        'warranty_period',
        'bind_Cabinet',
    )


@admin.register(IPAddress)
class IPAddressAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'is_active',
        'update_datetime',
        'create_datetime',
        'ip_address',
        'use_device',
        'bind_device',
        'location',
        'purpose',
    )
    list_filter = (
        'is_active',
        'update_datetime',
        'create_datetime',
        'use_device',
        'bind_device',
    )
