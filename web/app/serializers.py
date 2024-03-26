from rest_framework import serializers
from .models import Item, Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['text','created_at']  # Bao gồm trường timestamp để biết thời gian tạo bình luận


class ItemSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = ['ma_mon_hoc', 'ten_mon_hoc', 'so_TC', 'giang_vien', 'so_danh_gia', 'comments']
