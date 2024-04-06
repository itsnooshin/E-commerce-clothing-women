"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { getSingleproduct } from "@/src/helper";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default async function pageDetail({ params }: any) {
  const [selectedSize, setSelectSize] = useState<string[]>([]);
  const { singleProduct: product } = await getSingleproduct(params.id);

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

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
          {/* display the product grid */}

          {/* <Box>
              <Image
                src={product.product_img[0]}
                width={500}
                height={500}
                style={{ objectFit: "cover" }}
                alt="image for detail product"
              />
            </Box>
          // </Box> */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  overflowY: "scroll",
                  height: "500px",
                }}
              >
                {product.product_img.map((image) => (
                  <Image
                    src={image}
                    width={120}
                    height={120}
                    style={{ objectFit: "cover" }}
                    alt="image for detail product"
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <Image
                  src={product.product_img[0]}
                  width={400}
                  height={500}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="image for detail product"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Typography
                  variant="h6"
                  fontWeight={"bold"}
                  fontFamily={"inherit"}
                >
                  {product.product_name.split(" ").slice(0, 2).join(" ")}
                </Typography>
                <Typography sx={{ width: "580px" }}>
                  {product.product_description}
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Typography>Colors</Typography>
                <Typography>{product.product_color}</Typography>
              </Box>
              <Box
                sx={{
                  mt: 7,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    width: "550px",
                  }}
                >
                  <Typography sx={{ color: "#868686" }}>Size Guide</Typography>
                </Box>
                <FormControl sx={{ m: 1, width: "550px", marginLeft: 0 }}>
                  <Select
                    sx={{
                      marginBottom: 0,
                      width: 550,
                      height: 50,
                    }}
                    displayEmpty
                    value={selectedSize}
                    MenuProps={{
                      disableScrollLock: true,
                      PaperProps: {},
                    }}
                    renderValue={(selectedSize) => {
                      if (selectedSize.length === 0) {
                        return (
                          <Typography sx={{ fontWeight: "bold" }}>
                            Size
                          </Typography>
                        );
                      }
                      return selectedSize.join(", ");
                    }}
                  >
                    {product.product_size.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#5A6D57",
                    width: "550px",
                  }}
                >
                  <Button
                    sx={{
                      color: "#fff",
                      padding: "0.5rem",
                      textAlign: "center",
                    }}
                  >
                    Add to cart ${product.procuct_price}
                  </Button>
                </Box>
              </Box>
              {/* <Box sx={{ pt: 16 }}>nnn</Box> */}
            </Grid>
          </Grid>
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
