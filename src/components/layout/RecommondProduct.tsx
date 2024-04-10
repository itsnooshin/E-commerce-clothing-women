import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";
import UseProductsReturn from "@/src/hooks/UseProductsReturn";

interface Types {
  category: string;
}

export default function RecommondProduct(props: PropsWithChildren<Types>) {
  const { category } = props;
  const { items, loading } = UseProductsReturn();

  const filterProduct = items
    .filter((items) => items.product_category === category)
    .slice(0, 3);

  if (loading) return;
  return (
    <>
      {items && (
        <Box>
          <Typography
            mb={7}
            variant="h5"
            fontFamily={"inherit"}
            fontWeight={600}
          >
            You May Also Like
          </Typography>
          <Grid container spacing={2}>
            {filterProduct.map((item , index) => (
              <Grid item xs={12} md={4} key={index}>
                <Products
                  item={item}
                  link={`/collection/all/products/${item.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
}
