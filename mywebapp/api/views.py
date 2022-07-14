from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import EventSerializer
from .models import Event


@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/events/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of events'
        },
        {
            'Endpoint': '/events/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/events/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/events/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing event with data sent in post request'
        },
        {
            'Endpoint': '/events/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting event'
        },
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
def getEvents(request):
    if request.method == 'GET':
        events = Event.objects.all().order_by('update')
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
    if request.method == 'PUT':
        print(data)
        data = request.data
        event = Event.objects.get_or_create(
            title=data['title'],
            body=data['body'],
            sheets=data['sheets']
        )

    return Response


@api_view(['GET', 'DELETE', 'PUT'])
def getEvent(request, pk):

    if request.method == 'GET':
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(event, many=False)
        return Response(serializer.data)
    if request.method == 'DELETE':
        event = Event.objects.get(id=pk)
        event.delete()
        return Response('Event was deleted')

    if request.method == 'PUT':
        data = request.data
        event = Event.objects.get(id=pk)
        serializer = EventSerializer(instance=event, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
