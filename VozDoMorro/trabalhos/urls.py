from django.urls import path
from . import views


urlpatterns = [
    path('trabalhos/', views.trabalhos, name="trabalhos"),
    path('trabalhos_api/', views.trabalhos_api, name="trabalhos_api"),
]