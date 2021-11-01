from django.db import models

# Create your models here.

class Barang(models.Model):
    PILIHAN_BARANG = (
        ('Masker', 'Masker'),
        ('Hand Sanitizer', 'Hand Sanitizer'),
        ('Obat-obatan', 'Obat-obatan'),
        ('Vitamin', 'Vitamin'),
        ('Oximetry', 'Oximetry'),
        ('Thermometer', 'Thermometer'),
        ('Face Shield', 'Face Shield'),
        ('Strap Mask', 'Strap Mask'),
    )
    pilihan = models.CharField(max_length=300, choices=PILIHAN_BARANG)
    gambar = models.TextField()
    link = models.TextField()

