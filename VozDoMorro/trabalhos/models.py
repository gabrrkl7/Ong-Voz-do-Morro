from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class Trabalhos (models.Model):
    """ 
    Cria a tabela atividades
    """

    id_trabalhos = models.AutoField (primary_key=True)
    titulo_trabalhos = models.CharField(max_length=100)
    descricao_trabalhos = models.CharField(max_length=500)
    foto_trabalhos = models.ImageField (upload_to="img")
    

    def __str__(self) -> str:
        return self.titulo_trabalhos