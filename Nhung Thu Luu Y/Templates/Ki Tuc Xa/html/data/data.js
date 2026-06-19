// 1. Dữ liệu đếm số lượng cho phần thẻ thống kê (Stat Cards)
export const statData = {
  totalRooms: 50,
  activeStudents: 328,
  repairRooms: 3,
  emptyRooms: 8
};

// 2. Mảng danh sách các phòng ký túc xá hiện tại
const initialRooms = [
  {
    id: "P.101",
    type: "Phòng Nam (Tiêu chuẩn)",
    currentOccupants: 7,
    maxOccupants: 8,
    price: 1200000,
    status: "Đang ở" 
  },
  {
    id: "P.102",
    type: "Phòng Nữ (Chất lượng cao)",
    currentOccupants: 4,
    maxOccupants: 4,
    price: 2500000,
    status: "Đầy" 
  },
  {
    id: "P.202",
    type: "Phòng Nữ (Tiêu chuẩn)",
    currentOccupants: 0,
    maxOccupants: 8,
    price: 1300000,
    status: "Trống" 
  },
  {
    id: "P.302",
    type: "Phòng Nam (Chất lượng cao)",
    currentOccupants: 3,
    maxOccupants: 8,
    price: 2600000,
    status: "Đang ở" 
  },
  {
    id: "P.201",
    type: "Phòng Nam (Tiêu chuẩn)",
    currentOccupants: 5,
    maxOccupants: 5,
    price: 1400000,
    status: "Đầy" 
  }
];

export default initialRooms;