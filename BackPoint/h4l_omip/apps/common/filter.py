import rest_framework_filters as filters


class H4LFilter(filters.FilterSet):
    update_datetime = filters.DateTimeFilter(field_name='update_datetime', lookup_expr='gte')
    create_datetime = filters.DateTimeFilter(field_name='create_datetime', lookup_expr='lte')
