const courseReview = [
  {
    stt: 1,
    idCourse: 4203003395,
    name: "Logic Học",
    tc: 3,
    name_teacher: "Nguyễn Thị Thu Hà",
    review: 12,
  },
  {
    stt: 2,
    idCourse: 4203014064,
    name: "Đại số tuyến tính",
    tc: 3,
    name_teacher: "Trịnh Thanh Sơn",
    review: 90,
  },
  {
    stt: 3,
    idCourse: 4203015253,
    name: "Tiếng Anh 1",
    tc: 3,
    name_teacher: "Nguyễn Thị Hà",
    review: 31,
  },
  {
    stt: 4,
    idCourse: 4203000901,
    name: "Cấu Trúc Rời Rạc",
    tc: 3,
    name_teacher: "Trịnh Thanh Sơn",
    review: 34,
  },
  {
    stt: 5,
    idCourse: 4203014122,
    name: "Xử Lý Ảnh",
    tc: 2,
    name_teacher: "Lê Phúc Lữ",
    review: 60,
  },
  {
    stt: 6,
    idCourse: 4203002009,
    name: "Nhập Môn Tin Học",
    tc: 4,
    name_teacher: "Nguyễn Chí Hiếu",
    review: 49,
  },
  {
    stt: 7,
    idCourse: 4203003192,
    name: "Kỹ Năng Làm Việc Nhóm",
    tc: 3,
    name_teacher: "Nguyễn Thị Hiền",
    review: 43,
  },
  {
    stt: 8,
    idCourse: 4203014164,
    name: "Triết Học Mác-Lênin",
    tc: 2,
    name_teacher: "Huỳnh Ngọc Bích",
    review: 33,
  },
  {
    stt: 9,
    idCourse: 4203003848,
    name: "Nhập Môn Lập Trình",
    tc: 3,
    name_teacher: "Nguyễn Hữu Tìnhn",
    review: 23,
  },
  {
    stt: 10,
    idCourse: 4203002137,
    name: "Hệ Thống Máy Tính",
    tc: 4,
    name_teacher: "Lê Thị Thủy",
    review: 98,
  },
  {
    stt: 11,
    idCourse: 4203000941,
    name: "Kỹ Thuật Lập Trình",
    tc: 3,
    name_teacher: "Nguyễn Hữu Tình",
    review: 102,
  },
  {
    stt: 12,
    idCourse: 4203000942,
    name: "Cấu Trúc Dữ Liệu Và Giải Thuật",
    tc: 4,
    name_teacher: "Trương Văn Thông",
    review: 68,
  },
  {
    stt: 13,
    idCourse: 4203001146,
    name: "Hệ cơ sở dữ liệu",
    tc: 4,
    name_teacher: "Phan Thị Bảo Trân",
    review: 63,
  },
  {
    stt: 14,
    idCourse: 4203003197,
    name: "Kỹ năng xây dựng kế hoạch",
    tc: 3,
    name_teacher: "Trần Thị Hiền",
    review: 23,
  },
  {
    stt: 15,
    idCourse: 4203003259,
    name: "Toán cao cấp 1",
    tc: 2,
    name_teacher: "Nguyễn Thị Thu Hà",
    review: 26,
  },
  {
    stt: 16,
    idCourse: 4203014104,
    name: "Nhập môn Khoa học Dữ liệu",
    tc: 3,
    name_teacher: "Bùi Thanh Hùng",
    review: 29,
  },
  {
    stt: 17,
    idCourse: 4203002422,
    name: "Pháp luật đại cương",
    tc: 2,
    name_teacher: "Trần Thị Ngọc Hết",
    review: 95,
  },
  {
    stt: 18,
    idCourse: 4203003198,
    name: "Phương pháp luận nghiên cứu khoa học",
    tc: 2,
    name_teacher: "Lý Thanh Bình",
    review: 59,
  },
  {
    stt: 19,
    idCourse: 4203001058,
    name: "Mạng máy tính",
    tc: 4,
    name_teacher: "Lê Thị Thủy",
    review: 57,
  },
  {
    stt: 20,
    idCourse: 4203014061,
    name: "Xác suất trong Khoa học Dữ liệu",
    tc: 3,
    name_teacher: "Lê Phúc Lữ",
    review: 70,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.getElementById("courseTableBody");

  courseReview.forEach((course) => {
    const row = document.createElement("tr");

    // Tạo một cột cho mỗi thuộc tính trong đối tượng
    row.innerHTML = `
            <td>${course.stt}</td>
            <td>${course.idCourse}</td>
            <td class="subjectName" style="cursor: pointer;">${course.name}</td>
            <td>${course.tc}</td>
            <td>${course.name_teacher}</td>
            <td>${course.review}</td>
        `;

    // Thêm hàng vào tbody
    tableBody.appendChild(row);
  });
  var subjectNames = document.querySelectorAll(".subjectName");
  subjectNames.forEach(function (subject) {
    subject.addEventListener("click", function () {
      localStorage.setItem("selectedSubject", subject.textContent);
      window.location.href = "DanhGiaMon.html";
    });
  });
});
