from django.shortcuts import render


# Create your views here.
def index(request):
    response = {'project': 'Covid19 Panic Button Project'}
    return render(request, 'index.html', response)




