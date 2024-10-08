from django.shortcuts import render
from .models import Trabalhos
from django.http import JsonResponse

# Create your views here.
def trabalhos(request):
    return render(request, 'trabalhos.html')

def trabalhos_api (request):
    trabalhos = Trabalhos.objects.all()

    id_trabalhos = []
    titulo_trabalhos = []
    descricao_trabalhos = []
    foto_trabalhos = []

    for atividade in trabalhos:
        id_trabalhos.append(atividade.id_trabalhos)
        titulo_trabalhos.append(atividade.titulo_trabalhos)
        descricao_trabalhos.append(atividade.descricao_trabalhos)
        foto_trabalhos.append(atividade.foto_trabalhos.url if atividade.foto_trabalhos else None)  # Handle photo URL

    return JsonResponse({
        'id_trabalhos': id_trabalhos, 
        'titulo_trabalhos': titulo_trabalhos, 
        'descricao_trabalhos': descricao_trabalhos, 
        'foto_trabalhos': foto_trabalhos,
    })