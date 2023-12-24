import React, { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Box, Button, Grid, TextField } from "@mui/material";
import SelectMajor from "../../components/common/SelectMajor";
import { create, deletePeriod, list } from "../../utils/api/period";
import { DataGrid } from "@mui/x-data-grid";
import { notify } from "../../utils/helpers/notify";
import ConfirmDelete from "../../components/common/ConfirmDelete";

function PeriodManagement() {
  const [timeOpen, setTimeOpen] = useState("");
  const [timeClose, setTimeClose] = useState("");
  const [major, setMajor] = useState("");
  const [listPeriod, setListPeriod] = useState([]);
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [idDelete, setIdDelete] = useState("");

  const columns = [
    {
      field: "major",
      headerName: "Major Name",
      width: 200,
      valueGetter: (params) => {
        return params.value?.name;
      },
    },
    { field: "timeOpen", headerName: "Open time", width: 200 },
    { field: "timeClose", headerName: "Close time", width: 200 },
    {
      field: "",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <Box display={"flex"} gap={2} alignItems={"center"}>
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                setIsOpenConfirmDelete(true);
                setIdDelete(params.row._id);
              }}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const getListPeriod = async () => {
    try {
      const res = await list();
      setListPeriod(res.data?.map((e) => ({ id: e._id, ...e })));
    } catch (error) {
      throw error;
    }
  };

  const handleDelete = async () => {
    try {
      await deletePeriod(idDelete);
      notify("success", "Delete successfully");
      setIsOpenConfirmDelete(false);
      getListPeriod();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreatePeriod = async (e) => {
    e.preventDefault();
    try {
      await create({ timeClose, timeOpen, major });
      getListPeriod();
      notify("success", "Create successfully");
    } catch (error) {
      notify("error", error?.response?.data?.message);
    }
    handleClear();
  };

  const handleClear = () => {
    setTimeOpen("");
    setTimeClose("");
    setMajor("");
  };

  useEffect(() => {
    getListPeriod();
  }, []);

  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Manage Topic Registration Time
      </Button>
      <Box mt={4} component={"form"} onSubmit={handleCreatePeriod}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Open time"
              placeholder="DD/MM/YYY"
              required
              value={timeOpen}
              onChange={(e) => setTimeOpen(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              label="Close time"
              placeholder="DD/MM/YYY"
              required
              value={timeClose}
              onChange={(e) => setTimeClose(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectMajor value={major} setValue={setMajor} />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box height={"70vh"} width={"100%"} mt={4}>
        <DataGrid rows={listPeriod} columns={columns} hideFooter={true} />
      </Box>
      <ConfirmDelete
        open={isOpenConfirmDelete}
        handleOk={handleDelete}
        handleClose={() => setIsOpenConfirmDelete(false)}
      />
    </MainLayout>
  );
}

export default PeriodManagement;
