"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getProduct } from "@/src/featuers/product/productSlice";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CollectionImageBanner from "@/src/components/layout/CollectionImage";
import SkeletonProductCollection from "@/src/components/utility/SkeletonProductCollection";
import ProductMain from "@/src/components/layout/ProductMain";
import FilterCollection from "@/src/components/layout/FilterCollection";
import Footer from "@/src/components/layout/Footer";
import LoadingButton from "@/src/components/layout/LoadingButtonItems";
import ProductCollectionPants from "@/src/components/layout/ProductCollectionPants";
import ProductCollectionDress from "@/src/components/layout/ProductCollectionDress";

export default function page() {
  const [displayCount, setDisplayCount] = useState<number>(6);
  const dispatch = useDispatch<AppDispatch>();
  const { items, error, loading } = useSelector(
    (store: RootState) => store.product
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const ProductFilter = items.filter(
    (item) => item.product_category === "Dress"
  );

  function handleMoreData() {
    setDisplayCount((prev) => prev + 6);
  }

  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box sx={{ mt: 2 }}>
          <Breadcrumbs sx={{ color: "inherit" }}>
            <Link href={"/"} style={{ color: "#748C70" }}>
              Home
            </Link>
            <Typography>Dresses</Typography>
          </Breadcrumbs>
        </Box>

        {/* pants */}
      </Container>
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
            <Typography>{ProductFilter.length} items</Typography>
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
                <ProductCollectionDress items={ProductFilter} count={displayCount} />
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
