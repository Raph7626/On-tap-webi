/* =====================================================
   QUẢN LÝ KHÓA HỌC - script.js
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
  let courses = [];       // BƯỚC 1: mảng dữ liệu gốc
  let filtered = [];      // BƯỚC 6: dùng cho tìm kiếm (THAM KHẢO)

  // ===========================================================
  // BƯỚC 1: LOAD DỮ LIỆU TỪ data.json
  // ===========================================================
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      courses = data.courses || [];
      filtered = [...courses];
      renderTable();   // BƯỚC 2
    })
    .catch(err => {
      console.error('Lỗi load data.json:', err);
      alert('Không tải được dữ liệu. Hãy chạy qua Live Server.');
    });

  // ===========================================================
  // BƯỚC 1.1: TỰ SINH ID MỚI (KHxxx) — dùng cho BƯỚC 4 THAM KHẢO
  // ===========================================================
  function generateNextId() {
    const max = courses
      .map(c => parseInt(String(c.id).replace(/\D/g, ''), 10) || 0)
      .reduce((a, b) => Math.max(a, b), 0);
    return 'KH' + String(max + 1).padStart(3, '0');
  }

  // ===========================================================
  // BƯỚC 2.1: CÁC HÀM TIỆN ÍCH
  // ===========================================================
  const formatVND = (n) => new Intl.NumberFormat('vi-VN').format(n) + ' ₫';

  function formatDate(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${d}/${m}/${y}`;
  }

  // Hàm highlight từ khóa (dùng cho BƯỚC 6 THAM KHẢO)
  function highlight(text, keyword) {
    if (!keyword) return text;
    const re = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(re, '<mark class="highlight">$1</mark>');
  }

  // ===========================================================
  // BƯỚC 2.2: CLASS CSS CHO CẤP ĐỘ
  // ===========================================================
  function levelClass(lv) {
    if (lv === 'Cơ bản') return 'level-basic';
    if (lv === 'Trung cấp') return 'level-inter';
    return 'level-advanced';
  }

  // ===========================================================
  // BƯỚC 2: RENDER BẢNG
  // ===========================================================
  function renderTable() {
    const tbody = $('#courseTbody');
    tbody.empty();

    if (courses.length === 0) {
      $('#emptyState').removeClass('d-none');
      tbody.closest('table').addClass('d-none');
      return;
    }
    $('#emptyState').addClass('d-none');
    tbody.closest('table').removeClass('d-none');

    courses.forEach((c, idx) => {
      const statusBadge = c.status === 'active'
        ? `<span class="badge-status badge-active">Mở đăng ký</span>`
        : `<span class="badge-status badge-inactive">Đã đóng</span>`;

      const tr = `
        <tr>
          <td>${idx + 1}</td>
          <td><span class="course-id">${c.id}</span></td>
          <td><span class="course-name">${c.name}</span></td>
          <td><span class="instructor-cell">${c.instructor}</span></td>
          <td class="text-center duration-cell">${c.duration}h</td>
          <td class="text-end fee-cell">${formatVND(c.fee)}</td>
          <td>${formatDate(c.startDate)}</td>
          <td class="text-center">
            <span class="max-students-cell">${c.maxStudents}</span>
          </td>
          <td class="text-center">
            <span class="level-badge ${levelClass(c.level)}">${c.level}</span>
          </td>
          <td class="text-center">${statusBadge}</td>
          <td class="text-center">
            <button class="btn-action btn-edit" data-id="${c.id}" title="Sửa">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-action btn-delete" data-id="${c.id}" title="Xóa">
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
  $('#courseForm').validate({
    rules: {
      name:        { required: true, minlength: 5, maxlength: 100 },
      instructor:  { required: true, minlength: 5, maxlength: 50 },
      duration:    { required: true, digits: true, min: 1, max: 500 },
      fee:         { required: true, digits: true, min: 100000 },
      startDate:   { required: true, date: true },
      maxStudents: { required: true, digits: true, min: 1, max: 200 },
      level:       { required: true },
      status:      { required: true },
    },
    messages: {
      name: {
        required:  'Vui lòng nhập tên khóa học',
        minlength: 'Tên phải có ít nhất {0} ký tự',
        maxlength: 'Tên không quá {0} ký tự',
      },
      instructor: {
        required:  'Vui lòng nhập tên giảng viên',
        minlength: 'Tên phải có ít nhất {0} ký tự',
        maxlength: 'Tên không quá {0} ký tự',
      },
      duration: {
        required: 'Vui lòng nhập thời lượng',
        digits:   'Thời lượng phải là số nguyên',
        min:      'Thời lượng tối thiểu {0}h',
        max:      'Thời lượng tối đa {0}h',
      },
      fee: {
        required: 'Vui lòng nhập học phí',
        digits:   'Học phí phải là số nguyên',
        min:      'Học phí tối thiểu {0} VNĐ',
      },
      startDate: {
        required: 'Vui lòng chọn ngày khai giảng',
        date:     'Ngày không hợp lệ',
      },
      maxStudents: {
        required: 'Vui lòng nhập sĩ số tối đa',
        digits:   'Sĩ số phải là số nguyên',
        min:      'Sĩ số tối thiểu {0}',
        max:      'Sĩ số tối đa {0}',
      },
      level:  { required: 'Vui lòng chọn cấp độ' },
      status: { required: 'Vui lòng chọn trạng thái' },
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
    const id = $('#courseId').val();
    const data = {
      name:        $('#name').val().trim(),
      instructor:  $('#instructor').val().trim(),
      duration:    Number($('#duration').val()),
      fee:         Number($('#fee').val()),
      startDate:   $('#startDate').val(),
      maxStudents: Number($('#maxStudents').val()),
      level:       $('#level').val(),
      status:      $('#status').val(),
    };

    if (id) {
      const idx = courses.findIndex(c => c.id === id);
      if (idx !== -1) {
        courses[idx] = { ...courses[idx], ...data };
        alert('Cập nhật thành công');
      }
    } else {
      data.id = generateNextId();
      courses.push(data);
      alert('Thêm khóa học thành công: ' + data.id);
    }

    filtered = [...courses];
    renderTable();
    bootstrap.Modal.getInstance($('#courseModal')).hide();
  }

  // ----- NÚT THÊM -----
  $('#btnAdd').on('click', function () {
    $('#courseModalLabel').text('Thêm khóa học');
    $('#courseForm')[0].reset();
    $('#courseId').val('');
    $('#courseForm').validate().resetForm();
  });

  // ----- NÚT SỬA -----
  $('#courseTbody').on('click', '.btn-edit', function () {
    const id = $(this).data('id');
    const c = courses.find(x => x.id === id);
    if (!c) return;

    $('#courseModalLabel').text('Cập nhật khóa học');
    $('#courseId').val(c.id);
    $('#name').val(c.name);
    $('#instructor').val(c.instructor);
    $('#duration').val(c.duration);
    $('#fee').val(c.fee);
    $('#startDate').val(c.startDate);
    $('#maxStudents').val(c.maxStudents);
    $('#level').val(c.level);
    $('#status').val(c.status);
    $('#courseForm').validate().resetForm();

    new bootstrap.Modal($('#courseModal')).show();
  });

  // ============== BƯỚC 5: XÓA ==============
  $('#courseTbody').on('click', '.btn-delete', function () {
    const id = $(this).data('id');
    const c = courses.find(x => x.id === id);
    if (!c) return;
    deleteTargetId = id;
    $('#deleteCourseName').text(c.name);
    new bootstrap.Modal($('#deleteModal')).show();
  });

  $('#btnConfirmDelete').on('click', function () {
    if (!deleteTargetId) return;
    courses = courses.filter(c => c.id !== deleteTargetId);
    filtered = filtered.filter(c => c.id !== deleteTargetId);
    deleteTargetId = null;
    renderTable();
    bootstrap.Modal.getInstance($('#deleteModal')).hide();
    alert('Đã xóa khóa học');
  });

  // ============== BƯỚC 7: RESET FORM KHI ĐÓNG MODAL ==============
  $('#courseModal').on('hidden.bs.modal', function () {
    $('#courseForm')[0].reset();
    $('#courseId').val('');
    $('#courseForm').validate().resetForm();
  });

  // ============== BƯỚC 6: TÌM KIẾM ==============
  $('#searchForm').on('submit', function (e) { e.preventDefault(); applySearch(); });
  $('#searchInput').on('input', applySearch);

  function applySearch() {
    const kw = $('#searchInput').val().trim().toLowerCase();
    if (!kw) {
      filtered = [...courses];
    } else {
      filtered = courses.filter(c =>
        c.name.toLowerCase().includes(kw) ||
        c.instructor.toLowerCase().includes(kw)
      );
    }
    renderTable();
  }
  */
});
