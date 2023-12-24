import React from "react";
import { Button, Box } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import pdfUrl from "../../assets/pdf/guestInstrument.pdf";

function GuestInstruction() {
  const downloadPDF = () => {
    window.open("https://drive.google.com/file/d/13eKliXMZJs4HBETKBnP1LoUaSpT1SKOn/view?usp=sharing", "_blank");
  };

  return (
    <MainLayout>
      <Button fullWidth size="large" variant="contained">
        Instruction
      </Button>
      <Box
        mt={4}
        display={"flex"}
        alignItems={"center"}
        flexDirection="column"
        gap={2}
        justifyContent={"center"}
        sx={{ cursor: "pointer" }}
      >
        <object data={pdfUrl} type="application/pdf" width="850px" height="350px">
          <p>Unable to display PDF. <a href={pdfUrl}>Download PDF</a> instead of viewing in the browser.</p>
        </object>
      </Box>
    </MainLayout>
  );
}

export default GuestInstruction;
