from django.db import models

# Create your models here.
class All_Products(models.Model):
    images = models.ImageField(upload_to="images", null=True)
    product_name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)

    def __str__(self):
        return self.product_name