from django.db import models
from users.models import User
from groups.models import Group

class Post(models.Model):
    id = models.BigAutoField(primary_key=True)
    title= models.CharField(max_length=50,blank=True, default="")
    content = models.TextField(max_length=150, blank=True, default="")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table="posts"
        ordering= ['created_at']
