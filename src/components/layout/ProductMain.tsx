import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/src/types/productTypes";
import Link from "next/link";

interface ProductValue {
  items: Product[];
  count: number;
}

const ProductMain = (props: PropsWithChildren<ProductValue>) => {
  const { items, count } = props;

  return (
    <>
      {items?.slice(0, count).map((item) => (
        <Grid item xs={12} sm={6} key={item.id}>
          <Link
            href={{
              pathname: `/collection/all/products/${item.id}`,
              query: { name: `${item.product_name}-${item.product_color[0]}` },
            }}
            style={{ color: "inherit" }}
          >
            <Image
              src={item.product_img[0]}
              style={{ objectFit: "cover" }}
              alt="image for product"
              width={400}
              height={400}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "6px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                }}
              >
                <Typography sx={{ fontWeight: "700" }}>
                  {item.product_name.split(" ").slice(0, 2).join(" ")}
                </Typography>
                <Typography>
                  {item.product_name.split(" ").slice(2).join(" ")}
                </Typography>
                <Typography>T</Typography>
              </Box>

              <Box>
                <Typography sx={{ fontWeight: "700" }}>
                  ${item.procuct_price}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default ProductMain;
