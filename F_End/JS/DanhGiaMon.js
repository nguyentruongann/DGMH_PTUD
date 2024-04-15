function checkForm() {
  var arr = document.getElementsByTagName("input");
  var checkedCount = 0;

  for (var i = 0; i < 2; i++) {
    var questionCheckedCount = 0; // Đếm số ô đã được chọn trong mỗi câu hỏi
    for (var j = 0; j < 5; j++) {
      if (arr[i * 5 + j].checked) {
        // Kiểm tra checkbox đã được chọn hay không
        questionCheckedCount++;
      }
      if (questionCheckedCount > 1) {
        // Nếu có hơn một ô được chọn trong một câu hỏi, hiển thị cảnh báo
        alert("Vui lòng chọn một ô cho mỗi câu hỏi");
        return false;
      }
    }
    // Kiểm tra xem tất cả các ô của câu hỏi hiện tại đã được điền
    if (questionCheckedCount === 0) {
      alert("Vui lòng chọn một ô cho mỗi câu hỏi");
      return false;
    }
    checkedCount += questionCheckedCount; // Cập nhật tổng số ô đã được chọn
  }

    var typebox = document.getElementById("typebox");
    if (typebox.value == "") {
    alert("Vui lòng nhập nhận xét của bạn!");
    return false;
    }

    alert("Đánh giá thành công");
    window.location.href = "DanhGia.html";
  return true;
}

  var courseName = localStorage.getItem("selectedSubject");
  if (courseName) {
    document.getElementById("courseName").textContent = courseName;
  }