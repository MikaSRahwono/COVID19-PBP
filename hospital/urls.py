from django.urls import path
from .views import index, results, search_history

urlpatterns = [
    path('', index, name='index'),
    path('results', results, name='results'),
    path('history', search_history, name='search_history'),
]
