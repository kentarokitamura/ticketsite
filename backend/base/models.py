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
    



class Seat(models.Model):
    STATUS =(
    ('CANCELED','Canceled'),
    ('CONFIRMED','Confirmed'),
    ('BOOKED','Booked'),
    )
    seat_no = models.PositiveSmallIntegerField(blank=False, null=False)
    row_no = models.PositiveSmallIntegerField(blank=False, null=False)
    seat_name = models.CharField(max_length=9)
    booked_by = models.ForeignKey(User,on_delete=models.CASCADE)
    seat_status = models.CharField(max_length=20, choices=STATUS,default='Confirmed')
    number_of_seats= models.IntegerField()
    event  = models.ManyToManyField(Event)
    

class Hall (models.Model):
    hall_id = models.IntegerField()
    hall_name =models.CharField(max_length=40)
    number_of_seats = models.IntegerField()