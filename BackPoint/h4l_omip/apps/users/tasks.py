from django.contrib.auth import get_user_model
from config import celery_app
from .models import HISEmployee, HISDepartment

User = get_user_model()


@celery_app.task(soft_time_limit=600)
def sync_employee():
    """同步系统与HISEmployee数据信息"""
    try:
        HISEmployee.objects.from_his()
    except Exception as e:
        return str(e)
    else:
        return 'success!'


@celery_app.task(soft_time_limit=120)
def sync_department():
    """同步系统与HISDepartment数据信息"""
    try:
        HISDepartment.objects.from_his()
    except Exception as e:
        return str(e)
    else:
        return 'success!'


@celery_app.task()
def get_users_count():
    """A pointless Celery task to demonstrate usage."""
    return User.objects.count()
