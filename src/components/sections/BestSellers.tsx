"use client";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect } from "react";
import SkeletonData from "../utility/SkeletonData";
import BestSellerHeader from "@/src/components/headers/BestSellerHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import Products from "../layout/Products";
import ProductMobile from "../layout/ProductMobile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/app/store";
import { getProduct } from "@/src/featuers/product/productSlice";
import UseProductsReturn from "@/src/hooks/UseProductsReturn";

const BestSellers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { items, loading, error } = UseProductsReturn();

  const SkeletonCount = loading && isMobile ? 2 : 3;

  return (
    <Container>
      <BestSellerHeader />
      <Grid container spacing={{ lg: 2, md: 2 }}>
        {loading ? (
          <Grid container spacing={{ xs: 2 }} item>
            {Array.from({ length: 3 }, (_, index) => (
              <Grid item md={4} xs={6} key={index}>
                <SkeletonData />
              </Grid>
            ))}
          </Grid>
        ) : isMobile ? (
          <Swiper
            style={{ paddingBottom: "4rem" }}
            modules={[Pagination, Autoplay]}
            // autoplay={{ delay: 2700, disableOnInteraction: false }}
            spaceBetween={20}
            loop={true}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            {items
              ?.filter((item) => item.product_bestsellere)
              .slice(0, 5)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductMobile item={item} link={`/product/${item.id}`} />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          items
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
              >
                <Products item={item} link={`/product/${item.id}`} />
              </Grid>
            ))
        )}
        
      </Grid>
    </Container>
  );
};

export default BestSellers;
