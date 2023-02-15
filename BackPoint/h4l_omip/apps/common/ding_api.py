import requests
import json

from django.utils.timezone import now


class DingApi:
    def __init__(self):
        app_key = 'dingsi59gbikqpaeoqq0'
        app_secret = 'MbO84KzJysm_5A7L8S0NLZqcI196jl78CNUdJ_5z9p3JZVfV4TnQRXPh6dqgjXcQ'
        self.agent_id = '1573984204'
        url = "https://oapi.dingtalk.com/gettoken?appkey={0}&appsecret={1}".format(app_key, app_secret)
        self.token = json.loads(requests.get(url).text)['access_token']

    def get_dp(self):
        """
        获取部门列表
        :param token:
        :return:
        """
        return json.loads(requests.get(
            "https://oapi.dingtalk.com/department/list?access_token=" + self.token
        ).text)['department']

    def get_users(self, dept_id):
        """
        获取部门用户userid列表
        :param token:
        :param dept_id:
        :return:
        """
        return json.loads(requests.get(
            "https://oapi.dingtalk.com/user/getDeptMember?access_token={0}&deptId={1}".format(self.token, dept_id)
        ).text)['userIds']

    def get_user_info(self, user_id):
        """
        根据userid获取用户详情
        :param token:
        :param userId:
        :return:
        """
        info = json.loads(requests.get(
            "https://oapi.dingtalk.com/user/get?access_token={0}&userid={1}".format(self.token, user_id)
        ).text)
        return info

    def get_me_info(self, auth_code):
        """
        使用免登码获取当前用户id
        """
        user_access = json.loads(requests.get(
            "https://oapi.dingtalk.com/user/getuserinfo?access_token={0}&code={1}".format(
                self.token, auth_code
            )
        ).text)
        if user_access['errcode'] == 0:
            return json.loads(requests.get(
                "https://oapi.dingtalk.com/user/get?access_token={0}&userid={1}".format(
                    self.token,
                    user_access['userid']
                )
            ).text)
        else:
            return user_access

    def pull_message(self, message, user_list='', author="管理员", title="系统通知", form=None, num=None, unit=None,
                     msg_url=None, pc_message_url=None):
        url = 'https://oapi.dingtalk.com/topapi/message/corpconversation/asyncsend_v2?access_token={0}'.format(
            self.token
        )
        if user_list == '':
            user_list = self.get_msg_user()
        print(user_list)
        data = {
            'agent_id': self.agent_id,
            'userid_list': user_list,
            'msg': {
                'msgtype': 'oa',
                "oa": {
                    "head": {
                        "bgcolor": "bgcolor",
                        "text": title
                    },
                    "message_url": msg_url,
                    "pc_message_url": pc_message_url,
                    "status_bar": {
                        "status_value": "请尽快确认！",
                        "status_bg": "0xFFF65E5E"
                    },
                    "body": {
                        "title": title,
                        "form": form,
                        "rich": {
                            "num": num,
                            "unit": unit,
                        },
                        "content": message,
                        # "image": "@lADOADmaWMzazQKA",
                        "author": author
                    },
                },
            }
        }
        print(json.dumps(data))
        print(requests.post(url, data=json.dumps(data), headers={'content-type': "application/json"}).text)
        # return message_info

    def update_message(self, task_id, status_value='已完成', status_bg='0xFF78C06E'):
        return json.loads(
            requests.post(
                'https://oapi.dingtalk.com/topapi/message/corpconversation/status_bar/update?access_token={0}'.format(
                    self.token),
                data=json.dumps(
                    {
                        "agentid": "1407171371",
                        "task_id": task_id,
                        "status_value": status_value,
                        "status_bg": status_bg
                    }
                ),
                headers={'content-type': "application/json"}
            ).text
        )

    def get_msg_user(self):
        """
        获取管理员绑定用户列表
        """
        from django.contrib.auth import get_user_model
        from ..system.models import Role
        return ','.join([x for x in list(
            get_user_model().objects.all().values_list(
                'ding_userid', flat=True
            )
        ) if x is not None])

    # 依据手机号码获取钉钉id
    def get_by_mobile(self, tel_num):
        return json.loads(
            requests.get('https://oapi.dingtalk.com/user/get_by_mobile?access_token={0}&mobile={1}'.format(
                self.token, tel_num
            )).text
        )
