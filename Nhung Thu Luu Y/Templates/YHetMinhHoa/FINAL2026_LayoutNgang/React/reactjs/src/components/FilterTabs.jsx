import React from "react";
import SearchBar from "./SearchBar";

function FilterTabs() {
    return (
        <div className="card">
          <div className="card-body">
            <h6 className="fw-semibold">Danh sách đơn vận chuyển</h6>
            <small className="text-muted">Tìm kiếm và lọc theo trạng thái</small>

            <div className="d-flex justify-content-between align-items-center mt-3 mb-2 flex-wrap gap-2">
                <SearchBar />
                <button className="btn btn-sm btn-primary">Tất cả</button>
                <button className="btn btn-sm btn-outline-secondary">Chờ lấy</button>
                <button className="btn btn-sm btn-outline-secondary">Đang giao</button>
                <button className="btn btn-sm btn-outline-secondary">Đã giao</button>
              </div>
            </div>
            </div>
        );
}

export default FilterTabs;