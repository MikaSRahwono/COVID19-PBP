from django import forms

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
class BarangForm(forms.Form):
    the_choices = forms.CharField(label='Barang apa yang ingin Anda beli?', widget=forms.Select(choices=PILIHAN_BARANG))