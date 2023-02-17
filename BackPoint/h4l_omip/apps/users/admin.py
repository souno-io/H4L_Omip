from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _
from mptt.admin import MPTTModelAdmin, DraggableMPTTAdmin

from .models import HISEmployee, HISDepartment

from users.forms import UserAdminChangeForm, UserAdminCreationForm

User = get_user_model()
admin.site.site_header = 'H4L管理后台'  # 设置header
admin.site.site_title = 'H4L_PLATFORM'  # 设置title
admin.site.index_title = 'H4L_PLATFORM'


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'name', 'phone', 'password1', 'password2',),
        }),
    )
    fieldsets = (
        (_("账户密码"), {"fields": ("username", "password")}),
        (_("Personal info"),
         {"fields": (
             "name", "email", "avatar", "employee_num", "user_departments", "id_card_no", "phone", "ding_userid",
             "wx_userid", "signature"
         )}),
        (
            _("Permissions"),
            {
                "fields": (
                    "user_roles",
                    "user_competences",
                    "user_menus",
                    # "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("选项信息"), {"fields": ("is_active", "is_staff", "is_superuser")}),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    list_display = ["username", 'phone', "name", "is_superuser", "is_staff", "employee_num"]
    search_fields = ["name", "username", "phone"]
    filter_horizontal = ('groups', 'user_permissions', "user_roles", "user_competences", "user_menus")
    readonly_fields = ["last_login", "date_joined"]  # 只读字段
    autocomplete_fields = ["user_departments"]  # 带有搜索框的外键选择框


@admin.register(HISEmployee)
class HISEmployeeAdmin(admin.ModelAdmin):
    list_display = (
        'code',
        'num',
        'name',
        'gender',
        'identity',
        'nhic',
        'department',
        'is_specialist',
        'phone',
        'is_active',
    )
    list_filter = (
        'is_specialist',
        'antibiotic_rights',
        'prescription_rights',
        'narcotics_rights',
        'psychotropic_rights',
        'is_active',
    )
    search_fields = ('name',)
    list_display_links = ("code", 'num', 'name',)  # Sane defaults.


@admin.register(HISDepartment)
class HISDepartmentAdmin(admin.ModelAdmin):
    list_display = (
        'code',
        'name',
        'alias',
        'parent_code',
        'is_outpatient',
        'is_technology',
        'is_inpatient',
        'is_ward',
        'is_consultation',
        'rated_bed',
        'is_active',
    )
    list_filter = (
        'is_outpatient',
        'is_technology',
        'is_inpatient',
        'is_ward',
        'is_consultation',
        'is_active',
    )
    search_fields = ('name', 'code', 'parent_code')
    list_display_links = ("code", 'name',)  # Sane defaults.
