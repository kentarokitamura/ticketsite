from rest_framework.serializers import ModelSerializer, EmailField, CharField
from rest_framework.validators import UniqueValidator

from base.models import Event
from django.contrib.auth.models import User



class EventSerializer(ModelSerializer):
    class Meta:
        model =  Event
        fields = '__all__'

class UserSerializer(ModelSerializer):
    email = EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    username = CharField(max_length=32,  validators=[UniqueValidator(queryset=User.objects.all())])
    password = CharField(min_length=8,write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],validated_data['password'])


        return user
    class Meta:
        model = User
        fields = ('id', 'username','email', 'password')

