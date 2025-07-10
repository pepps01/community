from django.contrib import admin
from django.urls import path
from posts.views import create_post, get_posts
from groups.views import create_group, get_groups
from authe.views import login_user
from users.views import register_api
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
   path('admin/', admin.site.urls),
   path('api/posts', get_posts, name='get_posts'),
   path('api/posts/create', create_post, name='create_post'),
   path('api/groups/', get_groups, name='get_groups'),
   path('api/groups/create', create_group, name='create_group'),
   path('api/auth/login', login_user, name='login'),
   path('api/users/register', register_api, name='register'),
   path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
   path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
