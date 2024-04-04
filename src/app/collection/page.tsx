"use client";
import NavBar from "@/src/components/layout/NavBar";
import BannerHeader from "@/src/components/headers/BannerHeader";
import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import collection from "@/public/ffdslfs.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import { useEffect, useState } from "react";
import FilterCollection from "@/src/components/layout/FilterCollection";

function page() {
  const [displayCount, setDisplayCount] = useState(6);

  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (store: RootState) => store.product
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box sx={{ display: "flex", gap: "15px", mt: 3 }}>
          <Link style={{ color: "#748C70" }} href={"/"}>
            Home
          </Link>
          <Typography>/</Typography>
          <Typography>Shop All</Typography>
        </Box>
      </Container>
      <Box sx={{ mt: 4 }}>
        <Image
          src={collection}
          style={{ width: "100%", objectFit: "cover" }}
          width={600}
          height={600}
          alt="banner for collection"
          quality={100}
          sizes="100vw"
        />
      </Box>
      <Container maxWidth ="lg" sx={{marginTop : '2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FilterCollection />
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ background: "red", width: "100%" }}>h1</Box>
          </Grid>
        </Grid>
      </Container>

      {loading && <p>loading....</p>}
      {/* {items?.slice(0, displayCount).map((item) => (
        <Box key={item.id}>
          <Typography>{item.product_name}</Typography>
        </Box>
      ))}
      {} */}
      {/* {displayCount < items?.length && (
        <button onClick={() => setDisplayCount((prev) => prev + 6)}>
          Load more
        </button>
      )} */}
    </>
  );
}

export default page;
