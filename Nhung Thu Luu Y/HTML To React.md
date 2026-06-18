Bo index.css di

✅ class → className
✅ for → htmlFor
✅ Tất cả thẻ phải đóng: <br />, <img />
✅ Inline style → object: style={{ color: 'red' }}
✅ Comment: {/* comment */}
✅ Fragment <> </> nếu return 2+ element

❌ onClick, onChange, onSubmit, v.v. (không dùng)
❌ event.preventDefault() (không cần)
❌ State/useState (nếu chỉ tĩnh)

function TaskCard() {
  return (
    <div className="card">
      <h5 className="card-title">Tiêu đề công việc</h5>
      <button className="btn btn-primary">✏️</button>
      <label htmlFor="taskName">Tên:</label>
      <input id="taskName" type="text" className="form-control" />
    </div>
  );
}



# HTML → React: Hướng Dẫn Convert

## 1. Những Thay Đổi Bắt Buộc

### Lớp CSS
```html
<!-- HTML -->
<div class="container row">

<!-- React JSX -->
<div className="container row">
```

### Label cho Input
```html
<!-- HTML -->
<label for="username">Tên:</label>
<input id="username" type="text" />

<!-- React JSX -->
<label htmlFor="username">Tên:</label>
<input id="username" type="text" />
```

### Inline Style
```html
<!-- HTML -->
<div style="color: red; font-size: 20px;">

<!-- React JSX -->
<div style={{ color: 'red', fontSize: '20px' }}>
```

### Tất Cả Thẻ Phải Đóng
```html
<!-- ❌ Sai -->
<img src="image.jpg">
<input type="text">
<br>

<!-- ✅ Đúng -->
<img src="image.jpg" />
<input type="text" />
<br />
```

### Comment
```jsx
<!-- HTML -->
<!-- Đây là comment -->

/* React JSX */
{/* Đây là comment */}
```

### Fragment (Return Nhiều Element)
```jsx
// ❌ Sai - không thể return 2 thẻ cùng lúc
function Component() {
  return (
    <div>...</div>
    <div>...</div>
  );
}

// ✅ Đúng - dùng Fragment <>
function Component() {
  return (
    <>
      <div>...</div>
      <div>...</div>
    </>
  );
}
```

---

## 2. Những Thứ Chỉ Dùng Khi Có JavaScript

### Event Handlers (onclick → onClick)
```html
<!-- HTML -->
<button onclick="handleClick()">Nhấn tôi</button>

<!-- React JSX (khi có xử lý sự kiện) -->
<button onClick={() => handleClick()}>Nhấn tôi</button>
```

### Boolean Attributes
```html
<!-- HTML -->
<input disabled>
<form novalidate>

<!-- React JSX -->
<input disabled={true} />
<form noValidate>
```

### Event Listeners
```jsx
onChange={() => setValue(e.target.value)}
onSubmit={(e) => { e.preventDefault(); ... }}
onBlur={() => validate()}
```

---

## 3. Lưu Ý Khi Convert

| Attribute | HTML | React |
|-----------|------|-------|
| `class` | `class="btn"` | `className="btn"` |
| `for` | `for="id"` | `htmlFor="id"` |
| `style` | `style="color:red"` | `style={{color:'red'}}` |
| `data-*` | `data-id="123"` | `data-id="123"` (giữ nguyên) |
| `onclick` | `onclick="fn()"` | `onClick={fn}` |
| `novalidate` | `novalidate` | `noValidate` |
| `readonly` | `readonly` | `readOnly` |
| `maxlength` | `maxlength="10"` | `maxLength="10"` |

---

## 4. Ví Dụ Thực Tế: HTML → JSX

### ❌ Sai
```jsx
function Card() {
  return (
    <div class="card mb-3 border-0">
      <h5 class="card-title">Tiêu đề</h5>
      <p style="color: blue;">Nội dung</p>
      <button class="btn" onclick="alert('Hi')">Bấm</button>
      <label for="name">Tên:</label>
      <input id="name" type="text" disabled />
      <br>
    </div>
  );
}
```

### ✅ Đúng
```jsx
function Card() {
  return (
    <div className="card mb-3 border-0">
      <h5 className="card-title">Tiêu đề</h5>
      <p style={{ color: 'blue' }}>Nội dung</p>
      <button className="btn" onClick={() => alert('Hi')}>Bấm</button>
      <label htmlFor="name">Tên:</label>
      <input id="name" type="text" disabled={true} />
      <br />
    </div>
  );
}
```

---

## 5. Khi Nào Không Cần Event Handler (Chỉ Tĩnh)

Nếu bạn chỉ render HTML mà không cần xử lý sự kiện:

✅ **Chỉ cần:**
- `className` (thay `class`)
- `htmlFor` (thay `for`)
- Đóng tất cả thẻ
- `style` → object
- `{/* comment */}`

❌ **Không cần:**
- `onClick`, `onChange`, `onSubmit`, v.v.
- `event.preventDefault()`
- `useState`, `useEffect`

### Ví Dụ Tĩnh
```jsx
function TaskCard() {
  return (
    <div className="card">
      <h5 className="card-title">Tiêu đề công việc</h5>
      <button className="btn btn-primary">✏️</button>
      <label htmlFor="taskName">Tên:</label>
      <input id="taskName" type="text" className="form-control" />
    </div>
  );
}
```

---

## 6. Danh Sách Kiểm Tra (Checklist)

- [ ] Đổi `class` → `className`
- [ ] Đổi `for` → `htmlFor`
- [ ] Đóng tất cả thẻ: `<br />`, `<img />`, `<input />`
- [ ] `style` → object: `{{ key: 'value' }}`
- [ ] Comment: `{/* */}`
- [ ] Nếu return 2+ element → dùng `<> </>`
- [ ] (Nếu cần xử lý) Đổi `onclick` → `onClick={fn}`
- [ ] (Nếu cần) Thêm `noValidate`, `readOnly`, v.v.

---

## 7. Tham Khảo Nhanh

**CamelCase Attributes cần chú ý:**
- `novalidate` → `noValidate`
- `readonly` → `readOnly`
- `maxlength` → `maxLength`
- `minlength` → `minLength`
- `contenteditable` → `contentEditable`
- `tabindex` → `tabIndex`
- `accesskey` → `accessKey`