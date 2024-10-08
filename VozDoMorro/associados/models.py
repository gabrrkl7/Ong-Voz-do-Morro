from django.db import models

# Create your models here.
from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone


class Associados (models.Model):
    """ 
    Cria a tabela atividades
    """
    id_associados = models.AutoField (primary_key=True)
    nome_associados = models.CharField(max_length=50)
    foto_associados = models.ImageField (upload_to="img")

    

    def __str__(self) -> str:
        return self.nome_associados