from django.shortcuts import render
from rest_framework import generics
from adminside.models import All_Products
from adminside.serializers import AllProductSrializers

# Create your views here.
class AllproductsListView(generics.ListCreateAPIView):
    queryset = All_Products.objects.all()
    serializer_class = AllProductSrializers