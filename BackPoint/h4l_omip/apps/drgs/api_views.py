from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import SingleDisease, StaResults
from .serializers import SingleDiseaseSerializer, StaResultsSerializer


class SingleDiseaseViewSet(viewsets.ModelViewSet):
    queryset = SingleDisease.objects.viewable()
    serializer_class = SingleDiseaseSerializer

    @action(detail=True, methods=["GET"])
    def query(self, request, *args, **kwargs):
        if not all([request.GET.get("start_date"), request.GET.get("end_date")]):
            raise Exception('start_date 和 end_date 必须提供！')
        return Response(
            self.get_object().fetch(
                start_date=request.GET.get("start_date"),
                end_date=request.GET.get("end_date"),
                user=request.user
            )
        )


class StaResultsViewSet(viewsets.ModelViewSet):
    queryset = StaResults.objects.all()
    serializer_class = StaResultsSerializer
