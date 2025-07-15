from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserSerializer
from rest_framework import permissions

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_api(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)