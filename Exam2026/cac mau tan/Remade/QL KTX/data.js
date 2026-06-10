$(document).ready(function () {
    var rooms = [
        { code: "P.101", type: "Phòng Nam (Tiêu chuẩn)", max: 8, occupied: 7, price: 1200000, status: "available", issue: false },
        { code: "P.102", type: "Phòng Nữ (Chất lượng cao)", max: 4, occupied: 4, price: 2500000, status: "full", issue: false },
        { code: "P.201", type: "Phòng Nam (Tiêu chuẩn)", max: 8, occupied: 0, price: 1200000, status: "empty", issue: false },
        { code: "P.202", type: "Phòng Nữ (Tiêu chuẩn)", max: 6, occupied: 5, price: 1500000, status: "available", issue: true },
        { code: "P.301", type: "Phòng Nam (Chất lượng cao)", max: 2, occupied: 1, price: 2200000, status: "available", issue: false }
    ];

    var addRoomModal = new bootstrap.Modal(document.getElementById('addRoomModal'));

    function formatCurrency(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    }

    function getStatusBadge(status) {
        var badgeClass = "badge bg-secondary";
        var text = "";

        if (status === "empty") {
            badgeClass = "badge bg-warning text-dark";
            text = "0 (Trống)";
        } else if (status === "full") {
            badgeClass = "badge bg-danger";
            text = "Đầy";
        } else {
            badgeClass = "badge bg-success";
            text = "Đang ở";
        }

        return '<span class="' + badgeClass + '">' + text + '</span>';
    }

    function renderRooms() {
        var html = "";

        rooms.forEach(function (room, index) {
            html += '<tr>';
            html += '<td class="text-center fw-bold text-primary">' + room.code + '</td>';
            html += '<td>' + room.type + '</td>';
            html += '<td class="text-center">' + room.max + '</td>';
            html += '<td class="text-center">' + getStatusBadge(room.status) + '</td>';
            html += '<td class="text-end fw-semibold">' + formatCurrency(room.price) + '</td>';
            html += '<td class="text-center">';
            html += '<button class="btn btn-sm btn-outline-secondary me-1 btn-edit-room" data-index="' + index + '" title="Sửa">Sửa</button>';
            html += '<button class="btn btn-sm btn-outline-danger btn-delete-room" data-index="' + index + '" title="Xóa">Xóa</button>';
            html += '</td>';
            html += '</tr>';
        });

        $('#roomTableBody').html(html);
        updateStats();
    }

    function updateStats() {
        var totalRooms = rooms.length;
        var occupiedStudents = rooms.reduce(function (sum, room) {
            return sum + room.occupied;
        }, 0);
        var capacityStudents = rooms.reduce(function (sum, room) {
            return sum + room.max;
        }, 0);
        var repairRooms = rooms.filter(function (room) {
            return room.issue;
        }).length;

        $('#statTotalRooms').text(totalRooms + ' Phòng');
        $('#statStudents').text(occupiedStudents + ' / ' + capacityStudents);
        $('#statRepairRooms').text(repairRooms + ' Phòng');
    }

    function resetForm() {
        $('#roomCode').val('');
        $('#roomType').val('1');
        $('#roomMax').val(8);
        $('#roomPrice').val('');
        $('#roomNote').val('');
        $('#roomIssue').prop('checked', false);
    }

    $('#addRoomModal form').submit(function (e) {
        e.preventDefault();

        var code = $('#roomCode').val().trim();
        var type = $('#roomType option:selected').text();
        var max = parseInt($('#roomMax').val(), 10) || 0;
        var price = parseInt($('#roomPrice').val(), 10) || 0;
        var issue = $('#roomIssue').is(':checked');
        var occupied = issue ? 0 : Math.min(max, Math.floor(max * 0.8));
        var status = occupied === 0 ? 'empty' : (occupied === max ? 'full' : 'available');

        if (code && price > 0 && max > 0) {
            rooms.push({ code: code, type: type, max: max, occupied: occupied, price: price, status: status, issue: issue });
            renderRooms();
            resetForm();
            addRoomModal.hide();
        }
    });

    $(document).on('click', '.btn-delete-room', function () {
        var index = parseInt($(this).data('index'), 10);
        if (!isNaN(index) && rooms[index]) {
            rooms.splice(index, 1);
            renderRooms();
        }
    });

    renderRooms();
});