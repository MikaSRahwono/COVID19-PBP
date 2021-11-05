from django import forms
from django.db import models
from django.forms import fields
from .models import Activity


class ActivityForm(forms.ModelForm):
    class Meta:
        model = Activity
        fields = "__all__"


        widgets = {
            'activity':forms.TextInput(attrs={'class': 'form-control'})
        }