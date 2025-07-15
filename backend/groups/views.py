from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from groups.serializers import GroupSerializer 
from groups.models import Group  # Assuming you have a Group model defined in groups/models.py
from rest_framework import permissions


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_group(request):
    group_serializer = GroupSerializer(data=request.data)
    if group_serializer.is_valid():
        group_serializer.save(user=request.user)
        return Response({"message": "Group created successfully", "data": group_serializer.data}, status=status.HTTP_201_CREATED)
    return Response(group_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_groups(request):
    groups =  Group.objects.all()
    serializer = GroupSerializer(groups, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
