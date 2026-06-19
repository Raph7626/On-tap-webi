import React from "react";

function SearchBar() {
    return (
      <>
            <div className="col-md-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm theo Mã SV hoặc Họ tên..."
                  aria-label="Tìm kiếm sinh viên"
                />
                <button className="btn btn-outline-primary" type="button">Tìm</button>
              </div>
            </div>
      </>
    );
}

export default SearchBar;