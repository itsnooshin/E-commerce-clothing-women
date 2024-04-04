"use client";
import NavBar from "@/src/components/layout/NavBar";
import BannerHeader from "@/src/components/headers/BannerHeader";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import collection from "@/public/ffdslfs.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import { useEffect, useState } from "react";
import FilterCollection from "@/src/components/layout/FilterCollection";
import ProductMain from "@/src/components/layout/ProductMain";
import SkeletonData from "@/src/components/utility/SkeletonData";

function page() {
  const [displayCount, setDisplayCount] = useState(6);
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (store: RootState) => store.product
  );
  console.log(loading);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
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
      <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
        {/* <Box sx={{display : 'flex' , justifyContent : 'flex-end'}}}>
           hhhhh
         </Box> */}
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
            <Grid container spacing={2}>
              {loading ? (
                <Grid container spacing={{ xs: 2 }} item>
                  {Array.from({ length: displayCount }, (_, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{
                            fontSize: "1rem",
                            height: "400px",
                          }}
                        />

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Skeleton variant="text" width="150px" />
                            <Skeleton variant="text" width="100px" />
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                              />
                              <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                              />
                              <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                              />
                            </Box>
                          </Box>

                          <Box sx={{ marginLeft: "auto" }}>
                            <Skeleton
                              variant="text"
                              width="80px"
                              height="30px"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                items?.slice(0, displayCount).map((item) => (
                  <Grid item xs={12} sm={6} key={item.id}>
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
                  </Grid>
                ))
              )}
            </Grid>
            {!loading && displayCount < items?.length && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Button
                  onClick={() => setDisplayCount((prev) => prev + 6)}
                  sx={{
                    color: "#5A6D57",
                    border: "1px solid #5A6D57",
                    padding: "0.6rem 3rem",
                    borderRadius: 0,
                    textTransform: "capitalize",
                  }}
                >
                  Load more
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default page;
