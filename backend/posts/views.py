from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status, permissions
from posts.serializers import PostSerializer  # Assuming you have a PostSerializer defined in posts/serializers.py
from posts.models import Post  # Assuming you have a Post model defined in posts/models.py


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def create_post(request):
    post = PostSerializer(data=request.data)
    print("psts", post)
    if post.is_valid():
        post.save(user=request.user)
        return Response({"message": "Post created successfully", "data":post.data}, status=status.HTTP_201_CREATED)
    return Response(post.errors, status=status.HTTP_400_BAD_REQUEST)
 

@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def get_posts(request):
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    posts = serializer.data
    return Response(posts, status=status.HTTP_200_OK)
