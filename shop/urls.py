from django.urls import path
from .views import *

urlpatterns = [
    path('', BarangView.as_view(), name='shop'),
]