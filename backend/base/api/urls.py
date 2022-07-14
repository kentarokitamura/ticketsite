from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('events/',views.getEvents),
    path('events/<str:pk>',views.getEvent),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('signup/',views.registerUser)
]
