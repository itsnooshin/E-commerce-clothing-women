'use client';
import { Box, Grid } from '@mui/material';
import { Typography, Container } from '@mui/material';
import supabase from '@/src/app/utilits/supabase';
import { useEffect, useState } from 'react';
import { getImages } from '@/src/app/utilits/apImages';
import Image from 'next/image';

type ProductData = {
  id: string;
  product_bestsellere: boolean;
  product_img: string;
  product_name: string;
  product_category: string;
  procuct_price: number;
};

const BestSellers = () => {
  const [dataBestSellers, setDataBestSellers] = useState<ProductData[] | null>(
    null
  );
  useEffect(() => {
    getImages().then((data) => {
      setDataBestSellers(data);
    });
  }, []);

  console.log(dataBestSellers);
  return (
    <Box>
      <p>Best Sellers</p>
      {/* 
      <Grid container spacing={6} >
        <Grid item xs={6} sm={4} sx={{ bgcolor: 'red' }}>
          <Typography>x = 8</Typography>
        </Grid>
        <Grid item xs={6} sm={4} sx={{ bgcolor: 'blue' }}>
          <Typography>x = 8</Typography>
        </Grid>
        <Grid item xs={6} sm={4} sx={{ bgcolor: 'yellow' }}>
          <Typography>x = 8</Typography>
        </Grid>
      </Grid> */}
      <Container>
        <Box
          sx={{
            display: 'flex',
            gap: '50px',
            justifyContent: 'center',
            mb: '3rem',
          }}
        >
          {/* {dataBestSellers
            ?.filter((items) => items.product_bestsellere)
            .map((item) => {
              console.log(item);


              return (
                
              )
            } } */}

          {dataBestSellers
            ?.filter((item) => item.product_bestsellere)
            .map((item) => {
              console.log(item.procuct_price, item.product_category);

              return (
                <Box key={item.id}>
                  <Image
                    width={500}
                    height={500}
                    src={item.product_img[0]}
                    alt="image"
                    style={{ objectFit: 'cover', width: '100%' }}
                  />
                  <Typography sx={{fontWeight : item.product_name.length > 17 ? '400' : '700'}}>{item.product_name} </Typography>
                  <span>{item.procuct_price}</span>
                </Box>
              );
            })}
        </Box>
      </Container>
    </Box>
  );
};

export default BestSellers;
