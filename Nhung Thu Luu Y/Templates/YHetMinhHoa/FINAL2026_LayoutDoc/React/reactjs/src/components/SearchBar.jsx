import React from 'react';

function SearchBar() {
    return (
        <>
        <input type="text" className="form-control form-control-sm" style={{ width: '240px' }} placeholder="Tìm tên hoạt động, CLB..." />
        <div className="d-flex gap-1"></div>
        </>
    );
}

export default SearchBar;