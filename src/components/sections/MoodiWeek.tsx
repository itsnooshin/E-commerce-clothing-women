import { Container, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import mon from "@/public/modiweek/1.webp";
import tue from "@/public/modiweek/2.webp";
import wed from "@/public/modiweek/3.webp";
import thu from "@/public/modiweek/4.webp";
import fri from "@/public/modiweek/5.webp";
import sat from "@/public/modiweek/6.webp";
import sun from "@/public/modiweek/7.webp";
import { useEffect, useState } from "react";
import SkeletonData from "../utility/SkeletonData";

export const ImageWeek = [
  {
    imageSrc: mon,
    imageWeek: "Monday",
  },
  {
    imageSrc: tue,
    imageWeek: "Tuesday",
  },
  {
    imageSrc: wed,
    imageWeek: "Wednesday",
  },
  {
    imageSrc: thu,
    imageWeek: "Thursday",
  },
  {
    imageSrc: fri,
    imageWeek: "Friday",
  },
  {
    imageSrc: sat,
    imageWeek: "Saturday",
  },
  {
    imageSrc: sun,
    imageWeek: "Sunday",
  },
];
function MoodiWeek() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);
  return (
    <Container>
      {isLoading ? (
        <Grid container spacing={{ xs: 2 }} item>
          {Array.from({ length: 4 }, (_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {/* <SkeletonData /> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2",
                  mb: 5,
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{
                    // fontSize: "12px",
                    height: "349px",
                  }}
                />
                <Skeleton variant="text" width="150px" />
                <Skeleton variant="text" width="100px" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton variant="circular" width={20} height={20} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <>
          <Box sx={{ mt: "6rem", mb: "1.5rem" }}>
            <Typography variant="h5" fontWeight="600" fontFamily="inherit">
              ModiWeek
            </Typography>
            <Swiper
              style={{
                paddingBottom: "4rem",
                marginBottom: "4rem",
              }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={2}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              {ImageWeek.map((items, index) => (
                <SwiperSlide key={index}>
                  <>
                    <Image
                      key={index}
                      width={500}
                      height={500}
                      src={items.imageSrc}
                      alt=" group imsgsrd"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />

                    <Typography sx={{ paddingTop: "1rem" }} fontWeight="600">
                      {items.imageWeek}
                    </Typography>
                  </>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </>
      )}
    </Container>
  );
}

export default MoodiWeek;
