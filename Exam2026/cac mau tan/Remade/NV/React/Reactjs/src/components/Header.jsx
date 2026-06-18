import React from "react";

function Header() {
    return (
      <header>
       <nav className="navbar navbar-light bg-white shadow-sm mb-4">
       <div className="container">
           <a className="navbar-brand fw-bold text-primary" href="#">📌 Task Manager</a>
           <span className="text-muted small fw-bold">Học viên: Hoàng Ngọc Tú — Lớp: 66HTTT1</span>
       </div>

       <div className="container">

        <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
                <div className="card text-center p-3 border-0 shadow-sm">
                    <div className="fs-2 fw-bold text-dark" id="statTotal">5</div>
                    <div className="text-muted small">Tổng số việc</div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="card text-center p-3 border-0 shadow-sm">
                    <div className="fs-2 fw-bold text-secondary" id="statTodo">2</div>
                    <div className="text-muted small">Cần làm</div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="card text-center p-3 border-0 shadow-sm">
                    <div className="fs-2 fw-bold text-warning" id="statProgress">2</div>
                    <div className="text-muted small">Đang làm</div>
                </div>
            </div>
            <div className="col-6 col-md-3">
                <div className="card text-center p-3 border-0 shadow-sm">
                    <div className="fs-2 fw-bold text-success" id="statDone">1</div>
                    <div className="text-muted small">Hoàn thành</div>
                </div>
            </div>
        </div>
        </div>
   </nav>
   </header>
    );
  }
  export default Header;