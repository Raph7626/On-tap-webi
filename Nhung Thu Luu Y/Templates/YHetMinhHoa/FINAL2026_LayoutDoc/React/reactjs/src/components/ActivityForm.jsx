import React from 'react';

function ActivityForm() {
    return (
        <div className="card mb-3">
      <div className="card-body">
        <h6 className="fw-semibold">Đăng ký hoạt động mới</h6>
        <small className="text-muted">Nhập thông tin hoạt động</small>

        <div className="row g-3 mt-1">
          <div className="col-6">
            <label className="form-label">Tên hoạt động</label>
            <input type="text" className="form-control form-control-sm" placeholder="Nhập tên hoạt động" />
          </div>
          <div className="col-6">
            <label className="form-label">Câu lạc bộ</label>
            <select className="form-select form-select-sm">
              <option value="">Chọn câu lạc bộ</option>
              <option>CLB IT</option>
              <option>CLB Thể thao</option>
              <option>CLB Nghệ thuật</option>
              <option>CLB Tình nguyện</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label">Hình thức</label>
            <div className="d-flex gap-3 pt-1">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="hinhthuc" id="tructiep" checked/>
                <label className="form-check-label" for="tructiep">Trực tiếp</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="hinhthuc" id="tructuyen"/>
                <label className="form-check-label" for="tructuyen">Trực tuyến</label>
              </div>
            </div>
          </div>
          <div className="col-6">
            <label className="form-label">Trạng thái</label>
            <select className="form-select form-select-sm">
              <option>Sắp diễn ra</option>
              <option>Đang diễn ra</option>
              <option>Hoàn thành</option>
              <option>Đã hủy</option>
            </select>
          </div>
        </div>

        <button className="btn btn-success btn-sm mt-3">Thêm hoạt động</button>
      </div>
    </div>
    );
}

export default ActivityForm;