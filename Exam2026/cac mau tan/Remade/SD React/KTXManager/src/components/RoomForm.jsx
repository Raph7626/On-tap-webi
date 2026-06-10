import { useState } from 'react';

const roomTypes = [
  'Phòng Nam (Tiêu chuẩn)',
  'Phòng Nữ (Tiêu chuẩn)',
  'Phòng Nam (Chất lượng cao)',
  'Phòng Nữ (Chất lượng cao)'
];

function RoomForm({ onSave }) {
  const [code, setCode] = useState('');
  const [type, setType] = useState(roomTypes[0]);
  const [max, setMax] = useState(4);
  const [price, setPrice] = useState(1200000);
  const [issue, setIssue] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!code.trim() || max <= 0 || price <= 0) return;
    const occupied = issue ? 0 : Math.min(max, Math.floor(max * 0.8));
    onSave({ code: code.trim(), type, max, occupied, price, issue });
    setCode('');
    setType(roomTypes[0]);
    setMax(4);
    setPrice(1200000);
    setIssue(false);
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <h2>Thêm phòng mới</h2>
      <label>
        Mã phòng
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="P.305" />
      </label>
      <label>
        Loại phòng
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {roomTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Số lượng tối đa
        <input type="number" min="1" value={max} onChange={(e) => setMax(Number(e.target.value))} />
      </label>
      <label>
        Giá thuê / tháng
        <input type="number" min="0" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </label>
      <label className="checkbox-row">
        <input type="checkbox" checked={issue} onChange={(e) => setIssue(e.target.checked)} />
        Phòng cần sửa chữa
      </label>
      <button type="submit" className="btn primary">
        Lưu phòng
      </button>
    </form>
  );
}

export default RoomForm;
