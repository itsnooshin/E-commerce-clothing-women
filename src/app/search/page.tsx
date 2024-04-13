"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import FilterCollection from "@/src/components/layout/FilterCollection";
import NavBar from "@/src/components/layout/NavBar";
import UseProductsReturn from "@/src/hooks/UseProductsReturn";
import { Container, Skeleton, Typography, Box } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  const { items, loading, error } = UseProductsReturn();
  const filteredItems = query;
  console.log(query?.length, "jjj");
  console.log("jjjjj");
  // useEffect(() => {
  const queryItems =
    query?.length > 0
      ? items.filter((item) => item.product_category.includes(query))
      : [];

  console.log(queryItems);

  // }, []);

  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container sx={{ marginTop: "2rem" }}>
        {/* <form>

       </form> */}

        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? (
            <Skeleton variant="text" width="90px" />
          ) : queryItems.length === 0 ? (
            <p> 0 items</p>
          ) : (
            <p>{queryItems.length} items</p>
          )}
        </Box>
        {/* {queryItems.length === 0 && <p>oooo</p>} */}
        {/* {filteredItems.length === 0 ? <p>nnn</p> : <p>not found</p>} */}
      </Container>
      {/* <FilterCollection /> */}
    </>
  );
}
