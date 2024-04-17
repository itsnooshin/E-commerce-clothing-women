"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import SearchField from "@/src/components/headers/SearchField";
import FilterCollection from "@/src/components/layout/FilterCollection";
import NavBar from "@/src/components/layout/NavBar";
import UseProductsReturn from "@/src/hooks/UseProductsReturn";
import {
  Container,
  Skeleton,
  Typography,
  Box,
  TextField,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ImageNotFound from "@/public/Match not found.png";
import Footer from "@/src/components/layout/Footer";
import ProductMain from "@/src/components/layout/ProductMain";
import SkeletonProductCollection from "@/src/components/utility/SkeletonProductCollection";
import { Suspense, useState } from "react";
import SpinnerLoader from "@/src/components/layout/SpinnerLoader";

export default function page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") as string;
  const { items, loading, error } = UseProductsReturn();
  const [displayCount, setDisplayCount] = useState<number>(6);
  const queryItems =
    query?.length > 0
      ? items?.filter((item) =>
          item.product_category.toLowerCase().includes(query?.toLowerCase())
        )
      : [];

  

  if (loading) return <SpinnerLoader />;

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BannerHeader />
        <NavBar />
        <Container sx={{ marginTop: "2rem" }}>
          <Box
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {loading ? (
              <Skeleton variant="text" width="100px" />
            ) : (
              <Typography variant="h6" fontWeight={600} fontFamily={"inherit"}>
                Search Result
              </Typography>
            )}
          </Box>

          <SearchField initialQuery={query} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mb: 4,
            }}
          >
            {queryItems.length === 0 ? (
              <Typography>
                No results found for “{query}”. Check the spelling or use a
                different word or phrase.
              </Typography>
            ) : (
              <Typography>
                {queryItems.length} results found for “{query}”
              </Typography>
            )}
          </Box>
          {queryItems.length === 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 12,
              }}
            >
              <Image
                src={ImageNotFound}
                alt="image for not found"
                width={390}
                height={345}
                style={{ objectFit: "cover", width: "auto" }}
              />
            </Box>
          )}

          {queryItems.length > 0 && (
            <Grid container spacing={3}>
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
                    <ProductMain items={queryItems} count={displayCount} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </Container>
        <Footer />
      </Suspense>
    </>
  );
}
