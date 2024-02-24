'use client';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Typography, Container, Skeleton, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import { getImages } from '@/src/app/utilits/apImages';
import Image from 'next/image';
import SkeletonData from './SkeletonData';
import BestSellerHeader from './BestSellerHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

type ProductData = {
  id: string;
  product_bestsellere: boolean;
  product_img: string;
  product_name: string;
  product_category: string;
  procuct_price: number;
};

const BestSellers = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [dataBestSellers, setDataBestSellers] = useState<ProductData[] | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getImages()
      .then((data) => {
        setDataBestSellers(data);
        // console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
            style={{ paddingBottom: '4rem' }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            spaceBetween={20}
            loop={true}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
          >
            {dataBestSellers
              ?.filter((item) => item.product_bestsellere)
              .map((item) => (
                <SwiperSlide>
                  <Image
                    src={item.product_img[0]}
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={500}
                    alt="images for best sellers"
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: '0.7rem',
                      gap: '4px',
                    }}
                  >
                    <Typography sx={{ fontWeight: '600' }}>
                      {item.product_name.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                    <Typography>
                      {item.product_name.split(' ').slice(2).join(' ')}
                    </Typography>

                    <Typography sx={{ fontWeight: '600' }}>
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
                sx={{ rowGap: '17rem', mb: { xs: '3rem' } }}
              >
                <Image
                  src={item.product_img[0]}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  width={500}
                  height={500}
                  alt="images for best sellers"
                />

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: '6px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px',
                    }}
                  >
                    <Typography sx={{ fontWeight: '700' }}>
                      {item.product_name.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                    <Typography>
                      {item.product_name.split(' ').slice(2).join(' ')}
                    </Typography>
                    <Typography>T</Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontWeight: '700' }}>
                      ${item.procuct_price}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))
        )}
      </Grid>
    </Container>
  );
};

export default BestSellers;
