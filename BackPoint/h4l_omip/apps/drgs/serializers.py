from rest_framework import serializers

from common.serializers import RecursiveField
from .models import SingleDisease, StaResults


class SingleDiseaseSerializer(serializers.ModelSerializer):
    children = RecursiveField(many=True)

    class Meta:
        model = SingleDisease
        fields = '__all__'


class StaResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaResults
        fields = '__all__'
