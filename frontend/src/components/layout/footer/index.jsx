import { Box, Typography, styled } from "@mui/material";
import React from "react";

const WhiteBox = styled(Box)({
  background: "white",
  borderRadius: "8px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  padding: "16px",
  width: "100%",
  textAlign: "center", // Canh giữa nội dung theo chiều ngang
});
function Footer() {
  return (
    <WhiteBox>
      <Typography fontSize={12} color="#1a5792" mb={1}>
        Trường Đại Học Sư Phạm Kỹ Thuật - Tp.HCM
      </Typography>
      <Typography fontSize={12} color="#1a5792" mb={1}>
        Địa chỉ: 1 Võ Văn Ngân, Phường Linh Chiểu, Thành phố Thủ Đức, Thành
        phố Hồ Chí Minh.
      </Typography>
      <Typography fontSize={12} color="#1a5792" mb={1}>
        Điện thoại: (+84 - 028) 38968641 - (+84 -028) 38961333 - (+84 -028)
        37221223
      </Typography>
      <Typography fontSize={12} color="#1a5792" mb={1}>
        Hotline Tư vấn tuyển sinh: (+84 - 028) 37222764
      </Typography>
      <Typography fontSize={12} color="#1a5792" mb={1}>
        Fax: (+84 - 028) 38964922
      </Typography>
      <Typography fontSize={12} color="#1a5792">
        E-mail: ptchc@hcmute.edu.vn
      </Typography>
    </WhiteBox>
  );
}

export default Footer;
