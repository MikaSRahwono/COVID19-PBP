from django.db.models import fields
from .models import Location
from django import forms

class LocationForm(forms.ModelForm):
    class Meta:
        model = Location
        fields = '__all__'