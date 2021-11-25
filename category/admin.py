from django.contrib import admin

# Register your models here.
from .models import Category,SubCategory

# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('category_name',)}
    list_display = ('category_name', 'slug')

class SubCategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('subcategory_name',)}
    list_display = ('subcategory_name', 'slug','category')

admin.site.register(Category,CategoryAdmin)
admin.site.register(SubCategory,SubCategoryAdmin)