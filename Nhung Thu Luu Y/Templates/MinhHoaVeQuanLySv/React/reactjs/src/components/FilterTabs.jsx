import React from "react";
import SearchBar from "./SearchBar";

function FilterTabs() {
    return (
       <>
  
        <div className="section-title d-flex align-items-center gap-2 mb-3">
          <h2 className="mb-0">Danh sách sinh viên</h2>
          <span className="badge rounded-pill badge-tag">5 sinh viên</span>
        </div>

        <div className="card card-edu mb-4 p-3">
          <div class="row g-2 align-items-center">
          <SearchBar />
          <div className="col-md-5">
                <div className="d-flex w-100 gap-2" role="group" aria-label="Lọc theo trạng thái">
                  <button type="button" className="btn btn-primary active">Tất cả</button>
                  <button type="button" className="btn btn-outline-success">Đang học</button>
                  <button type="button" className="btn btn-outline-info">Đã hoàn thành</button>
                  <button type="button" className="btn btn-outline-warning">Tạm ngừng</button>
                </div>
              </div>

        </div>
        </div>
       </>
    );
}

export default FilterTabs;