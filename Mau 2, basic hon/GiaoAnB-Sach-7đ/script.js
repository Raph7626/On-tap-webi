/* =====================================================
   QUẢN LÝ SÁCH - script.js
   ----------------------------------------------
   YÊU CẦU ĐỀ: chỉ cần đến BƯỚC 3 (Validate)
   ----------------------------------------------
   - BƯỚC 1: Load dữ liệu từ data.json
   - BƯỚC 2: Render bảng
   - BƯỚC 3: Validate form

   Các bước 4-7 (Lưu, Xóa, Tìm kiếm, Reset) được
   giữ lại ở cuối file dưới dạng THAM KHẢO,
   KHÔNG nằm trong phạm vi đề.
   ===================================================== */

$(function () {
  // ============== STATE ==============
  let books = [];          // BƯỚC 1: mảng dữ liệu gốc
  let filtered = [];       // BƯỚC 6: dùng cho tìm kiếm (THAM KHẢO)

  // ===========================================================
  // BƯỚC 1: LOAD DỮ LIỆU TỪ data.json
  // ===========================================================
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      books = data.books || [];
      filtered = [...books];
      renderTable();   // BƯỚC 2
    })
    .catch(err => {
      console.error('Lỗi load data.json:', err);
      alert('Không tải được dữ liệu. Hãy chạy qua Live Server.');
    });

  // ===========================================================
  // BƯỚC 1.1: TỰ SINH ID MỚI (BKxxx)  — dùng cho BƯỚC 4 THAM KHẢO
  // ===========================================================
  function generateNextId() {
    const max = books
      .map(b => parseInt(String(b.id).replace(/\D/g, ''), 10) || 0)
      .reduce((a, b) => Math.max(a, b), 0);
    return 'BK' + String(max + 1).padStart(3, '0');
  }

  // ===========================================================
  // BƯỚC 2.1: CÁC HÀM TIỆN ÍCH
  // ===========================================================
  const formatVND = (n) => new Intl.NumberFormat('vi-VN').format(n) + ' ₫';

  // Hàm highlight từ khóa (dùng cho BƯỚC 6 THAM KHẢO)
  function highlight(text, keyword) {
    if (!keyword) return text;
    const re = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(re, '<mark class="highlight">$1</mark>');
  }

  // ===========================================================
  // BƯỚC 2: RENDER BẢNG
  // ===========================================================
  function renderTable() {
    const tbody = $('#bookTbody');
    tbody.empty();

    if (books.length === 0) {
      $('#emptyState').removeClass('d-none');
      tbody.closest('table').addClass('d-none');
      return;
    }
    $('#emptyState').addClass('d-none');
    tbody.closest('table').removeClass('d-none');

    books.forEach((b, idx) => {
      const statusBadge = b.status === 'active'
        ? `<span class="badge-status badge-active">Còn bán</span>`
        : `<span class="badge-status badge-inactive">Ngừng bán</span>`;

      const tr = `
        <tr>
          <td>${idx + 1}</td>
          <td><span class="book-id">${b.id}</span></td>
          <td>
            <img src="${b.cover}" alt="${b.title}" class="book-cover"
                 onerror="this.src='https://via.placeholder.com/50x70?text=No+Cover'" />
          </td>
          <td><span class="book-title">${b.title}</span></td>
          <td>${b.author}</td>
          <td><span class="category-badge">${b.category}</span></td>
          <td class="text-center">${b.year}</td>
          <td class="text-center">${b.pages}</td>
          <td class="text-end price-cell">${formatVND(b.price)}</td>
          <td class="text-center">${statusBadge}</td>
          <td class="text-center">
            <button class="btn-action btn-edit" data-id="${b.id}" title="Sửa">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-action btn-delete" data-id="${b.id}" title="Xóa">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
      tbody.append(tr);
    });
  }

  // ===========================================================
  // BƯỚC 3: KHỞI TẠO JQUERY VALIDATION
  // ===========================================================
  $('#bookForm').validate({
    rules: {
      title:    { required: true, minlength: 3, maxlength: 100 },
      author:   { required: true, minlength: 2, maxlength: 50 },
      category: { required: true },
      year:     { required: true, digits: true, min: 1900, max: 2099 },
      pages:    { required: true, digits: true, min: 1 },
      price:    { required: true, digits: true, min: 1000 },
      status:   { required: true },
      cover:    { required: true, url: true },
    },
    messages: {
      title: {
        required:  'Vui lòng nhập tên sách',
        minlength: 'Tên sách phải có ít nhất {0} ký tự',
        maxlength: 'Tên sách không quá {0} ký tự',
      },
      author: {
        required:  'Vui lòng nhập tên tác giả',
        minlength: 'Tên tác giả phải có ít nhất {0} ký tự',
        maxlength: 'Tên tác giả không quá {0} ký tự',
      },
      category: { required: 'Vui lòng chọn thể loại' },
      year: {
        required: 'Vui lòng nhập năm xuất bản',
        digits:   'Năm XB phải là số nguyên',
        min:      'Năm XB tối thiểu {0}',
        max:      'Năm XB tối đa {0}',
      },
      pages: {
        required: 'Vui lòng nhập số trang',
        digits:   'Số trang phải là số nguyên',
        min:      'Số trang tối thiểu {0}',
      },
      price: {
        required: 'Vui lòng nhập giá',
        digits:   'Giá phải là số nguyên',
        min:      'Giá tối thiểu {0} VNĐ',
      },
      status: { required: 'Vui lòng chọn trạng thái' },
      cover: {
        required: 'Vui lòng nhập URL ảnh bìa',
        url:      'URL không hợp lệ (phải bắt đầu bằng http:// hoặc https://)',
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element);
    },
    // submitHandler KHÔNG gọi nếu form lỗi.
    // Nếu muốn xử lý Lưu khi hợp lệ → mở comment BƯỚC 4 phía dưới.
    submitHandler: function (form) {
      alert('Validate thành công! (Phần Lưu dữ liệu xem ở BƯỚC 4 bên dưới)');
    },
  });

  // ===========================================================
  // ===========================================================
  // ===   BƯỚC 4 - 7: THAM KHẢO (KHÔNG THUỘC ĐỀ)            ===
  // ===   Giữ lại để tham khảo cách mở rộng                ===
  // ===   Khi cần dùng: copy code dưới đây ra NGOÀI comment ===
  // ===   và bỏ comment phần submitHandler ở BƯỚC 3         ===
  // ===========================================================
  // ===========================================================

  /*
  // ============== BƯỚC 4: XỬ LÝ LƯU (THÊM / SỬA) ==============
  let deleteTargetId = null;

  function handleSave() {
    const id = $('#bookId').val();
    const data = {
      title:    $('#title').val().trim(),
      author:   $('#author').val().trim(),
      category: $('#category').val(),
      year:     Number($('#year').val()),
      pages:    Number($('#pages').val()),
      price:    Number($('#price').val()),
      cover:    $('#cover').val().trim(),
      status:   $('#status').val(),
    };

    if (id) {
      // ----- Cập nhật -----
      const idx = books.findIndex(b => b.id === id);
      if (idx !== -1) {
        books[idx] = { ...books[idx], ...data };
        alert('Cập nhật thành công');
      }
    } else {
      // ----- Thêm mới -----
      data.id = generateNextId();
      books.push(data);
      alert('Thêm sách thành công: ' + data.id);
    }

    filtered = [...books];
    renderTable();
    bootstrap.Modal.getInstance($('#bookModal')).hide();
  }

  // ----- NÚT THÊM -----
  $('#btnAdd').on('click', function () {
    $('#bookModalLabel').text('Thêm sách');
    $('#bookForm')[0].reset();
    $('#bookId').val('');
    $('#bookForm').validate().resetForm();
  });

  // ----- NÚT SỬA -----
  $('#bookTbody').on('click', '.btn-edit', function () {
    const id = $(this).data('id');
    const b = books.find(x => x.id === id);
    if (!b) return;

    $('#bookModalLabel').text('Cập nhật sách');
    $('#bookId').val(b.id);
    $('#title').val(b.title);
    $('#author').val(b.author);
    $('#category').val(b.category);
    $('#year').val(b.year);
    $('#pages').val(b.pages);
    $('#price').val(b.price);
    $('#cover').val(b.cover);
    $('#status').val(b.status);
    $('#bookForm').validate().resetForm();

    new bootstrap.Modal($('#bookModal')).show();
  });

  // ============== BƯỚC 5: XÓA ==============
  $('#bookTbody').on('click', '.btn-delete', function () {
    const id = $(this).data('id');
    const b = books.find(x => x.id === id);
    if (!b) return;
    deleteTargetId = id;
    $('#deleteBookTitle').text(b.title);
    new bootstrap.Modal($('#deleteModal')).show();
  });

  $('#btnConfirmDelete').on('click', function () {
    if (!deleteTargetId) return;
    books = books.filter(b => b.id !== deleteTargetId);
    filtered = filtered.filter(b => b.id !== deleteTargetId);
    deleteTargetId = null;
    renderTable();
    bootstrap.Modal.getInstance($('#deleteModal')).hide();
    alert('Đã xóa sách');
  });

  // ============== BƯỚC 7: RESET FORM KHI ĐÓNG MODAL ==============
  $('#bookModal').on('hidden.bs.modal', function () {
    $('#bookForm')[0].reset();
    $('#bookId').val('');
    $('#bookForm').validate().resetForm();
  });

  // ============== BƯỚC 6: TÌM KIẾM ==============
  $('#searchForm').on('submit', function (e) { e.preventDefault(); applySearch(); });
  $('#searchInput').on('input', applySearch);

  function applySearch() {
    const kw = $('#searchInput').val().trim().toLowerCase();
    if (!kw) {
      filtered = [...books];
    } else {
      filtered = books.filter(b =>
        b.title.toLowerCase().includes(kw) ||
        b.author.toLowerCase().includes(kw)
      );
    }
    renderTable();
  }
  */
});
