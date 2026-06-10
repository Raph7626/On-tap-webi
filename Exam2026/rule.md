# Tài Liệu Bảng Tra Cứu Toàn Bộ Rules Trong jQuery Validation

Bảng dưới đây tổng hợp chi tiết các quy tắc (Rules) kiểm tra dữ liệu đầu vào thông dụng nhất của thư viện **jQuery Validation Plugin**, bao gồm kiểu dữ liệu cấu hình, ý nghĩa và cách thức hoạt động thực tế.

| Tên Quy Tắc (Rule) | Kiểu dữ liệu cấu hình | Ý nghĩa & Cách hoạt động |
| :--- | :--- | :--- |
| **`required`** | `boolean` hoặc `function` | Nếu `true`, bắt buộc phải nhập dữ liệu. Nếu là checkbox/radio thì bắt buộc phải tích chọn. |
| **`remote`** | `string` (URL) hoặc `object` | Gửi một request Ajax về server để kiểm tra (Vd: Check xem email đăng ký đã tồn tại trong DB chưa). Nếu server trả về `"true"` là hợp lệ, `"false"` hoặc text là lỗi. |
| **`email`** | `boolean` | Kiểm tra chuỗi nhập vào có đúng định dạng `user@domain.com` hay không. |
| **`url`** | `boolean` | Kiểm tra định dạng link website (bắt buộc phải có `http://` hoặc `https://`). |
| **`date`** | `boolean` | Kiểm tra ngày tháng có hợp lệ không (tùy thuộc vào cấu hình trình duyệt). |
| **`dateISO`** | `boolean` | Bắt buộc ngày tháng phải chuẩn định dạng quốc tế: `YYYY-MM-DD`. |
| **`number`** | `boolean` | Kiểm tra có phải là số hay không (Chấp nhận cả số âm `-15` và số thập phân `12.5`). |
| **`digits`** | `boolean` | Chỉ chấp nhận các chữ số từ `0-9` (Không dấu âm, không dấu thập phân). |
| **`creditcard`** | `boolean` | Kiểm tra định dạng số thẻ tín dụng dựa trên thuật toán Luhn (Visa, MasterCard...). |
| **`equalTo`** | `string` (Selector) | Kiểm tra giá trị ô này có giống hệt ô được chỉ định không (Vd: `equalTo: "#password"`). |
| **`maxlength`** | `number` | Số lượng ký tự tối đa được phép nhập. |
| **`minlength`** | `number` | Số lượng ký tự tối thiểu bắt buộc phải nhập. |
| **`rangelength`** | `array [min, max]` | Giới hạn số ký tự trong khoảng. Ví dụ: `[6, 20]` (từ 6 đến 20 ký tự). |
| **`max`** | `number` | Giá trị số tối đa được nhập (Dành cho kiểu dữ liệu số). |
| **`min`** | `number` | Giá trị số tối thiểu được nhập (Dành cho kiểu dữ liệu số). |
| **`range`** | `array [min, max]` | Giá trị số phải nằm trong khoảng từ `min` đến `max`. Ví dụ: `[18, 100]`. |
| **`step`** | `number` | Giá trị nhập vào phải là bội số của số cấu hình. Ví dụ: `step: 5` thì chỉ được nhập `5, 10, 15...` |

---

## 💡 Ví dụ áp dụng nhanh vào Code mẫu

```javascript
$("#myForm").validate({
    rules: {
        field_name: {
            required: true,
            minlength: 6,
            range: [10, 50]
        }
    }
});