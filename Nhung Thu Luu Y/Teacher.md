# HƯỚNG DẪN CHUYỂN ĐỔI HTML/CSS SANG REACTJS

## 1. TỔNG QUAN VỀ SỰ KHÁC BIỆT HTML/CSS VÀ REACT

### HTML/CSS (Câu 1 - 5 điểm)
- Viết trực tiếp vào file `.html`
- Dữ liệu hiển thị tĩnh (hard-code)
- Không có khái niệm component, state, props
- Xử lý sự kiện bằng JavaScript thuần

### ReactJS (Câu 2 - 5 điểm)
- Sử dụng JSX (JavaScript XML)
- Tách giao diện thành các component riêng biệt
- Có state để quản lý dữ liệu động
- Có props để truyền dữ liệu giữa các component
- Xử lý sự kiện bằng React event handler

---

## 2. QUY TRÌNH LÀM BÀI

### Bước 1: Hoàn thành Câu 1 (HTML/CSS)
**Mục tiêu:** Xây dựng giao diện hoàn chỉnh bằng HTML/CSS/Bootstrap

**Cách làm:**
1. Tạo thư mục `html/` với cấu trúc:
   ```
   html/
   ├── index.html
   ├── css/style.css
   └── data/data.js
   ```

2. Viết giao diện HTML thuần với:
   - Header (tiêu đề trang)
   - Form nhập liệu (input cho tên, giá, mô tả...)
   - Bảng/ul hiển thị sản phẩm (ít nhất 5 dòng hard-code)
   - Footer (nếu có)

3. Tạo file `data.js` với mảng `list` chứa 5 đối tượng có định dạng JSON:
   ```javascript
   const list = [
     { id: 1, name: "Sản phẩm 1", price: 100000, description: "Mô tả 1" },
     { id: 2, name: "Sản phẩm 2", price: 200000, description: "Mô tả 2" },
     // ... thêm 3 sản phẩm nữa
   ];
   ```

4. Style bằng CSS/Bootstrap để giao diện đẹp

**Lưu ý:** Câu này làm HOÀN TOÀN RIÊNG, không liên quan React

---

### Bước 2: Chuyển đổi sang React (Câu 2)

#### Phần A: Hiển thị giao diện tĩnh (2 điểm)

**Nguyên tắc:** Tách giao diện HTML thành 3 component riêng

**Cách làm:**

1. **Tạo project React:**
   ```bash
   npx create-vite@latest reactjs --template react
   cd reactjs
   npm install
   ```

2. **Tạo cấu trúc thư mục:**
   ```
   reactjs/
   └── src/
       ├── App.jsx
       ├── main.jsx
       ├── components/
       │   ├── Header.jsx
       │   ├── Form.jsx
       │   └── Table.jsx
       ├── data/data.js
       └── styles/app.css
   ```

3. **Tách component từ giao diện HTML:**

   **Header.jsx** - Phần tiêu đề:
   ```jsx
   function Header() {
     return (
       <header>
         {/* Copy phần HTML của header vào đây */}
         {/* Ví dụ: <h1>Quản lý sản phẩm</h1> */}
       </header>
     );
   }
   export default Header;
   ```

   **Form.jsx** - Phần form nhập liệu:
   ```jsx
   function Form() {
     return (
       <form>
         {/* Copy phần HTML của form vào đây */}
         {/* Ví dụ: input tên, giá, mô tả, nút Thêm mới */}
       </form>
     );
   }
   export default Form;
   ```

   **Table.jsx** - Phần bảng/ul hiển thị:
   ```jsx
   function Table() {
     return (
       <table>
         {/* Copy phần HTML của bảng vào đây */}
         {/* QUAN TRỌNG: Phải có 5 dòng <tr> hard-code */}
         {/* HOẶC 5 dòng <li> nếu dùng ul */}
       </table>
     );
   }
   export default able;
   ```

4. **Import và render trong App.jsx:**
   ```jsx
   import Header from './components/Header';
   import Form from './components/Form';
   import Table from './components/Table';

   function App() {
     return (
       <div>
         <Header />
         <Form />
         <Table />
       </div>
     );
   }
   export default App;
   ```

**Điểm cần đạt:** Giao diện hiển thị giống hệt HTML/CSS, đã tách component và import vào App.jsx

---

#### Phần B: Hiển thị dữ liệu động (1.5 điểm)

**Nguyên tắc:** Đọc dữ liệu từ `data.js` và hiển thị bằng `.map()`

**Cách làm:**

1. **đã có file `data.js`** (tương tự Câu 1):
   ```javascript
   export const list = [
     { id: 1, name: "Sản phẩm 1", price: 100000 },
     { id: 2, name: "Sản phẩm 2", price: 200000 },
     // ... thêm 3 sản phẩm nữa
   ];
   ```

2. **Sử dụng useState để quản lý dữ liệu:**
   ```jsx
   import { useState } from 'react';
   import { list as initiallist } from '../data/data';

   function App() {
     const [list, setlist] = useState(initiallist);
     
     return (
       <div>
         <Header />
         <ProductForm />
         <ProductTable list={list} />
       </div>
     );
   }
   ```

3. **Hiển thị dữ liệu động trong ProductTable:**
   ```jsx
   function ProductTable({ list }) {
     return (
       <table>
         <thead>
           <tr>
             <th>ID</th>
             <th>Tên</th>
             <th>Giá</th>
           </tr>
         </thead>
         <tbody>
           {list.map((product) => (
             <tr key={product.id}>
               <td>{product.id}</td>
               <td>{product.name}</td>
               <td>{product.price}</td>
             </tr>
           ))}
         </tbody>
       </table>
     );
   }
   ```

**Điểm cần đạt:** Dữ liệu hiển thị từ `data.js`, có thể cập nhật khi state thay đổi

---

#### Phần C: Chức năng thêm mới (1.5 điểm)

**Nguyên tắc:** Xử lý sự kiện click nút "Thêm mới" để lấy dữ liệu từ input và cập nhật state

**Cách làm:**

1. **Tạo state cho input trong App.jsx:**
   ```jsx
   const [newProduct, setNewProduct] = useState({
     name: '',
     price: '',
     description: ''
   });
   ```

2. **Xử lý sự kiện onChange trong ProductForm:**
   ```jsx
   function ProductForm({ newProduct, setNewProduct, onAdd }) {
     const handleChange = (e) => {
       const { name, value } = e.target;
       setNewProduct(prev => ({
         ...prev,
         [name]: value
       }));
     };

     return (
       <form>
         <input 
           name="name"
           value={newProduct.name}
           onChange={handleChange}
           placeholder="Tên sản phẩm"
         />
         {/* Các input khác tương tự */}
         <button type="button" onClick={onAdd}>Thêm mới</button>
       </form>
     );
   }
   ```

3. **Xử lý sự kiện thêm mới trong App.jsx:**
   ```jsx
   const handleAdd = () => {
     const newId = list.length + 1;
     const productToAdd = {
       id: newId,
       ...newProduct
     };
     setlist(prev => [...prev, productToAdd]);
     // Reset input
     setNewProduct({ name: '', price: '', description: '' });
   };

   // Truyền props cho ProductForm
   <ProductForm 
     newProduct={newProduct} 
     setNewProduct={setNewProduct} 
     onAdd={handleAdd} 
   />
   ```

**Điểm cần đạt:** Click nút "Thêm mới" sẽ thêm sản phẩm mới vào bảng/ul

---

## 3. TỔNG KẾT BAREM ĐIỂM CÂU 2

| Phần | Điểm | Yêu cầu |
|------|------|---------|
| A | 2.0 | Tách giao diện HTML thành 3 component, import vào App.jsx, hiển thị 5 dòng hard-code |
| B | 1.5 | Hiển thị dữ liệu động từ `data.js` bằng `.map()` |
| C | 1.5 | Xử lý sự kiện thêm mới: lấy input → cập nhật state → hiển thị |
| **Tổng** | **5.0** | |

---

## 4. LƯU Ý QUAN TRỌNG

1. **KHÔNG** viết toàn bộ giao diện trong 1 component duy nhất
2. **PHẢI** tách thành ít nhất 3 component: Header, ProductForm, ProductTable
3. **PHẢI** có 5 dòng hard-code trong phần hiển thị (trước khi làm phần B)
4. **PHẢI** sử dụng `useState` để quản lý dữ liệu
5. **PHẢI** sử dụng `.map()` để hiển thị dữ liệu động
6. **PHẢI** xử lý sự kiện onChange và onClick

---

## 5. THỨ TỰ LÀM BÀI KHUYẾN NGHỊ

1. ✅ Hoàn thành Câu 1 (HTML/CSS) - 5 điểm
2. ✅ Tạo project React, tách component, hiển thị hard-code (2 điểm)
3. ✅ Thêm dữ liệu động từ `data.js` (1.5 điểm)
4. ✅ Xử lý chức năng thêm mới (1.5 điểm)
5. ✅ Kiểm tra lại toàn bộ

**Làm lần lượt, KHÔNG nhảy cóc!**
