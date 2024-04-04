import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductMain = () => {
  const [displayCount, setDisplayCount] = useState(6);
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (store: RootState) => store.product
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      {items?.slice(0, displayCount).map((item) => (
        <Grid item xs={12} sm={6} key={item.id}>
          <Image
            src={item.product_img[0]}
            style={{ objectFit: "cover" }}
            alt="image for product"
            width={400}
            height={400}
          />
        </Grid>
      ))}
    </>
  );
};

export default ProductMain;
