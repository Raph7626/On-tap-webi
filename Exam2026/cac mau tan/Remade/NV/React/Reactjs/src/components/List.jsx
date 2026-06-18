import React from "react";

function List() {
    return (
        <div className="col-lg-8">
               <h4 className="fw-bold mb-3 text-dark">Nhiệm vụ của tôi (5)</h4>
               <div id="taskList">

                    <div class="card mb-3 border-0 shadow-sm rounded-3">
                        <div class="card-body p-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-2 text-dark">Thực hành xây dựng Layout UI bằng Figma Auto Layout</h6>
                                <div class="d-flex gap-2">
                                    <span class="badge bg-danger text-white small">Prior: HIGH</span>
                                    <span class="badge bg-success small">Done</span>
                                </div>
                            </div>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-secondary btn-sm border-0">✏️</button>
                                <button className="btn btn-outline-danger btn-sm border-0">🗑️</button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 shadow-sm rounded-3">
                        <div class="card-body p-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-2 text-dark">Thiết kế sơ đồ tuần tự (Sequence Diagram) hệ thống y tế</h6>
                                <div className="d-flex gap-2">
                                    <span className="badge bg-danger text-white small">Prior: HIGH</span>
                                    <span className="badge bg-warning text-dark small">In Progress</span>
                                </div>
                            </div>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-secondary btn-sm border-0">✏️</button>
                                <button className="btn btn-outline-danger btn-sm border-0">🗑️</button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 shadow-sm rounded-3">
                        <div class="card-body p-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-2 text-dark">Viết mã kết nối dữ liệu C# WinForms với SQL Server</h6>
                                    <div className="d-flex gap-2">
                                        <span className="badge bg-info text-dark small">Prior: MEDIUM</span>
                                        <span className="badge bg-secondary small">To Do</span>
                                    </div>
                            </div>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-secondary btn-sm border-0">✏️</button>
                                <button className="btn btn-outline-danger btn-sm border-0">🗑️</button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 shadow-sm rounded-3">
                        <div class="card-body p-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-2 text-dark">Ôn tập lý thuyết Triết học Mác - Lênin chương Hình thái kinh tế</h6>
                                <div className="d-flex gap-2">
                                    <span className="badge bg-light text-dark border small">Prior: LOW</span>
                                    <span className="badge bg-secondary small">To Do</span>
                                </div>
                            </div>
                            <div className="d-flex gap-1">
                                <button className="btn btn-outline-secondary btn-sm border-0">✏️</button>
                                <button className="btn btn-outline-danger btn-sm border-0">🗑️</button>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 border-0 shadow-sm rounded-3">
                        <div class="card-body p-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-2 text-dark">Tối ưu hóa SEO và áp dụng thẻ ngữ nghĩa Semantic HTML5</h6>
                                <div className="d-flex gap-2">
                                    <span className="badge bg-info text-dark small">Prior: MEDIUM</span>
                                    <span className="badge bg-warning text-dark small">In Progress</span>
                                </div>
                            </div>
                            <div class="d-flex gap-1">
                                <button class="btn btn-outline-secondary btn-sm border-0">✏️</button>
                                <button class="btn btn-outline-danger btn-sm border-0">🗑️</button>
                            </div>
                        </div>
                    </div>

                                </div>
                        </div>
        );
    }
    export default List;