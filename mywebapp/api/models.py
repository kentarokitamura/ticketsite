from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    name = models.CharField(max_length=200,null=True)
    email = models.EmailField(unique=True, null=True)
    avatar = models.ImageField(null=True, default="avatar.svg")
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Event(models.Model):
    title = models.CharField(max_length=64, verbose_name="title")
    body = models.TextField(verbose_name="body", null=True, blank=True)
    created = models.DateField(auto_now_add=True)
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    
    update = models.DateField(auto_now=True)
    sheets = models.PositiveIntegerField(verbose_name="sheets")
    participants = models.ManyToManyField(
        User, related_name='participants', blank=True
    )
    class Meta:
        ordering = ['update', 'created']

    def __str__(self):
        return self.title



# class Reserved(models.Model):
#     event = models.ForeignKey(
#         Event, on_delete=models.CASCADE, verbose_name="event", related_name="reserved")
#     custumer = models.CharField(max_length=33, verbose_name="customer")
#     created = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.event.title
