import React from "react";

function StudentRow(){
    return(
        <>
        <tr>
              <td>1</td><td>Hackathon 2026</td><td>CLB IT</td><td>Trực tiếp</td>
              <td><span className="badge bg-warning text-dark">Sắp diễn ra</span></td>
            </tr>
            <tr>
              <td>2</td><td>Workshop UI/UX</td><td>CLB IT</td><td>Trực tuyến</td>
              <td><span className="badge bg-info text-dark">Đang diễn ra</span></td>
            </tr>
            <tr>
              <td>3</td><td>Ngày hội thể thao</td><td>CLB Thể thao</td><td>Trực tiếp</td>
              <td><span className="badge bg-success">Hoàn thành</span></td>
            </tr>
            <tr>
              <td>4</td><td>Triển lãm tranh</td><td>CLB Nghệ thuật</td><td>Trực tiếp</td>
              <td><span className="badge bg-warning text-dark">Sắp diễn ra</span></td>
            </tr>
            <tr>
              <td>5</td><td>Ngày hội tình nguyện</td><td>CLB Tình nguyện</td><td>Trực tiếp</td>
              <td><span className="badge bg-danger">Đã hủy</span></td>
            </tr>
            </>
    );
}

export default StudentRow;