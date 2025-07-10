from rest_framework import serializers 
from django.contrib.auth.models import User

class LoginSerializer(serializers.Serializer):
    """
    Serializer for handling user login.
    """
    email = serializers.EmailField(max_length=150, required=True)
    password = serializers.CharField(write_only=True, required=True)

    def validate(self, data):
        """
        Validate the login credentials.
        """
        # Here you can add custom validation logic if needed
        return data