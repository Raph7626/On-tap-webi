function TaskList({ tasks, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-state">Chưa có nhiệm vụ nào. Nhấn nút Thêm việc mới để bắt đầu.</p>;
  }

  return (
    <div className="task-grid">
      {tasks.map((task, index) => (
        <article key={index} className="task-item">
          <div>
            <strong>{task.name}</strong>
            <p className="task-meta">Ưu tiên: {task.priority}</p>
          </div>
          <div className="task-status">{task.status.replace('inprogress', 'Đang làm')}</div>
          <div className="task-actions">
            <button className="btn secondary" onClick={() => onEdit(index)}>
              Sửa
            </button>
            <button className="btn danger" onClick={() => onDelete(index)}>
              Xóa
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default TaskList;
