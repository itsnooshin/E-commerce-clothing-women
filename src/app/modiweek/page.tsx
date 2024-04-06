"use client";

import BannerHeader from "@/src/components/headers/BannerHeader";
import Footer from "@/src/components/layout/Footer";
import NavBar from "@/src/components/layout/NavBar";
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const page = () => {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link href="/">
            <Typography sx={{ color: "#748C70" }}> Home</Typography>
          </Link>
          <span>/</span>

          <Typography>New In</Typography>
        </Box>
      </Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
          mb: 10,
        }}
      >
        There is no context
      </Box>

      {/* footer */}
      <Footer />
    </>
  );
};

export default page;
