import React from "react";

function StudentRow() {
    return (
        <tbody>
                <tr>
                  <td>1</td>
                  <td>SV001</td>
                  <td>Nguyễn Văn An</td>
                  <td>Lập trình Web (CSE391)</td>
                  <td>8.5</td>
                  <td>
                    <span className="badge bg-info text-dark">Đang học</span>
                  </td>
                  <td className="row-actions">
                    <a href="#" className="text-primary">Sửa</a>
                    <a href="#" className="text-danger">Xóa</a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SV002</td>
                  <td>Trần Thị Bích</td>
                  <td>Cấu trúc dữ liệu &amp; Giải thuật</td>
                  <td>9.2</td>
                  <td>
                    <span className="badge bg-success">Đã hoàn thành</span>
                  </td>
                  <td className="row-actions">
                    <a href="#" className="text-primary">Sửa</a>
                    <a href="#" className="text-danger">Xóa</a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SV003</td>
                  <td>Lê Hoàng Cường</td>
                  <td>Cơ sở dữ liệu</td>
                  <td>7.0</td>
                  <td>
                    <span className="badge bg-info text-dark">Đang học</span>
                  </td>
                  <td className="row-actions">
                    <a href="#" className="text-primary">Sửa</a>
                    <a href="#" className="text-danger">Xóa</a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SV004</td>
                  <td>Phạm Thị Diệu</td>
                  <td>Mạng máy tính</td>
                  <td>6.4</td>
                  <td>
                    <span className="badge bg-warning text-dark">Tạm ngừng</span>
                  </td>
                  <td className="row-actions">
                    <a href="#" className="text-primary">Sửa</a>
                    <a href="#" className="text-danger">Xóa</a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>SV005</td>
                  <td>Đỗ Minh Khoa</td>
                  <td>Lập trình Web (CSE391)</td>
                  <td>8.8</td>
                  <td>
                    <span className="badge bg-success">Đã hoàn thành</span>
                  </td>
                  <td className="row-actions">
                    <a href="#" className="text-primary">Sửa</a>
                    <a href="#" className="text-danger">Xóa</a>
                  </td>
                </tr>
              </tbody>
    );
}

export default StudentRow;