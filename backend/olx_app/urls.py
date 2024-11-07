from django.urls import path,include
from . import views


urlpatterns = [
    path('signup/',views.SignupView.as_view(), name='signup'),
    path('login/',views.Login_View().as_view(), name='login')
]
