"""
自定义返回处理
"""

# 导入控制返回的JSON格式的类
from rest_framework.renderers import JSONRenderer


class H4LRenderer(JSONRenderer):
    # 重构render方法
    def render(self, data, accepted_media_type=None, renderer_context=None):
        if renderer_context:
            print(data)
            if isinstance(data, dict):
                message = data.pop('msg', 'success')
                code = data.pop('code', 1)
            else:
                message = 'success'
                state = 1

            # 重新构建返回的JSON字典
            for key in data:
                # 判断是否有自定义的异常的字段
                if key == 'message':
                    message = data[key]
                    data = ''
                    code = 0

            ret = {
                'msg': message,
                'code': code,
                'data': data,
            }
            # 返回JSON数据
            return super().render(ret, accepted_media_type, renderer_context)
        else:
            return super().render(data, accepted_media_type, renderer_context)


class CustomRenderer(JSONRenderer):
    # 重构render方法
    def render(self, data, accepted_media_type=None, renderer_context=None):
        if renderer_context:

            # print(renderer_context)
            # print(renderer_context["response"].status_code)

            # 响应的信息，成功和错误的都是这个
            # 成功和异常响应的信息，异常信息在前面自定义异常处理中已经处理为{'message': 'error'}这种格式
            # print(data)

            # 如果返回的data为字典
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
                    ret["data"] = {'rows': results}
                    ret["data"]["total"] = data.pop('count', 0)
                    ret["data"]["next"] = data.pop('next', None)
                    ret["data"]["previous"] = data.pop('previous', None)
                    ret.update(data)
                elif info is not None:
                    ret["data"] = info
                else:
                    ret["data"] = data
            # 如果不是字典则将msg内容改为请求成功 code改为请求的状态码
            else:
                ret['message'] = '请求成功'
                ret['code'] = renderer_context["response"].status_code
                ret['data'] = {}
                ret['data'] = data
                # ret['data']["total"] = len(data)
            return super().render(ret, accepted_media_type, renderer_context)
        else:
            return super().render(data, accepted_media_type, renderer_context)
