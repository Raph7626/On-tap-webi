/* =====================================================
   QUẢN LÝ NHÂN VIÊN - script.js
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
  let employees = [];     // BƯỚC 1: mảng dữ liệu gốc
  let filtered = [];      // BƯỚC 6: dùng cho tìm kiếm (THAM KHẢO)

  // ===========================================================
  // BƯỚC 1: LOAD DỮ LIỆU TỪ data.json
  // ===========================================================
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      employees = data.employees || [];
      filtered = [...employees];
      renderTable();   // BƯỚC 2
    })
    .catch(err => {
      console.error('Lỗi load data.json:', err);
      alert('Không tải được dữ liệu. Hãy chạy qua Live Server.');
    });

  // ===========================================================
  // BƯỚC 1.1: TỰ SINH ID MỚI (NVxxx) — dùng cho BƯỚC 4 THAM KHẢO
  // ===========================================================
  function generateNextId() {
    const max = employees
      .map(e => parseInt(String(e.id).replace(/\D/g, ''), 10) || 0)
      .reduce((a, b) => Math.max(a, b), 0);
    return 'NV' + String(max + 1).padStart(3, '0');
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
  // BƯỚC 2: RENDER BẢNG
  // ===========================================================
  function renderTable() {
    const tbody = $('#employeeTbody');
    tbody.empty();

    if (employees.length === 0) {
      $('#emptyState').removeClass('d-none');
      tbody.closest('table').addClass('d-none');
      return;
    }
    $('#emptyState').addClass('d-none');
    tbody.closest('table').removeClass('d-none');

    employees.forEach((e, idx) => {
      const statusBadge = e.status === 'active'
        ? `<span class="badge-status badge-active">Đang làm</span>`
        : `<span class="badge-status badge-inactive">Nghỉ việc</span>`;

      const tr = `
        <tr>
          <td>${idx + 1}</td>
          <td><span class="employee-id">${e.id}</span></td>
          <td><span class="employee-name">${e.fullName}</span></td>
          <td><span class="dept-badge">${e.department}</span></td>
          <td class="position-cell">${e.position}</td>
          <td class="text-end salary-cell">${formatVND(e.salary)}</td>
          <td>${formatDate(e.startDate)}</td>
          <td>${e.email}</td>
          <td>${e.phone}</td>
          <td class="text-center">${statusBadge}</td>
          <td class="text-center">
            <button class="btn-action btn-edit" data-id="${e.id}" title="Sửa">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-action btn-delete" data-id="${e.id}" title="Xóa">
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
  $('#employeeForm').validate({
    rules: {
      fullName:   { required: true, minlength: 5, maxlength: 50 },
      department: { required: true },
      position:   { required: true, minlength: 2, maxlength: 50 },
      salary:     { required: true, digits: true, min: 1000000 },
      startDate:  { required: true, date: true },
      email:      { required: true, email: true },
      phone:      { required: true, digits: true, minlength: 10, maxlength: 11 },
      status:     { required: true },
    },
    messages: {
      fullName: {
        required:  'Vui lòng nhập họ tên',
        minlength: 'Họ tên phải có ít nhất {0} ký tự',
        maxlength: 'Họ tên không quá {0} ký tự',
      },
      department: { required: 'Vui lòng chọn phòng ban' },
      position: {
        required:  'Vui lòng nhập chức vụ',
        minlength: 'Chức vụ phải có ít nhất {0} ký tự',
        maxlength: 'Chức vụ không quá {0} ký tự',
      },
      salary: {
        required: 'Vui lòng nhập lương',
        digits:   'Lương phải là số nguyên',
        min:      'Lương tối thiểu {0} VNĐ',
      },
      startDate: {
        required: 'Vui lòng chọn ngày vào làm',
        date:     'Ngày không hợp lệ',
      },
      email: {
        required: 'Vui lòng nhập email',
        email:    'Email không đúng định dạng',
      },
      phone: {
        required:  'Vui lòng nhập SĐT',
        digits:    'SĐT chỉ chứa số',
        minlength: 'SĐT phải có ít nhất {0} số',
        maxlength: 'SĐT không quá {0} số',
      },
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
    const id = $('#employeeId').val();
    const data = {
      fullName:   $('#fullName').val().trim(),
      department: $('#department').val(),
      position:   $('#position').val().trim(),
      salary:     Number($('#salary').val()),
      startDate:  $('#startDate').val(),
      email:      $('#email').val().trim(),
      phone:      $('#phone').val().trim(),
      status:     $('#status').val(),
    };

    if (id) {
      const idx = employees.findIndex(e => e.id === id);
      if (idx !== -1) {
        employees[idx] = { ...employees[idx], ...data };
        alert('Cập nhật thành công');
      }
    } else {
      data.id = generateNextId();
      employees.push(data);
      alert('Thêm nhân viên thành công: ' + data.id);
    }

    filtered = [...employees];
    renderTable();
    bootstrap.Modal.getInstance($('#employeeModal')).hide();
  }

  // ----- NÚT THÊM -----
  $('#btnAdd').on('click', function () {
    $('#employeeModalLabel').text('Thêm nhân viên');
    $('#employeeForm')[0].reset();
    $('#employeeId').val('');
    $('#employeeForm').validate().resetForm();
  });

  // ----- NÚT SỬA -----
  $('#employeeTbody').on('click', '.btn-edit', function () {
    const id = $(this).data('id');
    const e = employees.find(x => x.id === id);
    if (!e) return;

    $('#employeeModalLabel').text('Cập nhật nhân viên');
    $('#employeeId').val(e.id);
    $('#fullName').val(e.fullName);
    $('#department').val(e.department);
    $('#position').val(e.position);
    $('#salary').val(e.salary);
    $('#startDate').val(e.startDate);
    $('#email').val(e.email);
    $('#phone').val(e.phone);
    $('#status').val(e.status);
    $('#employeeForm').validate().resetForm();

    new bootstrap.Modal($('#employeeModal')).show();
  });

  // ============== BƯỚC 5: XÓA ==============
  $('#employeeTbody').on('click', '.btn-delete', function () {
    const id = $(this).data('id');
    const e = employees.find(x => x.id === id);
    if (!e) return;
    deleteTargetId = id;
    $('#deleteEmployeeName').text(e.fullName);
    new bootstrap.Modal($('#deleteModal')).show();
  });

  $('#btnConfirmDelete').on('click', function () {
    if (!deleteTargetId) return;
    employees = employees.filter(e => e.id !== deleteTargetId);
    filtered = filtered.filter(e => e.id !== deleteTargetId);
    deleteTargetId = null;
    renderTable();
    bootstrap.Modal.getInstance($('#deleteModal')).hide();
    alert('Đã xóa nhân viên');
  });

  // ============== BƯỚC 7: RESET FORM KHI ĐÓNG MODAL ==============
  $('#employeeModal').on('hidden.bs.modal', function () {
    $('#employeeForm')[0].reset();
    $('#employeeId').val('');
    $('#employeeForm').validate().resetForm();
  });

  // ============== BƯỚC 6: TÌM KIẾM ==============
  $('#searchForm').on('submit', function (e) { e.preventDefault(); applySearch(); });
  $('#searchInput').on('input', applySearch);

  function applySearch() {
    const kw = $('#searchInput').val().trim().toLowerCase();
    if (!kw) {
      filtered = [...employees];
    } else {
      filtered = employees.filter(e =>
        e.fullName.toLowerCase().includes(kw) ||
        e.id.toLowerCase().includes(kw) ||
        e.phone.toLowerCase().includes(kw)
      );
    }
    renderTable();
  }
  */
});
