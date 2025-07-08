from rest_framework import serializers
from groups.models import Group
from users.models import User

class GroupSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = Group
        fields = "__all__"
        read_only_fields = ['id', 'created_at']
