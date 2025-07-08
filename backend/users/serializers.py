from rest_framework import serializers
from users.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User  # Assuming you have a User model in users app
        fields = ['id', 'email', 'name']  # Adjust fields as per your User model
        read_only_fields = ['id']  # Make id read-only