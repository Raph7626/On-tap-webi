import React from "react";

function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <div className="d-flex align-items-center gap-2">
        <span className="bg-white text-primary fw-bold px-2 py-1 rounded">TLU</span>
        <div>
            <div className="fw-semibold text-white">Quản lý đơn vận chuyển</div>
            <small className="text-white-50">Theo dõi và xử lý đơn giao hàng</small>
        </div>
        </div>
        <div className="ms-auto d-flex gap-1">
        <a href="#" className="nav-link text-white active">Đơn hàng</a>
        <a href="#" className="nav-link text-white-50">Đối tác</a>
        <a href="#" className="nav-link text-white-50">Theo dõi</a>
        <a href="#" className="nav-link text-white-50">Báo cáo</a>
        </div>
    </nav>
    )
}

export default Header;