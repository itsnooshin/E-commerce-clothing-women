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
import { useSearchParams, useRouter } from "next/navigation";
import ImageNotFound from "@/public/Match not found.png";
import Footer from "@/src/components/layout/Footer";
import ProductMain from "@/src/components/layout/ProductMain";
import SkeletonProductCollection from "@/src/components/utility/SkeletonProductCollection";
import { useState } from "react";
import Link from "next/link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


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

  const [isSelected, setIsSelected] = useState(null);
  const handleChange = (id: any) => {
    setIsSelected(isSelected === id ? null : id);
  };

  return (
    <>
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
          <Typography variant="h6" fontWeight={600} fontFamily={"inherit"}>
            Search Result
          </Typography>
          {/* {loading ? (
            <Skeleton variant="text" width="190px" />
          ) : queryItems?.length === 0 ? (
            <Typography variant="h6" fontWeight={600} fontFamily={"inherit"}>
              No result Found for "{query}"
            </Typography>
          ) : (
            <Typography>{queryItems.length} items</Typography>
          )} */}
        </Box>

        <SearchField initialQuery={query} />
        {/* <Typography>
          No results found for “hhhh”. Check the spelling or use a different
          word or phrase.
        </Typography> */}
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
          <>
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
          </>
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
                  queryItems.slice(0, displayCount).map((item) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      key={item.id}
                      sx={{ marginBottom: "1rem", position: "relative" }}
                    >
                      <Link
                        href={{
                          pathname: `/collection/all/products/${item.id}`,
                          query: { name: `${item.product_name}` },
                        }}
                        onMouseOver={() => handleChange(item.id)}
                        onMouseLeave={() => handleChange(item.id)}
                        style={{
                          color: "inherit",
                          transition: "all 1s ease-in-out",
                        }}
                      >
                        <Image
                          src={
                            isSelected === item.id
                              ? item.product_img[1]
                              : item.product_img[0]
                          }
                          style={{ objectFit: "cover" }}
                          alt="image for product"
                          width={400}
                          height={400}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            position: "absolute",
                            top: "2rem",
                            marginLeft: "1rem",
                          }}
                        >
                          {" "}
                          {item.product_new && (
                            <Typography
                              sx={{
                                bgcolor: "white",
                                padding: "0.5rem 1.5rem",
                                marginRight: "17rem",
                              }}
                            >
                              New{" "}
                            </Typography>
                          )}
                          <Box sx={{ position: "absolute", left: "20rem" }}>
                            {" "}
                            <FavoriteBorderIcon />
                          </Box>
                        </Box>
                      </Link>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>

      <Footer />
    </>
  );
}
