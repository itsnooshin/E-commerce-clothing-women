import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Product } from '@/src/types/productTypes';
import HeartIcon from './heartIcon';

interface PropsType {
  item: Product;
  link: string;
}

export default function Products(props: PropsWithChildren<PropsType>) {
  const { item, link } = props;
  return (
    <Link
      href={{
        pathname: link,
        query: { name: `${item.product_name}` },
      }}
      style={{ color: 'inherit' }}
    >
      <Image
        src={item.product_img[0]}
        style={{ objectFit: 'cover', width: '100%' }}
        alt="image for product"
        width={400}
        height={400}
        
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: '2rem',
          marginLeft: '1rem',
         
        }}
      >
        {item.product_new && (
          <Typography
            sx={{
              bgcolor: 'white',
              padding: '0.5rem 1.5rem',
              marginRight: '17rem',
            }}
          >
            New{' '}
          </Typography>
        )}
        <Box sx={{ position: 'absolute', left: '24vw' }}>
          {' '}
          <HeartIcon fill="white" stroke="black" />
        </Box>
      </Box>
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

          <Box sx={{ display: 'flex', gap: '6px', mt: 1 }}>
            {item.product_color.map((items, index) => (
              <Typography
                key={index}
                sx={{
                  bgcolor: `${items?.hex}`,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  border: `${
                    items?.hex === '#FFFFFF' ? '1px solid #dad7cd' : null
                  }`,
                }}
              ></Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: '700',
              marginRight: '1rem',
            }}
          >
            ${item.procuct_price}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
