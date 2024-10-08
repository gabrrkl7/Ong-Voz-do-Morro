from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),    
    path('eventos/', include('eventos.urls')),  # Certifique-se de incluir as URLs do aplicativo eventos
    path('', include('index.urls')),
    path('trabalhos/', include('trabalhos.urls')),
    path('associados/', include('associados.urls')),
    path('aulas/', include('aulas.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)