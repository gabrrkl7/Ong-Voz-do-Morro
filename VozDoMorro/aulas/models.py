from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class Aulas (models.Model):
    """ 
    Cria a tabela atividades
    """
    id_aulas = models.AutoField (primary_key=True)
    titulo_aulas = models.CharField(max_length=50)
    descricao_aulas = models.CharField(max_length=500)
    foto_aulas = models.ImageField (upload_to="img")
    

    def __str__(self) -> str:
        return self.titulo_aulas