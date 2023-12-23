import React from "react";
import { Button, Box } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    title: "Thông báo tuyển sinh",
    date: "05/09/2023",
  },
  {
    id: 2,
    title: "Thông báo đăng kí đề tài",
    date: "13/11/2023",
  },
];

const columns = [
  {
    field: "id",
    headerName: "STT",
    valueGetter: (params) => {
      return params.value;
    },
  },
  { field: "title", headerName: "Tiêu đề", width: 300 },
  { field: "date", headerName: "Ngày đăng", width: 200 },
  {
    field: "",
    width: 200,
    renderCell: (params) => {
      return (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button variant="contained" size="small">
            Chi tiết
          </Button>
        </Box>
      );
    },
  },
];

function GuestMessage() {
  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Thông báo
      </Button>
      <Box height={300} width={"96%"} mt={4}         sx={{
        background: "rgba(255, 255, 255, 0.8)",
        padding: "1rem",
      }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </MainLayout>
  );
}

export default GuestMessage;
