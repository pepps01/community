from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['name', 'email', 'password']
        read_only_fields = ['id']  
        extra_kwargs = {
            'password': {'write_only': True}
        }


    def create(self, validated_data):
        """
        Create a new user instance with the provided validated data.
        """
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    