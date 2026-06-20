import React from 'react';

function StudentForm() {
    return (
        <>
        <div className="section-title d-flex align-items-center gap-2 mb-3">
          <h2 className="mb-0">Thêm sinh viên</h2>
          <span className="badge rounded-pill badge-tag">Biểu mẫu</span>
        </div>

        <form className="card card-edu p-4">
          <div className="mb-3">
            <label htmlFor="ho-ten" className="form-label">Họ và tên</label>
            <input
              type="text"
              className="form-control"
              id="ho-ten"
              placeholder="Ví dụ: Nguyễn Văn An"
            />
          </div>

           <div className="mb-3">
            <label htmlFor="gioi-tinh" className="form-label d-block">Giới tính</label>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gioi-tinh" id="nam" />
            <label htmlFor="nam" className="form-check-label"> Nam </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="gioi-tinh" id="nu" />
            <label htmlFor="nu" className="form-check-label"> Nữ </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="khoa-hoc" className="form-label">Khóa học</label>
            <select className="form-select" id="khoa-hoc">
              <option value="">-- Chọn khóa học --</option>
              <option value="web">Lập trình Web</option>
              <option value="ctdl">Cấu trúc dữ liệu và giải thuật</option>
              <option value="csdl">Cơ sở dữ liệu</option>
              <option value="mmt">Mạng máy tính</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="diem" className="form-label">Điểm trung bình</label>
            <input
              type="number"
              className="form-control"
              id="diem"
              step="0.1"
              min="0"
              max="10"
              placeholder="0 - 10"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="trang-thai" className="form-label">Trạng thái</label>
            <select className="form-select" id="trang-thai">
              <option value="dang-hoc">Đang học</option>
              <option value="da-hoan-thanh">Đã hoàn thành</option>
              <option value="tam-ngung">Tạm ngừng</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="ghi-chu" className="form-label">Ghi chú</label>
            <textarea
              className="form-control"
              id="ghi-chu"
              rows="2"
              placeholder="Ghi chú thêm (nếu có)"
            ></textarea>
          </div>

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-navy">Thêm sinh viên</button>
            <button type="reset" className="btn btn-outline-navy">Làm mới</button>
          </div>
        </form>
    </>
    );
}

export default StudentForm;