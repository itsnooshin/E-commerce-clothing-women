"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import CollectionHeader from "@/src/components/headers/CollectionHeader";
import CollectionImageBanner from "@/src/components/layout/CollectionImage";
import FilterCollection from "@/src/components/layout/FilterCollection";
import Footer from "@/src/components/layout/Footer";
import LoadingButtonItems from "@/src/components/layout/LoadingButtonItems";
import NavBar from "@/src/components/layout/NavBar";
import ProductMain from "@/src/components/layout/ProductMain";
import SpinnerLoader from "@/src/components/layout/SpinnerLoader";
import SkeletonProductCollection from "@/src/components/utility/SkeletonProductCollection";
import UseProductsReturn from "@/src/hooks/UseProductsReturn";
import { Box, Container, Skeleton, Typography, Grid } from "@mui/material";
import React, { useState } from "react";

export default function page() {
  const [displayCount, setDisplayCount] = useState<number>(6);
  const { items, loading, error } = UseProductsReturn();
  const filterBestSellers = items
    .filter((item) => item.product_bestsellere === true)
    .map((item) => item);

  function handleMoreData() {
    setDisplayCount((prev) => prev + 6);
  }

  if (loading) return <SpinnerLoader />;

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
                <ProductMain items={filterBestSellers} count={displayCount} />
              )}
            </Grid>
            <LoadingButtonItems
              items={filterBestSellers}
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
