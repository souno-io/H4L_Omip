from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


# 创建一个主页视图
@csrf_exempt
def manage(request):
    return render(request, "system/index.html")
