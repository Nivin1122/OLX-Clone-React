from django.shortcuts import render
from rest_framework import generics
from adminside.models import All_Products
from adminside.serializers import AllProductSrializers
from django.shortcuts import get_object_or_404
from django.http import JsonResponse


# Create your views here.
class AllproductsListView(generics.ListCreateAPIView):
    queryset = All_Products.objects.all()
    serializer_class = AllProductSrializers


def product_details(request,p_id):
    product = get_object_or_404(All_Products, id=p_id)  
    data = {
        "id" : product.id,
        "product_name" : product.product_name,
        "price" : product.price,
        "image_url" : product.images.url if product.images else None,

    }
    return JsonResponse(data)