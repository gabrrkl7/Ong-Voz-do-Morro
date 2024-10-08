from django.shortcuts import render
from .models import Eventos
from django.http import JsonResponse

# Create your views here.
def eventos(request):
    return render(request, 'eventos.html')

def eventos_api(request):
    eventos = Eventos.objects.all()

    id_eventos = []
    titulo_eventos = []
    descricao_eventos = []
    local_eventos = []
    data_eventos = []
    foto_eventos = []

    for atividade in eventos:
        id_eventos.append(atividade.id_eventos)
        titulo_eventos.append(atividade.titulo_eventos)
        descricao_eventos.append(atividade.descricao_eventos)
        local_eventos.append(atividade.local_eventos)
        data_eventos.append(atividade.data_eventos)  # Format date as string
        foto_eventos.append(atividade.foto_eventos.url if atividade.foto_eventos else None)  # Handle photo URL

    return JsonResponse({
        'id_eventos': id_eventos, 
        'titulo_eventos': titulo_eventos, 
        'descricao_eventos': descricao_eventos, 
        'local_eventos': local_eventos, 
        'data_eventos': data_eventos, 
        'foto_eventos': foto_eventos
    })