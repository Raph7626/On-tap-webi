function StudentTable({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <p className="empty-state">Danh sách trống. Thêm sinh viên mới bên dưới.</p>;
  }

  return (
    <div className="table-shell">
      <div className="table-row header">
        <span>Mã SV</span>
        <span>Họ và tên</span>
        <span>Email</span>
        <span>Trạng thái</span>
        <span></span>
      </div>
      {students.map((student, index) => (
        <div key={index} className="table-row body">
          <span>{student.id}</span>
          <span>{student.name}</span>
          <span>{student.email}</span>
          <span>{student.status}</span>
          <span className="action-cell">
            <button className="btn secondary small" onClick={() => onEdit(index)}>
              Sửa
            </button>
            <button className="btn danger small" onClick={() => onDelete(index)}>
              Xóa
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default StudentTable;
