
1. tabindex → tabIndex

HTML thuần viết thường hết tabindex="-1", nhưng React bắt buộc viết theo kiểu camelCase (chữ hoa giữa từ) cho hầu hết thuộc tính: tabIndex="-1".
2. checked → defaultChecked

HTML thuần: <input type="radio" checked> — không sao cả.

React: nếu bạn viết checked mà không có onChange đi kèm, React sẽ cảnh báo lỗi (vì nó nghĩ bạn đang muốn điều khiển input đó bằng state). Vì mình chỉ làm tĩnh, không xử lý gì, nên phải đổi thành defaultChecked — nghĩa là "chỉ chọn sẵn lúc đầu, không cần React theo dõi thay đổi".
3. id của modal chỉ nên render 1 lần

Đây là điểm quan trọng nhất khi thầy cô hỏi: data-bs-target="#modalThemHoatDong" tìm theo id — mà id trong HTML phải duy nhất toàn trang. Nên Component <ActivityForm /> (chứa modal) chỉ đặt 1 lần ở App.jsx, còn nút "+ Thêm hoạt động" (<AddActivityButton />) có thể đặt ở component khác (vd trong toolbar của bảng) — chúng liên kết với nhau qua chuỗi id/data-bs-target, không phải qua props hay state của React.