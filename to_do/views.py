from django.http.response import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from .models import Activity
from .forms import ActivityForm

from django.http import JsonResponse
from django.forms.models import model_to_dict

# Create your views here.


def index(request):
    activities = Activity.objects.all()
    response = {'activities' : activities}

    form = ActivityForm()

    if request.method == 'POST':
        form = ActivityForm(request.POST)
        if form.is_valid():
            new_task = form.save() 
            return JsonResponse({'task': model_to_dict(new_task)}, status=200)
    else:
        form = ActivityForm()

    response['form'] = form

    return render(request, 'activity.html', response)
