from rest_framework import viewsets
from .models import SingleDisease, StaResults
from .serializers import SingleDiseaseSerializer, StaResultsSerializer


class SingleDiseaseViewSet(viewsets.ModelViewSet):
    queryset = SingleDisease.objects.all()
    serializer_class = SingleDiseaseSerializer


class StaResultsViewSet(viewsets.ModelViewSet):
    queryset = StaResults.objects.all()
    serializer_class = StaResultsSerializer
