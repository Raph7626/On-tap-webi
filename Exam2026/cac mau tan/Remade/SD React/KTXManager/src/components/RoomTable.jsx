function formatCurrency(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' đ';
}

function RoomTable({ rooms, onDelete }) {
  if (rooms.length === 0) {
    return <p className="empty-state">Không có phòng nào. Thêm phòng mới để bắt đầu.</p>;
  }

  return (
    <div className="table-shell">
      <div className="table-row header">
        <span>Mã phòng</span>
        <span>Loại phòng</span>
        <span>Số lượng</span>
        <span>Trạng thái</span>
        <span>Giá</span>
        <span></span>
      </div>
      {rooms.map((room, index) => (
        <div key={index} className="table-row body">
          <span>{room.code}</span>
          <span>{room.type}</span>
          <span>{room.max}</span>
          <span>{room.occupied === room.max ? 'Đầy' : room.occupied === 0 ? 'Trống' : 'Đang ở'}</span>
          <span>{formatCurrency(room.price)}</span>
          <span>
            <button className="btn danger small" onClick={() => onDelete(index)}>
              Xóa
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default RoomTable;
