from rest_framework import serializers
from groups.models import Group
from django.contrib.auth import get_user_model

User = get_user_model()
class GroupSerializer(serializers.ModelSerializer):
    user_name = serializers.PrimaryKeyRelatedField(source='user.name', read_only=True)

    class Meta:
        model = Group
        fields = ["id", "name", "description", "user_name", "created_at"]
        read_only_fields = ['id', 'created_at', 'user_name']

    def get_created_time(self, obj):
        return obj.created_at.strftime('%Y-%m-%d')
    

    #  read_only_fields = ['id', 'created_at', 'user', 'user_name']