from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from .serializer import EventSerializer, UserSerializer
from base.models import Event





class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/reflesh'
    ]
    return Response(routes)

@api_view(['GET'])
#@permission_classes([IsAuthenticatedOrReadOnly])
def getEvents(request):

    #user = request.user
    #events = user.event_set.all()
    events = Event.objects.all()
    serializer = EventSerializer(events,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getEvent(request,pk):
    event = Event.objects.get(id=pk)
    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
        user = serializer.save()
        if user:
            return Response(serializer.data)
    return Response(serializer.error)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createEvent(request):
    data = request.data
    print(request.data)
    event = Event.objects.create(
        title=data['title'],
        body=data['body'],
        user = request.user ,
        owner=data['owner'],
        sheet = data['sheets'],
        cash = data['cash'],
        img = data['img'],
        loc =data['loc'],
        schedule = data['date']
    )
    serializer = EventSerializer(event, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateEvent(request,pk):
    data = request.data
    user = request.user
    event = user.event_set.get(id=pk)
    
    serializer = EventSerializer(instance=event,data=data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserEvent(request):
    user = request.user
    events = user.event_set.all()
    serializer = EventSerializer(events,many=True)
    
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def buyTicket(request,pk):
    user = request.user
    data = request.data
    if user:
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(instance=event, data=data)
        
        if serializer.is_valid():
           
            serializer.save()
        
        return Response(serializer.data)


