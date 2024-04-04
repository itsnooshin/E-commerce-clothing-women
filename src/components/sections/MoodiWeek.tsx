import { Container, Grid } from "@mui/material";
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
  return (
    <Container>
      <Box sx={{ mt: "6rem", mb: "1.5rem" }}>
        <Typography variant="h5" fontWeight="600" fontFamily="inherit">
          ModiWeek
        </Typography>
      </Box>

      <Swiper
        style={{ paddingBottom: "4rem" }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 1500,
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
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <Typography sx={{ paddingTop: "1rem" }} fontWeight="600">
                {items.imageWeek}
              </Typography>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default MoodiWeek;
