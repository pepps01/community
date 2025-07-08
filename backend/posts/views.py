from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['POST'])
def create_post(request):
    """
    Handle the creation of a new post.
    """
    title = request.data.get('title')
    content = request.data.get('content')
    # Implement your post creation logic here
    return Response({"message": "Post created successfully"}, status=status.HTTP_201_CREATED)   

@api_view(['GET'])
def get_posts(request):
    """
    Handle the retrieval of all posts.
    """
    # Implement your logic to retrieve posts here
    posts = [
        {"id": 1, "title": "First Post", "content": "This is the content of the first post."},
        {"id": 2, "title": "Second Post", "content": "This is the content of the second post."}
    ]
    return Response(posts, status=status.HTTP_200_OK)
