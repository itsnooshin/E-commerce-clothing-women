import { Box } from "@mui/material";
import Image from "next/image";
import LogoMobile from "@/public/Logo-mobile.png";

function LogoMobileWebsite() {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems : 'center' , justifyContent : 'center' }}>
      <Image alt="Logo for shop" src={LogoMobile} />
    </Box>
  );
}

export default LogoMobileWebsite;
