from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['POST'])
def create_group(request):
    """
    Handle the creation of a new group.
    """
    group_name = request.data.get('group_name')
    description = request.data.get('description')
    # Implement your group creation logic here
    return Response({"message": "Group created successfully"}, status=status.HTTP_201_CREATED)  

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
