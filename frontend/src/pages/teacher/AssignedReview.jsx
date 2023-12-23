import { Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import MainLayout from "../../components/layout/MainLayout";
import { list } from "../../utils/api/topic";
import { findUser } from "../../utils/api/user";

function AssignedReview() {
  const [currentUser, setCurrentUser] = useState({});
  const [assignedTopics, setAssignedTopics] = useState([]);

  useEffect(() => {
    // Hàm lấy danh sách đề tài được phân công phản biện
    const fetchAssignedTopics = async () => {
      try {
        const res = await list({ teacherReview: currentUser?._id });
        setAssignedTopics(res?.data?.map((e) => ({ id: e._id, ...e })));
      } catch (error) {
        console.error("Error fetching assigned topics:", error);
      }
    };

    // Kiểm tra và lấy thông tin người dùng hiện tại
    if (!currentUser?._id) {
      const fetchCurrentUser = async () => {
        try {
          const id = JSON.parse(localStorage.getItem("user"))._id;
          const res = await findUser(id);
          setCurrentUser(res.data);
        } catch (error) {
          console.error("Error fetching current user:", error);
        }
      };
      fetchCurrentUser();
    }

    fetchAssignedTopics();
  }, [currentUser]);

  const columns = [
    {
      field: "id",
      headerName: "Mã đề tài",
      width: 100,
      valueGetter: (params) => {
        return params.value;
      },
    },
    { field: "title", headerName: "Tiêu đề", width: 150 },
    { field: "description", headerName: "Mô tả", width: 150 },
    {
      field: "student",
      headerName: "Sinh viên thực hiện",
      width: 150,
      valueGetter: (params) => {
        return params.value?.name;
      },
    },
    {
      field: "teacher",
      headerName: "Giảng viên hướng dẫn",
      width: 200,
      valueGetter: (params) => {
        return params.value?.name;
      },
    },
    { field: "dayReivew", headerName: "Ngày phản biện", width: 200 },
  ];

  return (
    <MainLayout type="teacher">
      <Button fullWidth size="large" variant="contained">
        Đề tài được phân công phản biện
      </Button>
      <Box height={300} width={"96%"} mt={4}
        sx={{
          background: "rgba(255, 255, 255, 0.8)",
          padding: "1rem",
        }}
      >
        <DataGrid rows={assignedTopics} columns={columns} />
      </Box>
    </MainLayout>
  );
}

export default AssignedReview;
