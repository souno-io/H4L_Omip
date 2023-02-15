# 自定义异常处理
from rest_framework.views import exception_handler
from rest_framework.views import Response
from rest_framework import status


def custom_exception_handler(exc, context):
    # 先调用REST framework默认的异常处理方法获得标准错误响应对象
    response = exception_handler(exc, context)
    # print(exc)  #错误原因   还可以做更详细的原因，通过判断exc信息类型
    # print(context)  # 错误信息
    # print('1234 = %s - %s - %s' % (context['view'], context['request'].method, exc))
    # print(response)

    # 如果response响应对象为空，则设置message这个key的值，并将状态码设为500
    # 如果response响应对象不为空，则则设置message这个key的值，并将使用其本身的状态码
    if response is None:
        return Response({
            'message': '服务器错误:{exc}'.format(exc=exc)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR, exception=True)

    else:
        # print('123 = %s - %s - %s' % (context['view'], context['request'].method, exc))
        return Response({
            'message': '服务器错误:{exc}'.format(exc=exc),
        }, status=response.status_code, exception=True)
