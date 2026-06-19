import React from "react";
import ShipmentRow from "./ShipmentRow";    

function ShipmentTable() {
    return (
        <table className="table table-sm table-hover">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>MÃ ĐƠN</th>
                  <th>NGƯỜI NHẬN</th>
                  <th>ĐỊA ĐIỂM</th>
                  <th>TRẠNG THÁI</th>
                </tr>
              </thead>
              <tbody id="table-body">
                <ShipmentRow />
              </tbody>
            </table>
    );
}

export default ShipmentTable;