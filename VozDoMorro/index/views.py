from django.shortcuts import render
from django.shortcuts import render
from .models import Index
from django.http import JsonResponse

# Create your views here.
def index (request):
    return render(request, 'index.html')