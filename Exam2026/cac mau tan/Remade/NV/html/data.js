// Mảng dữ liệu chứa 5 nhiệm vụ mẫu phục vụ hiển thị câu 1
const list = [
  {
    id: 1,
    name: "Thực hành xây dựng Layout UI bằng Figma Auto Layout",
    priority: "high",
    status: "done"
  },
  {
    id: 2,
    name: "Thiết kế sơ đồ tuần tự (Sequence Diagram) hệ thống y tế",
    priority: "high",
    status: "inprogress"
  },
  {
    id: 3,
    name: "Viết mã kết nối dữ liệu C# WinForms với SQL Server",
    priority: "medium",
    status: "todo"
  },
  {
    id: 4,
    name: "Ôn tập lý thuyết Triết học Mác - Lênin chương Hình thái kinh tế",
    priority: "low",
    status: "todo"
  },
  {
    id: 5,
    name: "Tối ưu hóa SEO và áp dụng thẻ ngữ nghĩa Semantic HTML5",
    priority: "medium",
    status: "inprogress"
  }
];

// Xuất biến list ra nếu cần dùng cho môi trường module hoặc kiểm tra (tùy đề bài yêu cầu)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = list;
}