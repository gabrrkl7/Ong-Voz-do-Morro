from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class Eventos (models.Model):
    """ 
    Cria a tabela atividades
    """

    id_eventos = models.AutoField (primary_key=True)
    titulo_eventos = models.CharField(max_length=50)
    descricao_eventos = models.CharField(max_length=500)
    data_eventos = models.CharField(max_length=150)
    local_eventos = models.CharField(max_length=150)
    foto_eventos = models.ImageField(upload_to="eventos/")
    

    def __str__(self) -> str:
        return self.titulo_eventos
