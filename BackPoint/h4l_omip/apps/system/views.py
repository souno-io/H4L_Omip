from django.shortcuts import render


# 创建一个主页视图
def manage(request):
    return render(request, "manage/index.html")
