"""
自定义返回处理
"""

# 导入控制返回的JSON格式的类
from rest_framework.renderers import JSONRenderer


class CustomRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        if renderer_context:
            ret = {'message': '请求成功', 'code': renderer_context['response'].status_code, 'data': {}}
            results = data.pop('results', None)
            info = data.pop('info', None)
            if isinstance(data, dict):
                # 响应信息中有message和code这两个key，则获取响应信息中的message和code，并且将原本data中的这两个key删除，放在自定义响应信息里
                # 响应信息中没有则将msg内容改为请求成功 code改为请求的状态码
                ret.update(data)
            if results is not None:
                ret['data'] = {
                    'rows': results,
                    'total': data.pop('count', 0),
                    'next': data.pop('next', None),
                    'previous': data.pop('previous', None)
                }
            elif info is not None:
                ret['data'] = info
            else:
                ret['data'] = data
            return super().render(ret, accepted_media_type, renderer_context)
        else:
            return super().render(data, accepted_media_type, renderer_context)
