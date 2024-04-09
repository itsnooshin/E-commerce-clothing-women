"use client";
import NavBar from "@/src/components/layout/NavBar";
import BannerHeader from "@/src/components/headers/BannerHeader";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import { useEffect, useState } from "react";
import FilterCollection from "@/src/components/layout/FilterCollection";
import ProductMain from "@/src/components/layout/ProductMain";
import SkeletonProductCollection from "@/src/components/utility/SkeletonProductCollection";
import LoadingButton from "@/src/components/layout/LoadingButton";
import CollectionHeader from "@/src/components/headers/CollectionHeader";
import CollectionImageBanner from "@/src/components/layout/CollectionImage";
import Footer from "@/src/components/layout/Footer";

function page() {
  const [displayCount, setDisplayCount] = useState<number>(6);
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (store: RootState) => store.product
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  function handleMoreData() {
    setDisplayCount((prev) => prev + 6);
  }
  return (
    <>
      <BannerHeader />
      <NavBar />
      <CollectionHeader />
      <Box sx={{ mt: 4 }}>
        <CollectionImageBanner />
      </Box>
      <Container sx={{ marginTop: "2rem" }}>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          {loading ? (
            <Skeleton variant="text" width="90px" />
          ) : (
            <Typography>{items.length} items</Typography>
          )}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterCollection />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2} sx={{ marginBottom: "3rem" }}>
              {loading ? (
                <Grid
                  container
                  spacing={{ xs: 2 }}
                  item
                  sx={{ marginBottom: "5rem" }}
                >
                  <SkeletonProductCollection displayCount={displayCount} />
                </Grid>
              ) : (
                <ProductMain items={items} count={displayCount} />
              )}
            </Grid>
            <LoadingButton
              items={items}
              loading={loading}
              count={displayCount}
              handleData={handleMoreData}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default page;
