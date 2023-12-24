import React from "react";
import { Button, Box } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    title: "Admission notification",
    date: "05/09/2023",
  },
  {
    id: 2,
    title: "Topic registration notification",
    date: "13/11/2023",
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    valueGetter: (params) => {
      return params.value;
    },
  },
  { field: "title", headerName: "Title", width: 300 },
  { field: "date", headerName: "Registration Date", width: 200 },
  {
    field: "",
    width: 200,
    renderCell: (params) => {
      return (
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button variant="contained" size="small">
            Details
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
        Notification
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
