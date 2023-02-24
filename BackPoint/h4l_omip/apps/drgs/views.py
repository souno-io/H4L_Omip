from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def manage(request):
    return render(request, "drgs/index.html")
