from django.urls import path,include
from . import views


urlpatterns = [
    path('add_products/',views.add_products, name='add_products'),
    path('prods/',views.AllproductsListView.as_view(),name='product-list')
]