from rest_framework import serializers
from .models import Post
from groups.models import Group

from django.contrib.auth import get_user_model

User = get_user_model()

class PostSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source='user.name', read_only=True)

    class Meta:
        model = Post
        fields = ["id", "title", "content","group","user_name","created_at"]
        read_only_fields = ['id', 'created_at', 'user_name']
        # ordering=['created_at']