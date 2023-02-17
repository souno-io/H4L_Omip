# -*- coding: utf-8 -*-
from django.contrib import admin
from django.db.models import JSONField
from django.db.models.fields import TextField
from mptt.admin import DraggableMPTTAdmin

from .models import SystemConfig, ConnectionPool, SystemLogs, Role, Menu, Department, Competence
from common import widgets


@admin.register(Department)
class DepartmentAdmin(DraggableMPTTAdmin):
    list_per_page = 20  # 指定每页显示多少条信息
    list_display = ["tree_actions", 'indented_title', 'code', 'parentId', 'is_active', 'remark']
    list_display_links = ("indented_title", 'code', 'parentId',)  # Sane defaults.
    list_filter = ['code', 'label']  # 列表过滤栏设置指定过滤的['属性']
    search_fields = ['code', 'label']  # 搜索栏设置指定搜索属性['属性']
    filter_horizontal = ('menus', 'competences')


@admin.register(Competence)
class CompetenceAdmin(admin.ModelAdmin):
    list_per_page = 20  # 指定每页显示多少条信息
    list_display = ['code', 'name', 'is_active', 'remark']
    list_filter = ['code', 'name']  # 列表过滤栏设置指定过滤的['属性']
    search_fields = ['code', 'name']  # 搜索栏设置指定搜索属性['属性']


@admin.register(Menu)
class MenuAdmin(DraggableMPTTAdmin):
    list_per_page = 20  # 指定每页显示多少条信息
    list_display = ["tree_actions", 'indented_title', 'level', 'parent', 'path', 'component', 'icon', 'remark']
    list_display_links = ("indented_title",)
    list_filter = ['name', 'title', 'level']  # 列表过滤栏设置指定过滤的['属性']
    search_fields = ['name', 'title', 'level']  # 搜索栏设置指定搜索属性['属性']
    filter_horizontal = []


@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_per_page = 20  # 指定每页显示多少条信息
    list_display = ['code', 'label', 'remark']
    list_filter = ['label']  # 列表过滤栏设置指定过滤的['属性']
    search_fields = ['label']  # 搜索栏设置指定搜索属性['属性']
    filter_horizontal = ('menus', 'competences')


@admin.register(SystemConfig)
class SystemConfigAdmin(admin.ModelAdmin):
    list_display = ('title', 'key', 'type', 'is_active')

    formfield_overrides = {
        TextField: {'widget': widgets.SQLEditorWidget},
        JSONField: {'widget': widgets.JsonEditorWidget}
    }

    class Media:
        from django.conf import settings

        css = {
            'all': (getattr(settings, 'STATIC_URL') + 'css/jsoneditor.min.css',)
        }
        js = (
            getattr(settings, 'STATIC_URL') + "js/jquery-1.12.4.min.js",
            getattr(settings, 'STATIC_URL') + "js/sql-formatter.min.js",
            getattr(settings, 'STATIC_URL') + "js/ace/ace.js",
            getattr(settings, 'STATIC_URL') + "js/ace/ext-language_tools.js",
            getattr(settings, 'STATIC_URL') + "js/jsoneditor-minimalist.min.js",
        )


@admin.register(ConnectionPool)
class ConnectionPoolAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'type',
        'configuration',
        'update_datetime',
        'create_datetime',
    )
    list_filter = ('update_datetime', 'create_datetime')
    search_fields = ('name',)


@admin.register(SystemLogs)
class SystemLogsAdmin(admin.ModelAdmin):
    list_display = (
        'time',
        'sip',
        'dip',
        'path',
        'method',
        'username',
        'status_code',
        'reason_phrase',
    )
    list_filter = ['time', 'username', 'status_code', 'method', 'path', 'sip', 'dip']
