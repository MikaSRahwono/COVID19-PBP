from django import forms
from motivasi.models import Motivasi

class MotivasiForm(forms.ModelForm):
    class Meta:
        model = Motivasi
        fields = '__all__'