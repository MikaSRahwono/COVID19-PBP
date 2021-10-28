from django.shortcuts import render
from .apis import get_hospital, get_location

# Create your views here.


def index(request):
    alamat = "Vila Nusa Indah 2"
    data = get_hospital(alamat)
    response = {'hospitals':data}
    # return HttpResponse(business_list, content_type="application/json")
    return render(request, 'hospital_index.html', response)

# def index(request):
#     response = {'latlon':get_location}
#     return render(request, 'test.html', response)