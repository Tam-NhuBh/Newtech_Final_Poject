// ProjectDetail.js
import React from 'react';
const projectDetailData = [
  {
    id: 1,
    tenDeTai: "Dự án 1",
    tenGiaoVien: "Nguyễn Văn A",
    ngayBatDau: "01/01/2023",
    moTaDeTai: "Mô tả về dự án 1",
    danhSachSinhVien: [
      { masv: "14100001", hoten: "Nguyễn Thị A" },
      { masv: "14100002", hoten: "Trần Văn B" },
    ],
  },
  {
    id: 2,
    tenDeTai: "Dự án 2",
    tenGiaoVien: "Trần Thị B",
    ngayBatDau: "02/01/2023",
    moTaDeTai: "Mô tả về dự án 2",
    danhSachSinhVien: [
      { masv: "14100003", hoten: "Lê Văn C" },
      { masv: "14100004", hoten: "Phạm Thị D" },
    ],
  },
  // Thêm các dự án khác nếu cần
];
const ProjectDetail = ({ match }) => {
  const projectId = match.params.id;
  // Giả sử data là một mảng chứa tất cả các dự án

  const project = projectDetailData.find((item) => item.id === parseInt(projectId, 10));

  if (!project) {
    return <div>Không tìm thấy dự án</div>;
  }

  const handleRegister = () => {
    // Xử lý đăng ký dự án (đặt logic xác nhận đăng ký ở đây)
    alert('Đăng ký thành công!');
  };

  return (
    <div>
      <h2>{project.tenDeTai}</h2>
      <p>
        <strong>Tên giáo viên hướng dẫn:</strong> {project.tenGiaoVien}
      </p>
      <p>
        <strong>Ngày bắt đầu:</strong> {project.ngayBatDau}
      </p>
      <p>
        <strong>Mô tả đề tài:</strong> {project.moTaDeTai}
      </p>

      <h3>Danh sách sinh viên đã đăng ký:</h3>
      <table>
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
          </tr>
        </thead>
        <tbody>
          {project.danhSachSinhVien.map((sinhVien) => (
            <tr key={sinhVien.masv}>
              <td>{sinhVien.masv}</td>
              <td>{sinhVien.hoten}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleRegister}>Xác nhận đăng ký</button>
    </div>
  );
};

export default ProjectDetail;
