from django.contrib import admin
from .models import Trabalhos


@admin.register(Trabalhos)
class Trabalhos(admin.ModelAdmin):
    list_display = (
    'titulo_trabalhos',
    'descricao_trabalhos',
    'foto_trabalhos' )
    search_fields = (
    'titulo_trabalhos',
    'descricao_trabalhos',)  # Campos pesquisáveis no painel de admin