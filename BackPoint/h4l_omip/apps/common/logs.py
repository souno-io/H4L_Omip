import json
import logging
import socket
import threading

import click
from django.utils import timezone
from django.utils.deprecation import MiddlewareMixin
from rich.logging import RichHandler

# from django.db import connections

local = threading.local()


class H4LRichHandler(RichHandler):
    def __init__(self, level=logging.NOTSET):
        super().__init__(level, rich_tracebacks=True)


class DBHandler(logging.Handler):
    """
    自定义的handler，只负责将已经定义好的审计日志记录到数据库，其他日志则不作任何操作
    """

    def __init__(self, level=logging.NOTSET):
        logging.Handler.__init__(self, level)
        super().__init__(level)

    def emit(self, record):
        from system.models import SystemLogs
        log = SystemLogs()
        log.sip = getattr(local, 'sip', 'none')
        log.dip = getattr(local, 'dip', 'none')
        log.body = getattr(local, 'body', 'none')
        log.path = getattr(local, 'path', 'none')
        log.method = getattr(local, 'method', 'none')
        log.username = getattr(local, 'username', 'none')
        log.status_code = getattr(local, 'status_code', 'none')
        log.reason_phrase = getattr(local, 'reason_phrase', 'none')
        log.time = timezone.now()
        log.save()  # 日志产生时间，由数据库自动产生


class RequestLogFilter(logging.Filter):
    """
    过滤器实现
    """

    def filter(self, record):
        record.sip = getattr(local, 'sip', 'none')
        record.dip = getattr(local, 'dip', 'none')
        record.body = getattr(local, 'body', 'none')
        record.path = str(getattr(local, 'path', 'none'))
        record.method = getattr(local, 'method', 'none')
        record.username = getattr(local, 'username', 'none')
        record.status_code = getattr(local, 'status_code', 'none')
        record.reason_phrase = getattr(local, 'reason_phrase', 'none')

        return True


class RequestLogMiddleware(MiddlewareMixin):
    """
    将request的信息记录在当前的请求线程上。
    """

    def __init__(self, get_response=None):
        super().__init__(get_response)
        self.get_response = get_response
        self.apiLogger = logging.getLogger('systemLogs')

    def __call__(self, request):

        try:
            body = json.loads(request.body)
        except Exception:
            body = dict()

        if request.method == 'GET':
            body.update(dict(request.GET))
        else:
            body.update(dict(request.POST))

        local.body = body
        local.path = request.path
        local.method = request.method
        local.username = request.user
        local.sip = request.META.get('REMOTE_ADDR', '')
        local.dip = socket.gethostbyname(socket.gethostname())

        response = self.get_response(request)
        local.status_code = response.status_code
        local.reason_phrase = response.reason_phrase
        self.apiLogger.info('system-auto')

        return response
