import React from "react";
import SearchBar from "./SearchBar";
import StudentForm from "./StudentForm";

function FilterTabs(){
    return(
        <>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 className="fw-semibold mb-0">Danh sách hoạt động</h5>
        <small className="text-muted">Quản lý các hoạt động ngoại khóa</small>
      </div>
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalThemHoatDong">
        + Thêm hoạt động
      </button>
    </div>

    
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
            <SearchBar />
          <div className="d-flex gap-1">
            <button className="btn btn-sm btn-success">Tất cả</button>
            <button className="btn btn-sm btn-outline-secondary">Sắp diễn ra</button>
            <button className="btn btn-sm btn-outline-secondary">Đang diễn ra</button>
            <button className="btn btn-sm btn-outline-secondary">Hoàn thành</button>
          </div>
        </div>
    </div>

    <StudentForm />
    </>
    );
}

export default FilterTabs;