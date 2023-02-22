import rest_framework_filters as filters
from common.filter import H4LFilter
from .models import SingleDisease, StaResults


class SingleDiseaseFilter(H4LFilter):
    class Meta:
        model = SingleDisease
        fields = [
            'label', 'update_datetime', 'create_datetime', 'is_active'
        ]


class StaResultsFilter(H4LFilter):
    class Meta:
        model = StaResults
        fields = [
            'cls', 'update_datetime', 'create_datetime'
        ]
