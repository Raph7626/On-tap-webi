import React from "react";

function Form() {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card border-0 shadow-sm rounded-3">
                <div className="card-header bg-primary text-white fw-bold py-3">
                    ➕ Thêm công việc mới
                </div>
                <div className="card-body p-3">
                    <form id="taskForm" noValidate onSubmit={(e) => e.preventDefault()}>
                        <div className="mb-3">
                            <label className="form-label small fw-bold">Nội dung công việc</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taskName"
                                name="taskName"
                                placeholder="Nhập tên công việc..."
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold">Độ ưu tiên</label>
                            <select className="form-select" id="taskPriority" name="taskPriority">
                                <option value="">-- Chọn độ ưu tiên --</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold">Trạng thái</label>
                            <select className="form-select" id="taskStatus" name="taskStatus">
                                <option value="">-- Chọn trạng thái --</option>
                                <option value="todo">To Do</option>
                                <option value="inprogress">In Progress</option>
                                <option value="done">Done</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 fw-bold py-2 mt-2" id="btnSubmit">
                            Thêm vào danh sách
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;