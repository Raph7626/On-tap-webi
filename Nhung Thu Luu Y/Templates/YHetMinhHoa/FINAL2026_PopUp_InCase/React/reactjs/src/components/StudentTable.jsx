import React from "react";
import StudentRow from "./StudentRow";

function StudentTable(){
    return(
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
          <tbody>
            <StudentRow />
          </tbody>
        </table>
    );
}

export default StudentTable;