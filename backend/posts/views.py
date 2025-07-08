from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from posts.serializers import PostSerializer  # Assuming you have a PostSerializer defined in posts/serializers.py
from posts.models import Post  # Assuming you have a Post model defined in posts/models.py


@api_view(['POST'])
def create_post(request):
    post = PostSerializer(data=request.data)
    if post.is_valid():
        post.save()
        return Response({"message": "Post created successfully"}, status=status.HTTP_201_CREATED)
    return Response(post.errors, status=status.HTTP_400_BAD_REQUEST)
 
 
@api_view(['GET'])
def get_posts(request):
    # """
    # Handle the retrieval of all posts.
    # """
    # # Implement your logic to retrieve posts here
    # posts = [
    #     {"id": 1, "title": "First Post", "content": "This is the content of the first post."},
    #     {"id": 2, "title": "Second Post", "content": "This is the content of the second post."}
    # ]
    posts = Post.objects.all()
    serializer = PostSerializer(posts, many=True)
    posts = serializer.data
    return Response(posts, status=status.HTTP_200_OK)
