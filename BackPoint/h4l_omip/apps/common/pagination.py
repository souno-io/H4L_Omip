from rest_framework.pagination import PageNumberPagination


class DataCenterPageNumberPagination(PageNumberPagination):
    page_query_param = 'pageNo'
    page_size_query_param = 'pageSize'  # ?pageNo=xx&pageSize=??
    max_page_size = None  # 最大页数设置
    page_size = 20
