from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from .serializer import EventSerializer, UserSerializer, SeatSerializer
from base.models import Event, Seat





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

@api_view(['GET'])
def getSeat(request,pk):
    event = Event.objects.get(id=pk)
    seat = event.seat_set.all()
    serializer = SeatSerializer(seat, many=True)
    
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
    createSeat(event=event, data=data,user=request.user)

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
    print(data)
    seatid = data['id']

    if user:
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(instance=event, data=data)
        seat = Seat.objects.get(id=seatid)
        seatSerializer = SeatSerializer(instance=seat,data=data)
        print(data)
        print(seatSerializer)
        if serializer.is_valid():
            serializer.save()
        if seatSerializer.is_valid():
            print('hello')
            seatSerializer.save()
        print(seatSerializer.error_messages)
        print(seatSerializer.errors)
        
        return Response(serializer.data)



def createSeat(event,data,user):
    col = 12
    
    for row in range(1,int(data['sheets'])//col+1):
        for i in range(1,13):
            seat = Seat.objects.create(
                seat_no = i,
                row_no = row,
                seat_name = str(row)+":" + str(i),
                booked_by = user,
                number_of_seats= int(data['sheets']),
    
    
            )
            seat.event.add(event)
            serializer = SeatSerializer(seat, many=False)
    if int(data['sheets'])%12 != 0:

        for i in range(1,int(data['sheets'])%12):
            
            seat = Seat.objects.create(
                seat_no = i*row,
                row_no = int(data['sheets'])//12+1,
                seat_name = str(row)+":" + str(i),
                booked_by = user,
                number_of_seats= int(data['sheets']),
                event  = event,
    
            )
            serializer = SeatSerializer(seat, many=False)
    return Response(serializer.data)





