from django.db import models
from users.models import User


class Group(models.Model):
    id = models.BigAutoField(primary_key=True)
    name= models.CharField(max_length=50)
    description = models.TextField(max_length=150, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table="groups"
        ordering= ['created_at']
