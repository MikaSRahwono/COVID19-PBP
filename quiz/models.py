from django.db import models

# Create your models here.
class Assessment(models.Model):
    nama = models.CharField(max_length= 100)
    prov = models.CharField(max_length= 100)
    isCovid = models.BooleanField()

    def __str__(self):
        return str(self.nama)