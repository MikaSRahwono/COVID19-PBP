from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from .models import Barang
from .forms import BarangForm


class BarangView(TemplateView):
    template_name = 'shop.html'

    def get(self, request):
        form = BarangForm()
        return render(request, self.template_name, {'form':form})

    def post(self, request):
        barang = {}
        form = BarangForm(request.POST)
        if form.is_valid():
            text = form.cleaned_data['the_choices']
            form = BarangForm()
            barang = Barang.objects.filter(pilihan=text)
        args = {'form': form, 'text': text, 'barang': barang}
        return render(request, self.template_name, args)