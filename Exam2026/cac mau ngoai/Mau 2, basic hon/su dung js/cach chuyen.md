Cách 1 – Chuyển data.json thành data.js
Bước 1: Đổi file data.json thành data.js, thêm const books = [...] vào đầu và export nếu cần:
js// data/data.js
const books = [
  { id: "BK001", title: "Nhà Giả Kim", author: "Paulo Coelho", ... },
  { id: "BK002", ... },
  // ... các bản ghi còn lại
];
Bước 2: Trong index.html, thêm thẻ script load data.js trước script.js:
html<!-- Thêm dòng này TRƯỚC script.js -->
<script src="data/data.js"></script>
<script src="script.js"></script>
Bước 3: Trong script.js, xóa toàn bộ phần fetch và thay bằng dùng thẳng biến books:
js// TRƯỚC (dùng fetch data.json):
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    books = data.books || [];
    filtered = [...books];
    renderTable();
  });

// SAU (dùng data.js):
books = [...books_data];   // hoặc đặt tên biến trong data.js là bookData để tránh trùng
filtered = [...books];
renderTable();

Lưu ý đặt tên biến
Trong script.js đã có let books = [] rồi, nên trong data.js đặt tên khác để tránh trùng:
js// data.js
const bookData = [   // ← đặt tên khác với biến books trong script.js
  { id: "BK001", ... },
  ...
];
js// script.js – phần khởi tạo
books    = [...bookData];  // copy từ bookData vào books
filtered = [...books];
renderTable();

Ưu / nhược so với fetch:
data.json + fetchdata.js + <script>Cần Live Server✅ Có (fetch bị CORS)❌ Không cầnMở trực tiếp file HTML❌ Không được✅ ĐượcPhù hợp thi không có server❌✅
→ Đề thi thường dùng data.js chính vì lý do này: mở thẳng index.html trên máy thi mà không cần Live Server hay Node.js.