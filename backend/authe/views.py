from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework import permissions
# from users.models import User  # Assuming you have a User model defined in users/models.py
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from users.serializers import UserSerializer

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, email=email, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        serialized_user = UserSerializer(user).data
        print("user information", serialized_user)

        import json
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': serialized_user
        })
    return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)