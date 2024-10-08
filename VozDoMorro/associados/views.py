from django.shortcuts import render
from .models import Associados
from django.http import JsonResponse

# Create your views here.
def associados (request):
    return render(request, 'associados.html')

def associados_api (request):
    trabalhos = Associados.objects.all()

    id_associados = []
    nome_associados = []
    foto_associados = []

    for atividade in trabalhos:
        id_associados.append(atividade.id_associados),
        nome_associados.append(atividade.nome_associados),
        foto_associados.append(atividade.foto_associados.url if atividade.foto_associados else None)  # Handle photo URL

    return JsonResponse({
        'id_associados': id_associados, 
        'nome_associados': nome_associados, 
        'foto_associados': foto_associados,
    })