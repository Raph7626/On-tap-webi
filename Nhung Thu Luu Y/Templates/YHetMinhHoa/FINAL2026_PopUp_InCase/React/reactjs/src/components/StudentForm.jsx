import React from "react";

function StudentForm(){
    return(
        <div className="modal fade" id="modalThemHoatDong" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title fw-semibold">Đăng ký hoạt động mới</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">Tên hoạt động</label>
            <input type="text" className="form-control form-control-sm" placeholder="Nhập tên hoạt động" />
          </div>

          <div className="mb-3">
            <label className="form-label">Câu lạc bộ</label>
            <select className="form-select form-select-sm">
              <option value="">Chọn câu lạc bộ</option>
              <option>CLB IT</option>
              <option>CLB Thể thao</option>
              <option>CLB Nghệ thuật</option>
              <option>CLB Tình nguyện</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Hình thức</label>
            <div className="d-flex gap-3 pt-1">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="hinhthuc" id="tructiep" checked/>
                <label className="form-check-label" htmlFor="tructiep">Trực tiếp</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="hinhthuc" id="tructuyen"/>
                <label className="form-check-label" htmlFor="tructuyen">Trực tuyến</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Trạng thái</label>
            <select className="form-select form-select-sm">
              <option>Sắp diễn ra</option>
              <option>Đang diễn ra</option>
              <option>Hoàn thành</option>
              <option>Đã hủy</option>
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Hủy</button>
          <button type="button" className="btn btn-success btn-sm">Lưu</button>
        </div>

      </div>
    </div>
  </div>
    );
}

export default StudentForm;