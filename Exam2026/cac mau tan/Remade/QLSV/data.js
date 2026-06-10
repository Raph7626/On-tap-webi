$(document).ready(function () {
    var students = [
        { id: "SV001", name: "Nguyễn Văn A", email: "vana@student.edu.vn", status: "Đang học" },
        { id: "SV002", name: "Trần Thị B", email: "thib@student.edu.vn", status: "Bảo lưu" },
        { id: "SV003", name: "Lê Văn C", email: "lvc@student.edu.vn", status: "Đang học" },
        { id: "SV004", name: "Phạm Thị D", email: "ptd@student.edu.vn", status: "Đã tốt nghiệp" },
        { id: "SV005", name: "Hoàng Văn E", email: "hve@student.edu.vn", status: "Đang học" }
    ];

    var editIndex = -1;

    function getStatusBadge(status) {
        var badgeClass = "badge bg-secondary";
        if (status === "Đang học") badgeClass = "badge bg-success";
        else if (status === "Bảo lưu") badgeClass = "badge bg-warning text-dark";
        else if (status === "Đã tốt nghiệp") badgeClass = "badge bg-primary";
        return '<span class="' + badgeClass + '">' + status + '</span>';
    }

    function renderStudents() {
        var html = "";
        students.forEach(function (student, index) {
            html += '<tr>';
            html += '  <td class="ps-4 fw-medium">' + escapeHtml(student.id) + '</td>';
            html += '  <td>' + escapeHtml(student.name) + '</td>';
            html += '  <td>' + escapeHtml(student.email) + '</td>';
            html += '  <td>' + getStatusBadge(student.status) + '</td>';
            html += '  <td class="text-end pe-4">';
            html += '    <button class="btn btn-sm btn-outline-secondary me-1 btn-edit-student" data-index="' + index + '" title="Sửa">Sửa</button>';
            html += '    <button class="btn btn-sm btn-outline-danger btn-delete-student" data-index="' + index + '" title="Xóa">Xóa</button>';
            html += '  </td>';
            html += '</tr>';
        });

        $('#studentTableBody').html(html);
        updateStats();
    }

    function escapeHtml(text) {
        return $('<div>').text(text).html();
    }

    function updateStats() {
        var total = students.length;
        var active = students.filter(function (item) { return item.status === 'Đang học'; }).length;
        var warnings = students.filter(function (item) { return item.status === 'Bảo lưu'; }).length;

        $('#statTotalStudents').text(total.toLocaleString());
        $('#statActiveStudents').text(active.toLocaleString());
        $('#statWarningStudents').text(warnings.toLocaleString());
    }

    function resetForm() {
        $('#addStudentForm')[0].reset();
        $('#editIndex').val(-1);
        editIndex = -1;
    }

    $('#addStudentForm').submit(function (e) {
        e.preventDefault();

        var id = $('#studentId').val().trim();
        var name = $('#studentName').val().trim();
        var email = $('#studentEmail').val().trim();
        var status = $('#studentStatus').val();

        if (!id || !name || !email || !status) {
            return;
        }

        if (editIndex >= 0) {
            students[editIndex] = { id: id, name: name, email: email, status: status };
        } else {
            students.push({ id: id, name: name, email: email, status: status });
        }

        renderStudents();
        resetForm();
        $('#addStudentModal').modal('hide');
    });

    $(document).on('click', '.btn-delete-student', function () {
        var index = parseInt($(this).data('index'), 10);
        if (!isNaN(index)) {
            students.splice(index, 1);
            renderStudents();
        }
    });

    $(document).on('click', '.btn-edit-student', function () {
        editIndex = parseInt($(this).data('index'), 10);
        if (!isNaN(editIndex)) {
            var student = students[editIndex];
            $('#studentId').val(student.id);
            $('#studentName').val(student.name);
            $('#studentEmail').val(student.email);
            $('#studentStatus').val(student.status);
            $('#editIndex').val(editIndex);
            $('#addStudentModal .modal-title').text('Sửa Sinh Viên');
            $('#addStudentModal .btn-submit-student').text('Cập nhật');
            $('#addStudentModal').modal('show');
        }
    });

    $('#addStudentModal').on('hidden.bs.modal', function () {
        resetForm();
        $('#addStudentModal .modal-title').text('Thêm Sinh Viên Mới');
        $('#addStudentModal .btn-submit-student').text('Lưu lại');
    });

    renderStudents();
});