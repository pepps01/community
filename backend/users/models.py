from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, BaseUserManager, PermissionsMixin


class CustomUserManager(BaseUserManager):
    def get_by_natural_key(self, email):
        return self.get(email=email)

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user


class CustomUser(AbstractBaseUser):
    id= models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=50, null=True, blank=True)
    email= models.EmailField(unique=True, max_length=100)
    password =  models.CharField(max_length=250)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager() 

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
