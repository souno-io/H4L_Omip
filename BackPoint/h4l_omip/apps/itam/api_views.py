from common.pagination import H4LPageNumberPagination
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .models import IPAddress, DataCenter, Cabinet, Device
from .serializers import IPAddressSerializer, DataCenterSerializer, CabinetSerializer, DeviceSerializer


class IPAddressViewSet(ModelViewSet):
    serializer_class = IPAddressSerializer
    queryset = IPAddress.objects.all()
    lookup_field = "ip_address"
    pagination_class = H4LPageNumberPagination

    def get_queryset(self, *args, **kwargs):
        return self.queryset.order_by('-ip_address')
