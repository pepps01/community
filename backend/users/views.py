from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserSerializer  # Assuming you have a UserSerializer defined in users/serializers.py

@api_view(['POST'])
def register_api(request):
    user = UserSerializer(data=request.data)
    if user.is_valid():
        user.save()
        return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)