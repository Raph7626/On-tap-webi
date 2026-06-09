# Danh Sách Các Biểu Thức Chính Quy (Regex) Phổ Biến & Hữu Dụng

## 1. Xác Thực Thông Tin Người Dùng (User Authentication)
* **Email Address:** `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`
* **Mật khẩu Mạnh (Ít nhất 8 ký tự, 1 hoa, 1 thường, 1 số, 1 ký tự đặc biệt):** `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$`
* **Tên đăng nhập (Username từ 3-16 ký tự):** `^[a-zA-Z0-9_]{3,16}$`

## 2. Số Điện Thoại & Mã Định Danh Việt Nam
* **Số Điện Thoại Di Động (Viettel, Mobi, Vina...):** `^(0|\+84)(3|5|7|8|9)[0-9]{8}$`
* **Số Căn Cước Công Dân (CCCD - 12 số):** `^[0-9]{12}$`

## 3. Định Dạng Ngày Tháng & Thời Gian
* **Ngày Tháng dạng `DD/MM/YYYY`:** `^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}$`
* **Giờ Hệ 24H dạng `HH:MM`:** `^([01][0-9]|2[0-3]):[0-5][0-9]$`

## 4. Dữ Liệu Số & Tài Chính
* **Số Nguyên:** `^\d+$`
* **Số Thập Phân:** `^-?\d+(\.\d+)?$`
* **Định Dạng Tiền Tệ (ví dụ: 1,250,500.00):** `^\d{1,3}(,\d{3})*(\.\d{2})?$`

## 5. Web & Hệ Thống
* **Địa chỉ URL website:** `^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-0()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$`
* **Địa chỉ IPv4:** `^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`
* **Mã Màu CSS (Hex Color):** `^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$`
