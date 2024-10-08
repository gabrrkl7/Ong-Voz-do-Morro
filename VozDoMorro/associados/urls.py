from django.urls import path
from . import views


urlpatterns = [
    
    path('associados/', views.associados, name='associados'),
    path('associados_api/', views.associados_api, name='associados_api'),
]