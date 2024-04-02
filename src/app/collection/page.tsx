"use client";
import NavBar from "@/src/components/layout/NavBar";
import BannerHeader from "@/src/components/headers/BannerHeader";
import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import collection from "@/public/ffdslfs.jpg";

const page = () => {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box sx={{ display: "flex", gap: "15px", mt: 3 }}>
          <Link style={{ color: "#748C70" }} href={"/"}>
            Home
          </Link>
          <Typography>/</Typography>
          <Typography>Shop All</Typography>
        </Box>
      </Container>
      <Box sx={{mt :4}}>
        <Image
          src={collection}
          style={{ width: "100%", objectFit: "cover" }}
          width={600}
          height={600}
          alt="banner for collection"
          quality={100}
          sizes="100vw"
        />
      </Box>
    </>
  );
};

export default page;
