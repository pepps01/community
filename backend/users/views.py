from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


@api_view(['POST'])
def register_api(request):
    """
    Handle the registration API request.
    """
    username = request.data.get('username')
    password = request.data.get('password')

    if username == "testuser" and password == "testpass":
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)