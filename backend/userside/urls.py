from django.urls import path,include
from . import views


urlpatterns = [
    path('prods/',views.AllproductsListView.as_view(),name='all_prods'),
    path('prods/<int:p_id>/', views.product_details, name='product_details'),
]