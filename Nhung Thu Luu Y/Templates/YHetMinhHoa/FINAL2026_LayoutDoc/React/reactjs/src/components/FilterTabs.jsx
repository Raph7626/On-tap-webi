import React from 'react';
import SearchBar from './SearchBar';

function FilterTabs() {
    return (
    <div class="card">
      <div class="card-body">
        <h6 class="fw-semibold">Danh sách hoạt động</h6>
        <small class="text-muted">Tìm kiếm và lọc theo trạng thái</small>

        <div class="d-flex justify-content-between align-items-center mt-3 mb-2 flex-wrap gap-2">
          <SearchBar />
            <div class="d-flex gap-1">
            <button class="btn btn-sm btn-success">Tất cả</button>
            <button class="btn btn-sm btn-outline-secondary">Sắp diễn ra</button>
            <button class="btn btn-sm btn-outline-secondary">Đang diễn ra</button>
            <button class="btn btn-sm btn-outline-secondary">Hoàn thành</button>
            </div>
        </div>
      </div>
    </div>
        );
    }

export default FilterTabs;