from django.urls import path
from . import views


urlpatterns = [
    
    path('aulas/', views.aulas, name='aulas'),
    path('aulas_api/', views.aulas_api, name='aulas_api'),
]