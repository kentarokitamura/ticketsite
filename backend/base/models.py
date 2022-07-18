from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Event(models.Model):
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField(max_length=1000, blank=True,null=True)
    title = models.CharField(max_length=40,null=True)
    owner = models.CharField(max_length=20,  default='guest')
    sheet = models.IntegerField(default=0)
    cash = models.IntegerField(default=0)
    img = models.CharField(max_length=200,null=True)
    loc = models.CharField(max_length=40,null=True)
    
    
    schedule = models.DateField()
    
    

