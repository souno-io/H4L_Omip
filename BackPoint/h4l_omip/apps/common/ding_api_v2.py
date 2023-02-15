import json

import requests
from django.conf import settings


class DingApi:
    DEPARTMENT_LIST_URL = "https://oapi.dingtalk.com/department/list"
    USER_LIST_URL = "https://oapi.dingtalk.com/user/getDeptMember"
    USER_GET_URL = "https://oapi.dingtalk.com/user/get"
    GET_TOKEN_URL = "https://oapi.dingtalk.com/gettoken"
    SEND_MESSAGE_URL = "https://oapi.dingtalk.com/topapi/message/corpconversation/asyncsend_v2"
    UPDATE_MESSAGE_URL = "https://oapi.dingtalk.com/topapi/message/corpconversation/status_bar/update"
    GET_MOBILE_URL = 'https://oapi.dingtalk.com/user/get_by_mobile'
    GET_USER_INFO = "https://oapi.dingtalk.com/user/getuserinfo"

    def __init__(
        self,
        # app_key='dingsi59gbikqpaeoqq0',
        app_key=settings.env("DING_APP_KEY"),
        app_secret=settings.env("DING_APP_SECRET"),
        agent_id=settings.env("DING_AGENT_ID"),
    ):
        self.agent_id = agent_id
        token_url = f"{DingApi.GET_TOKEN_URL}?appkey={app_key}&appsecret={app_secret}"
        self.token = requests.get(token_url).json()['access_token']

    def get_msg_user(self):
        from django.contrib.auth import get_user_model
        return ','.join(x for x in get_user_model().objects.all().values_list('ding_userid', flat=True) if x)

    def get_dp(self):
        response = requests.get(f"{DingApi.DEPARTMENT_LIST_URL}?access_token={self.token}")
        response.raise_for_status()
        return response.json()['department']

    def get_users(self, dept_id=None):
        if dept_id is None:
            dept_id = self.get_dp()[0]['id']
        response = requests.get(f"{DingApi.USER_LIST_URL}?access_token={self.token}&deptId={dept_id}")
        response.raise_for_status()
        return response.json()['userIds']

    def get_user_info(self, user_id):
        response = requests.get(f"{DingApi.USER_GET_URL}?access_token={self.token}&userid={user_id}")
        response.raise_for_status()
        return response.json()

    def get_me_info(self, auth_code):
        response = requests.get(
            f"{DingApi.GET_USER_INFO}?access_token={self.token}&code={auth_code}")
        response.raise_for_status()
        user_access = response.json()
        if user_access['errcode'] == 0:
            response = requests.get(f"{DingApi.USER_GET_URL}?access_token={self.token}&userid={user_access['userid']}")
            response.raise_for_status()
            return response.json()
        return user_access

    def pull_message(
        self, message, user_list=None, author="管理员", title="系统通知", form=None, num=None, unit=None,
        msg_url=None, pc_message_url=None
    ):
        user_list = user_list or self.get_msg_user()
        headers = {'content-type': 'application/json'}
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
        try:
            response = requests.post(
                f"{self.SEND_MESSAGE_URL}?access_token={self.token}", json=data, headers=headers
            )
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error occurred while sending message: {e}")
            return {}

    def update_message(self, task_id, status_value='已完成', status_bg='0xFF78C06E'):
        data = {
            "agentid": self.agent_id,
            "task_id": task_id,
            "status_value": status_value,
            "status_bg": status_bg
        }
        headers = {'content-type': 'application/json'}
        response = requests.post(
            f"{self.UPDATE_MESSAGE_URL}?access_token={self.token}", json=data, headers=headers
        )
        response.raise_for_status()
        return response.json()

    def get_by_mobile(self, tel_num):
        response = requests.get(f'{self.GET_MOBILE_URL}?access_token={self.token}&mobile={tel_num}')
        response.raise_for_status()
        return response.json()
