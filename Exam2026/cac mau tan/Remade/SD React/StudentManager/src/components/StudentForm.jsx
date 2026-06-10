import { useEffect, useState } from 'react';

function StudentForm({ onSave, editingStudent }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Đang học');

  useEffect(() => {
    if (editingStudent) {
      setId(editingStudent.id);
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setStatus(editingStudent.status);
    } else {
      setId('');
      setName('');
      setEmail('');
      setStatus('Đang học');
    }
  }, [editingStudent]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!id.trim() || !name.trim() || !email.trim()) return;
    onSave({ id: id.trim(), name: name.trim(), email: email.trim(), status });
    setId('');
    setName('');
    setEmail('');
    setStatus('Đang học');
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <h2>{editingStudent ? 'Sửa sinh viên' : 'Thêm sinh viên mới'}</h2>
      <label>
        Mã sinh viên
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="SV001" />
      </label>
      <label>
        Họ và tên
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nguyễn Văn A" />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
      </label>
      <label>
        Trạng thái học tập
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Đang học">Đang học</option>
          <option value="Bảo lưu">Bảo lưu</option>
          <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
        </select>
      </label>
      <button type="submit" className="btn primary">
        {editingStudent ? 'Cập nhật' : 'Lưu lại'}
      </button>
    </form>
  );
}

export default StudentForm;
