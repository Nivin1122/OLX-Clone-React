from rest_framework import serializers
from .models import All_Products

class AllProductSrializers(serializers.ModelSerializer):
    class Meta:
        model = All_Products
        fields = "__all__"