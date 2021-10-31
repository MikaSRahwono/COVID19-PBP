from django.urls import path
from .views import index, register, log_in
from django.urls import path, include

urlpatterns = [
    path('', index, name='index'),
    path('register/', register, name='register'),
    path('login/', log_in, name="login"),
]
