from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from rest_framework import viewsets
from .models import Item,Comment
from .serializers import ItemSerializer
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_protect

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if username == 'admin' and password == 'admin':  # Kiểm tra tên người dùng và mật khẩu
            return redirect('success')
        else:
            return render(request, 'login.html', {'error': 'Invalid username or password'})
    return render(request, 'login.html')

def success_view(request):
    if request.method == 'POST':
        # Truy cập dữ liệu POST từ yêu cầu
        api_data = request.POST  # Hoặc request.body nếu dữ liệu được gửi dưới dạng JSON

        # Truyền thông tin yêu cầu API vào template
        return render(request, 'success.html', {'api_data': api_data})
    else:
        # Trong trường hợp không có yêu cầu POST, trả về trang mặc định
        return render(request, 'success.html')

@csrf_protect
@require_http_methods(["POST"])
def add_comment(request):
    ma_mon_hoc = request.POST.get('ma_mon_hoc')
    binh_luan = request.POST.get('binh_luan')
    
    if not ma_mon_hoc or not binh_luan:
        return JsonResponse({'status': 'error', 'msg': 'Thiếu dữ liệu cần thiết.'}, status=400)

    try:
        item = Item.objects.get(ma_mon_hoc=ma_mon_hoc)
        new_comment = Comment(item=item, text=binh_luan)
        new_comment.save()
        return JsonResponse({'status': 'success', 'msg': 'Bình luận đã được thêm'})
    except Item.DoesNotExist:
        return JsonResponse({'status': 'error', 'msg': 'Mã môn học không tồn tại'}, status=404)
    