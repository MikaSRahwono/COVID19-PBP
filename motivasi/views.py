from django.http.response import HttpResponse
from django.shortcuts import render
from motivasi.forms import MotivasiForm

from motivasi.models import Motivasi

# Create your views here.
def index(request):
    motivasi = Motivasi.objects.all()
    response = {'motivasi' : motivasi}
    # print(request.POST)
    form = MotivasiForm()
    if request.method == 'POST' :
        form = MotivasiForm(request.POST)
        if form.is_valid():
            form.save()
    response['form'] = form
    return render(request, 'motivasi.html', response)