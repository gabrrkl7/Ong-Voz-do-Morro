from django.contrib import admin
from .models import Associados


@admin.register(Associados)
class Associados(admin.ModelAdmin):
    list_display = (
    'id_associados',
    'nome_associados',
    'foto_associados')

    search_fields = (
    'id_associados',
    'nome_associados',)  # Campos pesquisáveis no painel de admin