from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def login_api(request):
    """
    Handle the login API request.
    """
    username = request.data.get('username')
    password = request.data.get('password')
    # Implement your authentication logic here
    return Response({"message": "Login successful"})