from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from authe.serializers import LoginSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework import permissions
# from users.models import User  # Assuming you have a User model defined in users/models.py
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken


@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_api(request):
    from django.shortcuts import get_object_or_404
    user = get_object_or_404(User, email=request.data.get('email'))
    print("User:", user)

    if not user.check_password(request.data.get('password')):
        return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        serializer = LoginSerializer(instance=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)
    return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')

    user = authenticate(request, email=email, password=password)
    print("Authenticated User:", user)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)