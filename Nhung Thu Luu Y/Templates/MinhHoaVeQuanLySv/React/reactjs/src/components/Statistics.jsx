import React from "react";

function Statistics() {
    return (
    <div className="row g-3 mb-4">
      <div className="col-6 col-md-3">
        <div className="card card-edu stat-card h-100">
          <div className="card-body">
            <div className="stat-label">Tổng sinh viên</div>
            <div className="stat-value">5</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card card-edu stat-card h-100">
          <div className="card-body">
            <div className="stat-label">Đang học</div>
            <div className="stat-value text-dang-hoc">2</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card card-edu stat-card h-100">
          <div className="card-body">
            <div className="stat-label">Đã hoàn thành</div>
            <div className="stat-value text-da-hoan-thanh">2</div>
          </div>
        </div>
      </div>
      <div className="col-6 col-md-3">
        <div className="card card-edu stat-card h-100">
          <div className="card-body">
            <div className="stat-label">Điểm TB chung</div>
            <div className="stat-value">7.98</div>
          </div>
        </div>
      </div>
    </div>

    );
}

export default Statistics;
