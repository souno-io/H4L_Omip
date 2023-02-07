from django.contrib.auth import get_user_model
from rest_framework import serializers

from common.serializers import RecursiveField
from .models import IPAddress, DataCenter, Cabinet, Device

User = get_user_model()


class IPAddressSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = IPAddress
        fields = "__all__"


class DataCenterSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = DataCenter
        fields = "__all__"


class CabinetSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = Cabinet
        fields = "__all__"


class DeviceSerializer(serializers.ModelSerializer):
    update_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])
    create_datetime = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', required=False,
                                                input_formats=['%Y-%m-%d %H:%M:%S'])

    class Meta:
        model = Device
        fields = "__all__"
