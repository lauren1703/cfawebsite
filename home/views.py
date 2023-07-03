from django.shortcuts import render, redirect
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse

def home_view(request):
    return render(request, 'home.html', {
        
    })

def about_view(request):
    return render(request, 'about.html', {
        
    })

def madrid_view(request):
    return render(request, 'madrid.html', {
        
    })

def detroit_view(request):
    return render(request, 'detroit.html', {
        
    })

def tutoring_view(request):
    return render(request, 'tutoring.html', {
        
    })

def curriculum_view(request):
    return render(request, 'curriculum.html', {
        
    })

def fundraising_view(request):
    return render(request, 'fundraising.html', {
        
    })

def technology_view(request):
    return render(request, 'technology.html', {
        
    })

def contact_view(request):
    if request.method == 'POST':
        full_name = request.POST.get('fullname')
        email_address = request.POST.get('email')
        enquiry = request.POST.get('enquiry')
        subject = 'Enquiry'
        message = full_name + '\n' + enquiry
        email_user(subject, message, email_address)
        return redirect ("home:home_view")

    return render(request, 'contact.html', {
        
    })

def faqs_view(request):
    return render(request, 'faqs.html', {
        
    })

def email_user(subject, message, email_address):
    send_mail(
        subject=subject,
        message = message,
        from_email= email_address,
        recipient_list=['general@baindemousse.com'],
        fail_silently=False,
    )