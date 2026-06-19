import React from "react";

function ShipmentForm() {
    return (
        <div className="card">
          <div className="card-body">
            <h6 className="fw-semibold">Tạo đơn mới</h6>
            <small className="text-muted">Nhập thông tin vận chuyển</small>

            <div className="mt-3">
              <div className="mb-3">
                <label className="form-label">Người nhận</label>
                <input type="text" className="form-control form-control-sm" placeholder="Nhập tên người nhận" />
              </div>

              <div className="mb-3">
                <label className="form-label">Địa điểm</label>
                <select className="form-select form-select-sm">
                  <option value="">Chọn địa điểm</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                  <option>TP.HCM</option>
                  <option>Hải Phòng</option>
                  <option>Cần Thơ</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Loại hàng</label>
                <div className="d-flex gap-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="loai" id="thuong" checked/>
                    <label className="form-check-label" htmlFor="thuong">Thường</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="loai" id="nhanh"/>
                    <label className="form-check-label" htmlFor="nhanh">Nhanh</label>
                  </div>
                </div>
              </div>

              for

              <div className="mb-3">
                <label className="form-label">Trạng thái</label>
                <select className="form-select form-select-sm">
                  <option>Chờ lấy</option>
                  <option>Đang giao</option>
                  <option>Đã giao</option>
                  <option>Đã hủy</option>
                </select>
              </div>

              <button className="btn btn-primary w-100">Thêm đơn</button>
            </div>
          </div>
        </div>
    );
}

export default ShipmentForm;