import json
from channels.generic.websocket import WebsocketConsumer
from .models import Event
from .serializer import EventSerializer
from asgiref.sync import async_to_sync


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.room_group_name = 'test'
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()
        #allEvents = Event.objects.all()
        #serializer = EventSerializer(allEvents, many=True)
        # self.send(text_data=json.dumps(
        #    serializer.data
        # ))

    def receive(self, text_data):

        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        dataType = text_data_json['type']
        title = text_data_json['title']
        sheets = text_data_json['sheets']
        #print('Message:', message, 'type: ', dataType)

        if dataType == 'chat':
            Event.objects.get_or_create(
                title=title,
                body=message,
                sheets=sheets
            )

            allEvents = Event.objects.all()
            serializer = EventSerializer(allEvents, many=True)
            async_to_sync(self.channel_layer.group_send)(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'data': serializer.data
                }

            )

    def chat_message(self, event):
        allEvents = Event.objects.all()
        serializer = EventSerializer(allEvents, many=True)

        self.send(text_data=json.dumps(serializer.data))
