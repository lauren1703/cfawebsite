from django.urls import path

from . import views

app_name = 'home'

urlpatterns = [
    path('', views.home_view, name='home_view'),
    path('about', views.about_view, name='about_view'),
    path('madrid', views.madrid_view, name='madrid_view'),
    path('detroit', views.detroit_view, name='detroit_view'),
    path('tutoring', views.tutoring_view, name='tutoring_view'),
    path('curriculum', views.curriculum_view, name='curriculum_view'),
    path('fundraising', views.fundraising_view, name='fundraising_view'),
    path('technology', views.technology_view, name='technology_view'),
    path('contact', views.contact_view, name='contact_view'),
    path('faqs', views.faqs_view, name='faqs_view'),
]