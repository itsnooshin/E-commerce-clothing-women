import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Products";

interface Types {
  category: string;
}

export default function RecommondProduct(props: PropsWithChildren<Types>) {
  const { category } = props;
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (store: RootState) => store.product
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(
    items.filter((items) => items.product_category === category).slice(0, 3)
  );
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
            {filterProduct.map((item) => (
              <Grid item xs={12} md={4}>
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
