from django.http import response
from django.http.response import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
import json

from hospital.forms import LocationForm
from hospital.models import Location
from .apis import get_details, get_hospital

# Create your views here.

def index(request):
    form = LocationForm(request.POST or None)
    response = {'form': form}
    if request.is_ajax():
        if (form.is_valid and request.method == 'POST'):
            form.save()
            return JsonResponse({})
            # HttpResponseRedirect('/hospital/results')
    return render(request, 'location_forms.html', response)

def results(request):
    alamat = Location.objects.order_by('-id')[0]
    data = get_details(alamat.location)
    response = {'data':data}
    return render(request, 'hospital_results.html', response)

def result(request):
    response = {'data':'data'}
    return render(request, 'result.html', response)

def search_history(request):
    alamat = Location.objects.all().values()
    response = {'shistories':alamat}
    # return HttpResponse(business_list, content_type="application/json")
    return render(request, 'search_history.html', response)