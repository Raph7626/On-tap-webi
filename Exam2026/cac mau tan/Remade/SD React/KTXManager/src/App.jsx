import { useMemo, useState } from 'react';
import RoomForm from './components/RoomForm.jsx';
import RoomStats from './components/RoomStats.jsx';
import RoomTable from './components/RoomTable.jsx';

const initialRooms = [
  { code: 'P.101', type: 'Phòng Nam (Tiêu chuẩn)', max: 8, occupied: 7, price: 1200000, issue: false },
  { code: 'P.102', type: 'Phòng Nữ (Chất lượng cao)', max: 4, occupied: 4, price: 2500000, issue: false },
  { code: 'P.201', type: 'Phòng Nam (Tiêu chuẩn)', max: 8, occupied: 0, price: 1200000, issue: false },
  { code: 'P.202', type: 'Phòng Nữ (Tiêu chuẩn)', max: 6, occupied: 5, price: 1500000, issue: true },
  { code: 'P.301', type: 'Phòng Nam (Chất lượng cao)', max: 2, occupied: 1, price: 2200000, issue: false }
];

function App() {
  const [rooms, setRooms] = useState(initialRooms);

  const stats = useMemo(() => {
    const total = rooms.length;
    const occupied = rooms.reduce((sum, room) => sum + room.occupied, 0);
    const capacity = rooms.reduce((sum, room) => sum + room.max, 0);
    const repairs = rooms.filter((room) => room.issue).length;
    return { total, occupied, capacity, repairs };
  }, [rooms]);

  const handleSave = (room) => {
    setRooms((prev) => [...prev, room]);
  };

  const handleDelete = (index) => {
    setRooms((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="page shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Ứng dụng học React</p>
          <h1>Quản lý phòng KTX</h1>
          <p className="subtitle">Danh sách phòng, thống kê và thêm mới bằng React component.</p>
        </div>
      </header>

      <div className="stat-row">
        <RoomStats label="Tổng phòng" value={`${stats.total} phòng`} />
        <RoomStats label="Số SV đang ở" value={`${stats.occupied} / ${stats.capacity}`} />
        <RoomStats label="Phòng cần sửa" value={`${stats.repairs} phòng`} />
      </div>

      <section className="content-box">
        <RoomTable rooms={rooms} onDelete={handleDelete} />
      </section>

      <section className="content-box">
        <RoomForm onSave={handleSave} />
      </section>
    </div>
  );
}

export default App;
