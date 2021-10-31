from django.db import models

# Create your models here.


class Feedbacks(models.Model):
    nama = models.CharField(max_length=30)
    provinsi = models.CharField(max_length=30)
    subject = models.CharField(max_length=30)
    message = models.TextField(max_length=50)

    def __str__(self):
        return self.to
