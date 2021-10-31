from django.db import models

# Create your models here.
class Motivasi(models.Model):
    # sender = models.CharField(max_length=30)
    message = models.TextField()