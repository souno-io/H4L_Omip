"""
自定义返回处理
"""

# 导入控制返回的JSON格式的类
from rest_framework.renderers import JSONRenderer


class CustomRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        if renderer_context:
            ret = {}
            if isinstance(data, dict):
                # 响应信息中有message和code这两个key，则获取响应信息中的message和code，并且将原本data中的这两个key删除，放在自定义响应信息里
                # 响应信息中没有则将msg内容改为请求成功 code改为请求的状态码
                ret['message'] = data.pop('message', '请求成功')
                ret['code'] = data.pop('code', renderer_context["response"].status_code)
                ret["data"] = {}
                results = data.pop('results', None)
                info = data.pop('info', None)
                if results is not None:
                    ret["data"]["list"] = results
                    ret["data"]["total"] = data.pop('count', 0)
                    ret["data"]["next"] = data.pop('next', None)
                    ret["data"]["previous"] = data.pop('previous', None)
                    ret.update(data)
                elif info is not None:
                    ret["data"] = info
                else:
                    ret["data"] = data
            else:
                ret['msg'] = '请求成功'
                ret['code'] = renderer_context["response"].status_code
                ret['data'] = {}
                ret['data']["list"] = data
                # ret['data']["total"] = len(data)
            return super().render(ret, accepted_media_type, renderer_context)
        else:
            return super().render(data, accepted_media_type, renderer_context)
