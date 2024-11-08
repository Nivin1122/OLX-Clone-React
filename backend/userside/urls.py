from django.urls import path,include
from . import views


urlpatterns = [
    path('prods/',views.AllproductsListView.as_view(),name='product-list')
]


