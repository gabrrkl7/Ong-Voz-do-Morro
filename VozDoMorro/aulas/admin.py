from django.contrib import admin
from .models import Aulas


@admin.register(Aulas)
class Aulas(admin.ModelAdmin):
    list_display = (
    'titulo_aulas',
    'descricao_aulas',
    'foto_aulas')
    search_fields = (
     'titulo_aulas',
    'descricao_aulas')  # Campos pesquisáveis no painel de admin