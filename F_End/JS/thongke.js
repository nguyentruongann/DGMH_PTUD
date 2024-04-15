var subjectsData = [
  { courseId: 4203003395, name: "Logic Học" },
  { courseId: 4203014064, name: "Đại Số Tuyến Tính" },
  { courseId: 4203015253, name: "Tiếng Anh 1" },
  { courseId: 4203000901, name: "Cấu Trúc Rời Rạc" },
  { courseId: 4203014122, name: "Xử Lý Ảnh" },
  { courseId: 4203002009, name: "Nhập Môn Tin Học" },
  { courseId: 4203003192, name: "Kỹ Năng Làm Việc Nhóm" },
  { courseId: 4203014164, name: "Triết Học Mác-Lênin" },
  { courseId: 4203003848, name: "Nhập Môn Lập Trình" },
  { courseId: 4203002137, name: "Hệ Thống Máy Tính" },
  { courseId: 4203000941, name: "Kỹ Thuật Lập Trình" },
  {
    courseId: 4203000942,
    name: "Cấu Trúc Dữ Liệu Và Giải Thuật",
  },
  { courseId: 4203001146, name: "Hệ cơ sở dữ liệu" },
  { courseId: 4203003197, name: "Kỹ năng xây dựng kế hoạch" },
  { courseId: 4203003259, name: "Toán cao cấp 1" },
  { courseId: 4203014104, name: "Nhập môn Khoa học Dữ liệu" },
  { courseId: 4203002422, name: "Pháp luật đại cương" },
  {
    courseId: 4203003198,
    name: "Phương pháp luận nghiên cứu khoa học",
  },
  { courseId: 4203001058, name: "Mạng máy tính" },
  {
    courseId: 4203014061,
    name: "Xác suất trong Khoa học Dữ liệu",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Lấy thẻ select
  var selectElement = document.getElementById("subject-select");

  // Duyệt qua mảng dữ liệu môn học và thêm option cho mỗi môn
  subjectsData.forEach(function (subject) {
    var option = document.createElement("option");
    option.value = subject.courseId;
    option.text = subject.name;
    selectElement.appendChild(option);
  });
});

// Dữ liệu đánh giá môn học
const courseReviews = [
  {
    courseId: 4203003395,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn An",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn Bi",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 3,
        mssv: 21097612,
        name: "Nguyễn Văn Chí",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 4,
        mssv: 21097612,
        name: "Nguyễn Văn Duy",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 5,
        mssv: 21097612,
        name: "Nguyễn Văn Công",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 6,
        mssv: 21097612,
        name: "Nguyễn Văn Năm",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 7,
        mssv: 21097612,
        name: "Nguyễn Văn Hoài Nam",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 8,
        mssv: 21097612,
        name: "Nguyễn Văn Nam",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 9,
        mssv: 21097612,
        name: "Nguyễn Bùi Tuấn Kiệt",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 10,
        mssv: 21097612,
        name: "Nguyễn Đình Chính",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 11,
        mssv: 21097612,
        name: "Nguyễn Quý Dương",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 12,
        mssv: 21097612,
        name: "Nguyễn Quyết Thắng",
        ratings: [
          4,
          3,
          5,
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius placeat, quis quo beatae id accusamus recusandae quos dolorem! Hic cumque nam aperiam, excepturi ipsum vitae quia ducimus fugiat dignissimos dolores!",
        ],
      },
    ],
  },
  {
    courseId: 4203014064,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn A",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn B",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 3,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 4,
        mssv: 21097612,
        name: "Nguyễn Văn D",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 5,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203015253,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn A",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn B",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 3,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 4,
        mssv: 21097612,
        name: "Nguyễn Văn D",
        ratings: [4, 3, 5, "......."],
      },
      {
        id: 5,
        mssv: 21097612,
        name: "Nguyễn Văn E",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203000901,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203014122,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203002009,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203003192,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203014164,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203003848,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203002137,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203000941,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203000942,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203001146,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203003197,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203003259,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203014104,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203002422,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203003198,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203001058,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
  {
    courseId: 4203014061,
    reviews: [
      {
        id: 1,
        mssv: 21097611,
        name: "Nguyễn Văn B",
        ratings: [1, 1, 4, "......."],
      },
      {
        id: 2,
        mssv: 21097612,
        name: "Nguyễn Văn C",
        ratings: [4, 3, 5, "......."],
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Lấy thẻ select
  var selectElement = document.getElementById("subject-select");

  // Duyệt qua mảng dữ liệu môn học và thêm option cho mỗi môn
  subjectsData.forEach(function (subject) {
    var option = document.createElement("option");
    option.value = subject.id;
    option.text = subject.name;
    selectElement.appendChild(option);
  });

  // Lắng nghe sự kiện khi người dùng chọn một môn học
  selectElement.addEventListener("change", function () {
    const selectedCourseId = parseInt(this.value);

    // Lưu trữ courseId của môn học được chọn vào localStorage
    localStorage.setItem("selectedCourseId", selectedCourseId);

    // Chuyển hướng sang trang thống kê của môn học đó
    window.location.href = "ThongKe.html";
  });

  // Kiểm tra xem có courseId trong localStorage không
  var selectedCourseId = localStorage.getItem("selectedCourseId");
  if (selectedCourseId) {
    // Thiết lập giá trị của selectElement với courseId đã lưu
    selectElement.value = selectedCourseId;
    const selectedCourse = courseReviews.find(
      (course) => course.courseId === parseInt(selectedCourseId)
    );
    if (selectedCourse) {
      displayReviews(selectedCourse.reviews);
    } else {
      alert("Không tìm thấy dữ liệu đánh giá cho môn học này.");
    }

    // Xóa courseId khỏi localStorage sau khi đã sử dụng
    localStorage.removeItem("selectedCourseId");
  }
});

function displayReviews(reviews) {
  const reviewTableBody = document.querySelector("#review-table tbody");
  reviewTableBody.innerHTML = "";
  reviews.forEach((review, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${review.mssv}</td>
      <td id="name">${review.name}</td>
      <td>${review.ratings[0]}</td>
      <td>${review.ratings[1]}</td>
      <td>${review.ratings[2]}</td>
      <td id="rating4">${review.ratings[3]}</td>
    `;
    reviewTableBody.appendChild(row);
  });
}
