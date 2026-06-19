import React from "react";

function SearchBar() {
    return (
        <div className="row g-2 align-items-center">
          <div className="col-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm theo Mã SV hoặc Họ tên..."
                aria-label="Tìm kiếm sinh viên"
              />
              <button className="btn btn-primary" type="button">Tìm</button>
            </div>
          </div>
        </div>
    );
}

export default SearchBar;