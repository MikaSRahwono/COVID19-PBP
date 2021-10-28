from django.urls import path
from .views import index
from .views import hasil

urlpatterns = [
    path('', index, name='index'),
    path('hasil', hasil, name = 'hasil')
]
