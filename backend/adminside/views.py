from django.shortcuts import render
from rest_framework.decorators import api_view
from .serializers import AllProductSrializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .models import All_Products

# Create your views here.
@api_view(['POST'])
def add_products(request):
    if request.method == 'POST':
        print(request.data)
        serializer = AllProductSrializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"product added"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

