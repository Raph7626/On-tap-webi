import { useMemo, useState } from 'react';
import StudentForm from './components/StudentForm.jsx';
import StudentStats from './components/StudentStats.jsx';
import StudentTable from './components/StudentTable.jsx';

const initialStudents = [
  { id: 'SV001', name: 'Nguyễn Văn A', email: 'vana@student.edu.vn', status: 'Đang học' },
  { id: 'SV002', name: 'Trần Thị B', email: 'thib@student.edu.vn', status: 'Bảo lưu' },
  { id: 'SV003', name: 'Lê Văn C', email: 'lvc@student.edu.vn', status: 'Đang học' },
  { id: 'SV004', name: 'Phạm Thị D', email: 'ptd@student.edu.vn', status: 'Đã tốt nghiệp' },
  { id: 'SV005', name: 'Hoàng Văn E', email: 'hve@student.edu.vn', status: 'Đang học' }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [editingIndex, setEditingIndex] = useState(null);

  const stats = useMemo(() => {
    const total = students.length;
    const active = students.filter((student) => student.status === 'Đang học').length;
    const warnings = students.filter((student) => student.status === 'Bảo lưu').length;
    return { total, active, warnings };
  }, [students]);

  const handleSave = (student) => {
    if (editingIndex !== null) {
      setStudents((prev) => prev.map((item, index) => (index === editingIndex ? student : item)));
      setEditingIndex(null);
    } else {
      setStudents((prev) => [...prev, student]);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="page shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Ứng dụng học React</p>
          <h1>Quản lý sinh viên</h1>
          <p className="subtitle">Danh sách và thông tin sinh viên, thêm sửa xóa trực quan bằng React.</p>
        </div>
      </header>

      <div className="stat-row">
        <StudentStats label="Tổng sinh viên" value={stats.total} />
        <StudentStats label="Đang học" value={stats.active} />
        <StudentStats label="Bảo lưu" value={stats.warnings} />
      </div>

      <section className="content-box">
        <div className="table-header">
          <div>
            <h2>Danh sách sinh viên</h2>
            <p className="helper-text">Sửa hoặc xóa sinh viên trong danh sách bên dưới.</p>
          </div>
        </div>
        <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
      </section>

      <section className="content-box">
        <StudentForm onSave={handleSave} editingStudent={editingIndex !== null ? students[editingIndex] : null} />
      </section>
    </div>
  );
}

export default App;
