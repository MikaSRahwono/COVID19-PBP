from django.shortcuts import render
from .models import Feedbacks
from quiz.models import Assessment
from django.contrib.auth.decorators import login_required

# Create your views here.


@login_required(login_url="/admin/login")
def index(request):
    assessment = Assessment.objects.all()

    last_prov = None
    for i in assessment:
        last_prov = i.prov

    print(last_prov)
    response = {"last_prov": last_prov}
    return render(request, 'index_data_covid.html', response)
