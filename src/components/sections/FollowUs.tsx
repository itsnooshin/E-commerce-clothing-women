import { Box, Button } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { ImageData } from '@/src/lib/utilits/FollowUSDataImage';
import Image from 'next/image';
import React, { useState } from 'react';

function FollowUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const images = isMobile ? ImageData.slice(0, 4) : ImageData;

  return (
    <Container sx={{ pb: '5rem' }}>
      <Box sx={{ mt: '6rem', mb: '1.5rem' }}>
        <Typography variant="h5" fontWeight="600" fontFamily="inherit">
          Follow us @modimal
        </Typography>
      </Box>

      {isMobile ? (
        <Grid container spacing={2}>
          {images.map((item) => (
            <Grid item xs={6} md={4}>
              <Image
                key={item.id}
                src={item.image}
                alt="Image galerrey"
                width={350}
                height={350}
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Masonry spacing={{ lg: 0, xs: 0 }} columns={{ xs: 2, md: 3 }}>
          {ImageData.map((item) => (
            <React.Fragment key={item.id}>
              <Image
                src={item.image}
                alt={`Image for ${item.image}`}
                width={384}
                height={item.height}
                style={{
                  cursor: 'pointer',
                  objectFit: 'cover',
                  margin: 0,
                }}
                sizes="100vw"
              />
            </React.Fragment>
          ))}
        </Masonry>
      )}
    </Container>
  );
}

export default FollowUs;
