"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { getSingleproduct } from "@/src/helper";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function pageDetail({ params }: any) {
  const { singleProduct: product } = await getSingleproduct(params.id);

  return (
    <>
      <BannerHeader />
      <NavBar />
      <Box sx={{ pt: 3 }}>
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
            <Link href="/collection/all">
              <Typography sx={{ color: "#748C70" }}>Shop All</Typography>
            </Link>
            <span>/</span>
            <Typography>{product.product_name}</Typography>
          </Box>
        </Container>
      </Box>

      {/* <p> {product.id}</p>
      <p> {product.product_name}</p>
      <p> {product.procuct_price}</p>
      <p> {product.product_description}</p>
      <p>Bestseller: {product.product_bestsellere ? "Yes" : "No"}</p>
      <p>Category: {product.product_category}</p>
      <Image
        src={product.product_img[0]}
        alt="item product detaail"
        width={400}
        height={400}
        style={{ objectFit: "cover" }}
      /> */}
    </>
  );
}
