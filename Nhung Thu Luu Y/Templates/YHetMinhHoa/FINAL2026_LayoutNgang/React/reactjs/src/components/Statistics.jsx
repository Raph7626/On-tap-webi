import React from "react";

function Statistics() {
    return (
        <div className="row g-0 bg-white border-bottom">

            <div className="col text-center py-3 border-end">
            <div className="fs-3 fw-bold text-primary">5</div>
            <small className="text-muted">TỔNG ĐƠN</small>
            </div>
            <div className="col text-center py-3 border-end">
            <div className="fs-3 fw-bold text-primary">2</div>
            <small className="text-muted">ĐANG GIAO</small>
            </div>
            <div className="col text-center py-3">
            <div className="fs-3 fw-bold text-primary">1</div>
            <small className="text-muted">ĐÃ GIAO</small>
            </div>

        </div>
    )
}

export default Statistics;