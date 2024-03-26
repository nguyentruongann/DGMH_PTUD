from django.db import models
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.utils import timezone
class Item(models.Model):
    ma_mon_hoc = models.CharField(max_length=10, primary_key=True, default='000000')
    ten_mon_hoc = models.CharField(max_length=50, default='Môn học mới')
    so_TC = models.IntegerField(default=0)
    giang_vien = models.CharField(max_length=100, default='Giảng viên mới')
    so_danh_gia = models.IntegerField(default=0)
    def update_so_danh_gia(self):
        self.so_danh_gia = self.comments.count()
        self.save()

class Comment(models.Model):
    item = models.ForeignKey(Item, related_name='comments', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    text = models.TextField()
@receiver(post_save, sender=Comment)
def update_so_danh_gia_on_save(sender, instance, **kwargs):
    instance.item.update_so_danh_gia()

@receiver(post_delete, sender=Comment)
def update_so_danh_gia_on_delete(sender, instance, **kwargs):
    instance.item.update_so_danh_gia()
