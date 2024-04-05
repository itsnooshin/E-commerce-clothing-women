"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { getSingleproduct } from "@/src/helper";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default async function getProductDetail({ params }: any) {
  const { singleProduct: product } = await getSingleproduct(params.id);

  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container sx={{ paddingLeft: 0 }}>
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
          <Link href="">
            <Typography>{product.product_name}</Typography>
          </Link>
        </Box>
      </Container>
      <p>hhhhhh</p>
    </>
  );
}
