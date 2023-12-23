import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import { findUser } from "../../utils/api/user";
import { create } from "../../utils/api/topic";
import { notify } from "../../utils/helpers/notify";
import SelectMajor from "../../components/common/SelectMajor";

const AdminSubTopic = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [topicTitle, setTopicTitle] = useState("");
  const [topicDescription, setTopicDescription] = useState("");
  const [topicMajor, setTopicMajor] = useState("");

  const clearFields = () => {
    setTopicTitle("");
    setTopicDescription("");
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await create({
        title: topicTitle,
        description: topicDescription,
        approveByManagement: 1,
        major: topicMajor,
        owner: currentUser?._id,
      });
      notify("success", "Added topic successfully");
      clearFields();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("user"))._id;
        const res = await findUser(id);
        setCurrentUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrentUser();
  }, []);

  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Register topic
      </Button>
      <Box mt={4}>
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} p={4} component={"form"} onSubmit={handleSubmit}>
          <FormSection
            topicTitle={topicTitle}
            setTopicTitle={setTopicTitle}
            topicDescription={topicDescription}
            setTopicDescription={setTopicDescription}
            topicMajor={topicMajor}
            setTopicMajor={setTopicMajor}
          />
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Register
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

const FormSection = ({
  topicTitle,
  setTopicTitle,
  topicDescription,
  setTopicDescription,
  topicMajor,
  setTopicMajor,
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Typography variant="subtitle2">Chuyên ngành:</Typography>
      </Grid>
      <Grid item xs={10}>
        <SelectMajor value={topicMajor} setValue={setTopicMajor} />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2">Tên đề tài:</Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          size="small"
          value={topicTitle}
          onChange={(e) => setTopicTitle(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle2">Mô tả đề tài:</Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          multiline
          rows={3}
          fullWidth
          value={topicDescription}
          onChange={(e) => setTopicDescription(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default AdminSubTopic;
