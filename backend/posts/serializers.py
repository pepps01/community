from rest_framework import serializers
from .models import Post
from groups.models import Group

from django.contrib.auth import get_user_model

User = get_user_model()

class PostSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    group = serializers.PrimaryKeyRelatedField(queryset=Group.objects.all())

    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = ['id', 'created_at']