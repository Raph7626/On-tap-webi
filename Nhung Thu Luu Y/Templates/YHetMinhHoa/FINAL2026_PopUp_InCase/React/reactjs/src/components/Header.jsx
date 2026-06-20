import React from "react";

function Header() {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success px-3">
            <div className="d-flex align-items-center gap-2">
                    <span className="bg-white text-success fw-bold px-2 py-1 rounded">TLU</span>
                    <div>
                    <div className="fw-semibold text-white">Quản lý hoạt động ngoại khóa</div>
                    <small className="text-white-50">Đăng ký và theo dõi hoạt động sinh viên</small>
                </div>
                </div>
                <div className="ms-auto d-flex gap-1">
                <a href="#" className="nav-link text-white active">Hoạt động</a>
                <a href="#" className="nav-link text-white-50">Sinh viên</a>
                <a href="#" className="nav-link text-white-50">Lịch trình</a>
                <a href="#" className="nav-link text-white-50">Thống kê</a>
                </div>
            </nav>
        </header>

    );

}

export default Header;