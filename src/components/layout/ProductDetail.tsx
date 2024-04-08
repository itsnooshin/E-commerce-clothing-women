"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { getSingleproduct } from "@/src/helper";
import { Product } from "@/src/types/productTypes";
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
import React, { PropsWithChildren, useEffect, useState } from "react";

interface ProductValue {
  product: Product;
}

export default function ProductDetail(props: PropsWithChildren<ProductValue>) {
  const { product } = props;
  const {
    product_color,
    procuct_price,
    product_name,
    product_img,
    product_description,
    product_size,
  } = product;
  const allColor = product_color
    .filter((item) => item.hex)
    .map((item) => item.hex);
  const currentColorItem = product_color
    .filter((item) => item.currentColor)
    .map((item) => item.currentColor);

  const [colors, setColors] = useState(allColor);
  const [currentColor, setCurrentColor] = useState(currentColorItem[0]);
  const CurrentColor = product_color.find(
    (item) => item.hex === currentColor
  )?.name;

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
            <Typography>{product_name}</Typography>
          </Box>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={2}>
              <Box
                sx={{
                  overflowY: "scroll",
                  height: "500px",
                }}
              >
                {product_img.map((image) => (
                  <Image
                    key={image}
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
                  src={product_img[0]}
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
                  {product_name.split(" ").slice(0, 2).join(" ")}
                </Typography>
                <Typography sx={{ width: "580px" }}>
                  {product_description}
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
                <Typography>Color : {CurrentColor}</Typography>

                <Box sx={{ display: "flex", gap: "6px" }}>
                  <Box sx={{ display: "flex", gap: "6px" }}>
                    {colors.map((color) => (
                      <Button
                        onClick={() => setCurrentColor(color)}
                        key={color}
                        sx={{
                          background: currentColor === color ? null : color,
                          minWidth: "24px",
                          minHeight: "24px",
                          borderRadius: "50%",
                          position: "relative",
                          border:
                            currentColor === color
                              ? `2px solid ${currentColor}`
                              : color === "#FFFFFF"
                              ? "1px solid gray"
                              : null,

                          "&::before": {
                            content: '""',
                            position: "absolute",
                            display: "block",
                            width: currentColor === color ? "12px" : null,
                            height: currentColor === color ? "12px" : null,
                            background:
                              currentColor === color ? currentColor : null,
                            borderRadius: "50%",
                          },
                        }}
                      ></Button>
                    ))}
                  </Box>
                </Box>
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
                    value={""}
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
                      return selectedSize;
                    }}
                  >
                    {product_size.map((size) => (
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
                    Add to cart ${procuct_price}
                  </Button>
                </Box>
              </Box>
              {/* <Box sx={{ pt: 16 }}>nnn</Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
