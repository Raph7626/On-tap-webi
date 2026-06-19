import React from 'react';
import StudentRow from './StudentRow';

function StudentTable() {
    return (
        <div className="card card-edu">
          <div className="table-responsive">
            <table className="table table-edu align-middle mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mã SV</th>
                  <th>Họ và tên</th>
                  <th>Khóa học</th>
                  <th>Điểm TB</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <StudentRow />
            </table>
          </div>
        </div>

    );
}

export default StudentTable;