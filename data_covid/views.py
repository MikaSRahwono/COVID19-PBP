from django.shortcuts import render
from .models import Feedbacks
from django.contrib.auth.decorators import login_required

# Create your views here.


@login_required(login_url=" /admin/login/?next")
def index(request):
    feedback = Feedbacks.objects.all()
    response = {'feedback': feedback}
    return render(request, 'index_data_covid.html', response)
