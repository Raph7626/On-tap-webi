import { useEffect, useState } from 'react';

function TaskForm({ initialTask, onCancel, onSave }) {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('todo');

  useEffect(() => {
    if (initialTask) {
      setName(initialTask.name);
      setPriority(initialTask.priority);
      setStatus(initialTask.status);
    } else {
      setName('');
      setPriority('medium');
      setStatus('todo');
    }
  }, [initialTask]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim()) return;
    onSave({ name: name.trim(), priority, status });
  };

  return (
    <div className="overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h2>{initialTask ? 'Sửa nhiệm vụ' : 'Thêm nhiệm vụ mới'}</h2>
          <button className="btn icon" onClick={onCancel}>×</button>
        </div>
        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Nội dung công việc
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập nhiệm vụ" />
          </label>
          <label>
            Độ ưu tiên
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="high">Cao</option>
              <option value="medium">Trung bình</option>
              <option value="low">Thấp</option>
            </select>
          </label>
          <label>
            Trạng thái
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="todo">Chưa làm</option>
              <option value="inprogress">Đang làm</option>
              <option value="done">Hoàn thành</option>
            </select>
          </label>
          <div className="modal-actions">
            <button type="button" className="btn secondary" onClick={onCancel}>
              Hủy
            </button>
            <button type="submit" className="btn primary">
              {initialTask ? 'Cập nhật' : 'Lưu lại'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
