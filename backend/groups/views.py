from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from groups.serializers import GroupSerializer 
from groups.models import Group  # Assuming you have a Group model defined in groups/models.py
from rest_framework import permissions
# Create your views here.


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_group(request):
    data = request.data.copy()
    data['user'] = request.user.id
    group_serializer = GroupSerializer(data=data)
    if group_serializer.is_valid():
        group_serializer.save()
        return Response({"message": "Group created successfully"}, status=status.HTTP_201_CREATED)
    return Response(group_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_groups(request):
    # """
    # Handle the retrieval of all groups.
    # """
    # # Implement your logic to retrieve groups here
    # groups = [
    #     {"id": 1, "group_name": "First Group", "description": "This is the first group."},
    #     {"id": 2, "group_name": "Second Group", "description": "This is the second group."}
    # ]
    
    groups = Group.objects.all()
    serializer = GroupSerializer(groups, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
