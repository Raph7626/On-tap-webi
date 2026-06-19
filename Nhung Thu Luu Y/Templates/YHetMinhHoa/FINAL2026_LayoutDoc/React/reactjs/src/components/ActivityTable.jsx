import React from 'react';
import ActivityRow from './ActivityRow';

function ActivityTable() {
    return (
        <table className="table table-sm table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>HOẠT ĐỘNG</th>
              <th>CÂU LẠC BỘ</th>
              <th>HÌNH THỨC</th>
              <th>TRẠNG THÁI</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <ActivityRow />
          </tbody>
        </table>
    );
}

export default ActivityTable;