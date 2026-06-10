$(document).ready(function () {

    // ===== Dữ liệu mẫu =====
    var tasks = [
        { name: "Go to gym",           priority: "high",    status: "todo" },
        { name: "Read a book",         priority: "low",     status: "done" },
        { name: "Go to market",        priority: "medium",  status: "inprogress" },
        { name: "Prepare presentation",priority: "high",    status: "todo" },
        { name: "Pay electricity bill",priority: "low",     status: "done" }
    ];

    var deleteIndex = -1;
    var taskModal   = new bootstrap.Modal(document.getElementById('taskModal'));
    var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));

    // ===== Render danh sách =====
    function renderTasks() {
        var html = '';

        if (tasks.length === 0) {
            html = '<p class="text-muted text-center py-5">Chưa có công việc nào.</p>';
        }

        for (var i = 0; i < tasks.length; i++) {
            var t = tasks[i];

            var priClass = 'priority-' + t.priority;
            var priLabel = t.priority.charAt(0).toUpperCase() + t.priority.slice(1);

            var statusText = '';
            var badgeClass = '';
            if (t.status === 'todo') {
                statusText = 'To Do';
                badgeClass = 'badge-todo';
            } else if (t.status === 'inprogress') {
                statusText = 'In Progress';
                badgeClass = 'badge-inprogress';
            } else {
                statusText = 'Done';
                badgeClass = 'badge-done';
            }

            html += '<div class="task-item">';
            html += '  <div class="row align-items-center">';
            html += '    <div class="col-12 col-md-4 mb-2 mb-md-0">';
            html += '      <strong>' + escapeHtml(t.name) + '</strong>';
            html += '    </div>';
            html += '    <div class="col-4 col-md-2">';
            html += '      <span class="' + priClass + '">' + priLabel + '</span>';
            html += '    </div>';
            html += '    <div class="col-4 col-md-2">';
            html += '      <span class="status-badge ' + badgeClass + '">' + statusText + '</span>';
            html += '    </div>';
            html += '    <div class="col-4 col-md-4 text-end">';
            html += '      <button class="btn btn-outline-primary btn-sm me-1 btn-edit" data-index="' + i + '">Sửa</button>';
            html += '      <button class="btn btn-outline-danger btn-sm btn-delete" data-index="' + i + '">Xóa</button>';
            html += '    </div>';
            html += '  </div>';
            html += '</div>';
        }

        $('#taskList').html(html);
        updateStats();
    }

    function escapeHtml(text) {
        return $('<div>').text(text).html();
    }

    // ===== Thống kê =====
    function updateStats() {
        var total    = tasks.length;
        var todo     = 0;
        var progress = 0;
        var done     = 0;

        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].status === 'todo') todo++;
            else if (tasks[i].status === 'inprogress') progress++;
            else if (tasks[i].status === 'done') done++;
        }

        $('#statTotal').text(total);
        $('#statTodo').text(todo);
        $('#statProgress').text(progress);
        $('#statDone').text(done);
    }

    // ===== Validation =====
    $('#taskForm').validate({
        rules: {
            taskName: {
                required: true,
                minlength: 2
            },
            taskPriority: { required: true },
            taskStatus:   { required: true }
        },
        messages: {
            taskName: {
                required:  "Nhập tên công việc",
                minlength: "Ít nhất 2 ký tự"
            },
            taskPriority: { required: "Chọn độ ưu tiên" },
            taskStatus:   { required: "Chọn trạng thái" }
        },
        errorElement: 'label',
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function () {
            var name     = $('#taskName').val().trim();
            var priority = $('#taskPriority').val();
            var status   = $('#taskStatus').val();
            var idx      = parseInt($('#editIndex').val());

            if (idx >= 0) {
                // Sửa
                tasks[idx].name     = name;
                tasks[idx].priority = priority;
                tasks[idx].status   = status;
            } else {
                // Thêm
                tasks.push({ name: name, priority: priority, status: status });
            }

            renderTasks();
            taskModal.hide();
        }
    });

    // ===== Nút "Thêm việc mới" =====
    $('#btnOpenAdd').click(function () {
        $('#taskForm')[0].reset();
        $('#taskForm').validate().resetForm();
        $('#editIndex').val(-1);
        $('#taskModalTitle').text('Thêm việc mới');
        $('#btnSubmit').text('Thêm mới');
        taskModal.show();
    });

    // ===== Nút "Sửa" =====
    $(document).on('click', '.btn-edit', function () {
        var idx  = $(this).data('index');
        var task = tasks[idx];

        $('#taskForm')[0].reset();
        $('#taskForm').validate().resetForm();

        $('#editIndex').val(idx);
        $('#taskName').val(task.name);
        $('#taskPriority').val(task.priority);
        $('#taskStatus').val(task.status);

        $('#taskModalTitle').text('Sửa công việc');
        $('#btnSubmit').text('Cập nhật');
        taskModal.show();
    });

    // ===== Nút "Xóa" =====
    $(document).on('click', '.btn-delete', function () {
        deleteIndex = $(this).data('index');
        $('#deleteName').text(tasks[deleteIndex].name);
        deleteModal.show();
    });

    $('#btnConfirmDelete').click(function () {
        if (deleteIndex >= 0) {
            tasks.splice(deleteIndex, 1);
            deleteIndex = -1;
            renderTasks();
            deleteModal.hide();
        }
    });

    // ===== Khởi chạy =====
    renderTasks();

});
