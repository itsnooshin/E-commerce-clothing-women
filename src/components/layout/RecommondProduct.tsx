import { AppDispatch, RootState } from '@/src/app/store';
import { getProduct } from '@/src/featuers/product/productSlice';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Products from './Products';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import ProductMobile from './ProductMobile';

interface Types {
  category: string;
}

export default function RecommondProduct(props: PropsWithChildren<Types>) {
  const { category } = props;
  const { items, loading } = UseProductsReturn();

  const filterProduct = items
    .filter((items) => items.product_category === category)
    .slice(0, 3);

  if (loading) return;
  return (
    <>
      <Box sx={{ marginBottom: '5rem', display: { xs: 'none', md: 'block' } }}>
        {items && (
          <Box>
            <Typography
              mb={7}
              variant="h5"
              fontFamily={'inherit'}
              fontWeight={600}
            >
              You May Also Like jjj
            </Typography>
            <Grid container spacing={2}>
              {filterProduct.map((item, index) => (
                <Products
                  item={item}
                  link={`/collection/all/products/${item.id}`}
                />
              ))}
            </Grid>
          </Box>
        )}
      </Box>
      <Box sx={{ marginBottom: '5rem', display: { xs: 'block', md: 'none' } }}>
        <Container>
          <Typography
            mb={7}
            variant="h5"
            fontFamily={'inherit'}
            fontWeight={'bold'}
          >
            You May Also Like
          </Typography>
          <Container>
            <Grid container spacing={2}>
              <>
                <Swiper
                  style={{ paddingBottom: '4rem' }}
                  modules={[Pagination, Autoplay]}
                  // autoplay={{ delay: 2700, disableOnInteraction: false }}
                  spaceBetween={20}
                  loop={true}
                  slidesPerView={2.15}
                  pagination={{ clickable: true }}
                >
                  {filterProduct.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProductMobile
                        item={item}
                        link={`/collection/all/products/${item.id}`}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            </Grid>
          </Container>
        </Container>
      </Box>
    </>
  );
}
