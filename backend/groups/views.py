from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from groups.serializers import GroupSerializer 

# Create your views here.
@api_view(['POST'])
def create_group(request):
    """
    Handle the creation of a new group.
    """
    group_serializer = GroupSerializer(data=request.data)
    if group_serializer.is_valid():
        group_serializer.save()
        return Response({"message": "Group created successfully"}, status=status.HTTP_201_CREATED)
    return Response(group_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_groups(request):
    """
    Handle the retrieval of all groups.
    """
    # Implement your logic to retrieve groups here
    groups = [
        {"id": 1, "group_name": "First Group", "description": "This is the first group."},
        {"id": 2, "group_name": "Second Group", "description": "This is the second group."}
    ]
    return Response(groups, status=status.HTTP_200_OK)
