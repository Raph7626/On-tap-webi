import React from "react";

function ShipmentRow() {
    return (
        <>
                <tr>
                  <td>1</td>
                  <td>SH001</td>
                  <td>Nguyễn Văn A</td>
                  <td>Hà Nội</td>
                  <td><span className="badge bg-warning text-dark">Chờ lấy</span></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SH002</td>
                  <td>Trần Thị B</td>
                  <td>Đà Nẵng</td>
                  <td><span className="badge bg-info text-dark">Đang giao</span></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>SH003</td>
                  <td>Lê Văn C</td>
                  <td>TP.HCM</td>
                  <td><span className="badge bg-success">Đã giao</span></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SH004</td>
                  <td>Phạm Thị D</td>
                  <td>Hải Phòng</td>
                  <td><span className="badge bg-warning text-dark">Chờ lấy</span></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>SH005</td>
                  <td>Hoàng Văn E</td>
                  <td>Cần Thơ</td>
                  <td><span className="badge bg-danger">Đã hủy</span></td>
                </tr>

        </>
    );
}

export default ShipmentRow;