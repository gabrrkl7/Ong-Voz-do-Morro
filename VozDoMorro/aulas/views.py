from django.shortcuts import render
from .models import Aulas
from django.http import JsonResponse

# Create your views here.
def aulas(request):
    return render(request, 'aulas.html')

def aulas_api(request):
    aulas = Aulas.objects.all()

    id_aulas = []
    titulo_aulas = []
    descricao_aulas = []
    foto_aulas = []

    for atividade in aulas:
        id_aulas.append(atividade.id_aulas)
        titulo_aulas.append(atividade.titulo_aulas)
        descricao_aulas.append(atividade.descricao_aulas)
        foto_aulas.append(atividade.foto_aulas.url if atividade.foto_aulas else None)  # Handle photo URL

    return JsonResponse({
        'id_aulas': id_aulas, 
        'titulo_aulas': titulo_aulas, 
        'descricao_aulas': descricao_aulas, 
        'foto_aulas': foto_aulas
    })