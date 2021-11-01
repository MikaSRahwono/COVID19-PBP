from django import forms
from django.db import models
from django.forms import fields
from .models import Assessment

class AssessmentForm(forms.ModelForm):
    class Meta: 
        model = Assessment
        fields = ['nama', 'prov', 'isCovid']
        
