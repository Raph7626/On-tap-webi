import React from 'react';

function Header() { 
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary header-navbar">
        <div className="container py-2">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <span className="brand-mark">Student TLU Edu Track</span>
            <small className="text-white-50">Hệ thống quản lý sinh viên & khóa học</small>
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Chuyển đổi điều hướng"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Sinh viên</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Khóa học</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Báo cáo</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </header>
    );
}

export default Header;