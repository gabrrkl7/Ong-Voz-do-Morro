from django.contrib import admin
from .models import Eventos


@admin.register(Eventos)
class Eventos(admin.ModelAdmin):
    list_display = (
    'titulo_eventos',
    'descricao_eventos', 
    'data_eventos',
    'local_eventos',
    'foto_eventos')
    search_fields = (
    'titulo_eventos',
    'descricao_eventos', 
    'data_eventos',
    'local_eventos')  # Campos pesquisáveis no painel de admin