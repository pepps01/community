from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    id= models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=50, null=True, blank=True)
    email= models.EmailField(unique=True, max_length=100)
    password =  models.CharField(max_length=250)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]

    class Meta:
        db_table="users"
        ordering= ['created_at']
        indexes=[
            models.Index(fields=["email"])
        ]

    def __str__(self):
        return self.email