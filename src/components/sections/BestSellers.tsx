"use client";
import { Box, Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getImages } from "@/src/lib/utilits/apImages";
import Image from "next/image";
import SkeletonData from "../utility/SkeletonData";
import BestSellerHeader from "@/src/components/headers/BestSellerHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "swiper/css/pagination";
import "swiper/css";
import { Product } from "@/src/types/productTypes";
import Link from "next/link";

const BestSellers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [dataBestSellers, setDataBestSellers] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getImages();
        setDataBestSellers(data as Product[]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const SkeletonCount = isLoading && isMobile ? 2 : 3;

  return (
    <Container>
      <BestSellerHeader />
      <Grid container spacing={{ lg: 2, md: 2 }}>
        {isLoading ? (
          <Grid container spacing={{ xs: 2 }} item>
            {Array.from({ length: SkeletonCount }, (_, index) => (
              <Grid item md={4} xs={6} key={index}>
                <SkeletonData />
              </Grid>
            ))}
          </Grid>
        ) : isMobile ? (
          <Swiper
            style={{ paddingBottom: "4rem" }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            spaceBetween={20}
            loop={true}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {dataBestSellers
              ?.filter((item) => item.product_bestsellere)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <Image
                    src={item.product_img[0]}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "auto",
                    }}
                    width={500}
                    height={500}
                    alt="images for best sellers"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      p: "0.7rem",
                      gap: "4px",
                    }}
                  >
                    <Typography sx={{ fontWeight: "600" }}>
                      {item.product_name.split(" ").slice(0, 2).join(" ")}
                    </Typography>
                    <Typography>
                      {item.product_name.split(" ").slice(2).join(" ")}
                    </Typography>

                    <Typography sx={{ fontWeight: "600" }}>
                      ${item.procuct_price}
                    </Typography>
                    <Typography>colors</Typography>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          dataBestSellers
            ?.filter((item) => item.product_bestsellere)
            .slice(0, 3)
            .map((item, index) => (
              <Grid
                item
                md={4}
                xs={6}
                key={index}
                sx={{ rowGap: "17rem", mb: { xs: "3rem" } }}
                position="relative"
                width={"100%"}
                height={"auto"}
                
              >
                <Link href={{pathname :`/product/${item.id}` , query : {name :item.product_name}}}>
                  <Image
                    src={item.product_img[0]}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                    width={500}
                    height={500}
                    alt="images for best sellers"
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
                    <Box sx={{ position: "absolute", left: "19rem" }}>
                      <FavoriteBorderIcon />
                    </Box>
                  </Box>

                  {/* <FavoriteBorderIcon /> */}
                  {/* <FavoriteIcon sx={{color :'red'}} /> */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: "6px",
                      color : '#000'
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
                </Link>
              </Grid>
            ))
        )}
      </Grid>
    </Container>
  );
};

export default BestSellers;
