import { Container, Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import { ImageWeek } from "@/src/lib/utilits/MoodiWeekDataImage";

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
