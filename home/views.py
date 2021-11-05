from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages


# Create your views here.
def index(request):
    if request.is_ajax():
        username = request.user.username
        if (username):
            return JsonResponse({"message": "Welcome back, " + request.user.username + "!"})
        else:
            return JsonResponse({"message": " "})
    # if username:
    #     messages.info(request, username)
    return render(request, 'index.html')


def register(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        username = request.POST.get("username")
        password1 = request.POST.get("password1")
        password2 = request.POST.get("password2")
        if not (username and password1 and password2):
            messages.error(request, "Please fill all fields")
        elif password1 != password2:
            messages.error(request, "Password mismatch")
        elif len(username) > 150:
            messages.error(request, "Username too long")
        elif len(password1) < 8:
            messages.error(request, "Short password")
        elif form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("../")
        else:
            messages.error(request, "Weak password and/or username taken")
    form = UserCreationForm()
    return render(request, 'register.html', {'form': form})



def log_in(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            print("success")
            return redirect("../")
        else:
            messages.error(request, "invalid login information")
    form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})
