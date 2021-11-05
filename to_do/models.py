from django.db import models

# Create your models here.
# Post dalam
class Activity(models.Model):
    activity = models.CharField(max_length=200)

