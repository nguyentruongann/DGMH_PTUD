from django.urls import path,include
from app import views
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login_view, name='login'),
    path('success/', views.success_view, name='success'),
    path('add_comment/', views.add_comment, name='add_comment'),
    path('api/', include('app.urls')),
]
