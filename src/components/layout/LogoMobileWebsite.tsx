import { Box } from "@mui/material";
import Image from "next/image";
import LogoMobile from "@/public/Logo-mobile.png";
import Link from "next/link";

function LogoMobileWebsite() {
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link href='/'>
        <Image alt="Logo for shop" src={LogoMobile} />
      </Link>
    </Box>
  );
}

export default LogoMobileWebsite;
