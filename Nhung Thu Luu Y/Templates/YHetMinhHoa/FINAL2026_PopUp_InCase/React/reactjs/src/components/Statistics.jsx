import React from "react";

function Statistics(){
    return(
        <div className="row g-0 bg-white border-bottom">
    <div className="col text-center py-3 border-end">
      <div className="fs-3 fw-bold text-success">5</div>
      <small className="text-muted">TỔNG HOẠT ĐỘNG</small>
    </div>
    <div className="col text-center py-3 border-end">
      <div className="fs-3 fw-bold text-success">2</div>
      <small className="text-muted">SẮP DIỄN RA</small>
    </div>
    <div className="col text-center py-3">
      <div className="fs-3 fw-bold text-success">1</div>
      <small className="text-muted">HOÀN THÀNH</small>
    </div>
  </div>
    );
}

export default Statistics;