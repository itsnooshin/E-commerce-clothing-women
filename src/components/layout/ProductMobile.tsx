import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { Product } from '@/src/types/productTypes';
import HeartIcon from '@/src/components/layout/heartIcon';

interface Types {
  item: Product;
  link: string;
}

export default function ProductMobile(props: PropsWithChildren<Types>) {
  const { item, link } = props;
  return (
    <Link
      href={{
        pathname: link,
        query: { name: `${item.product_name}` },
      }}
      style={{ color: 'inherit' }}
    >
      <Box sx={{ position: 'relative' }}>
        <Image
          src={item.product_img[0]}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: 'auto',
          }}
          alt="image for product"
          width={500}
          height={500}
        />
      </Box>
      {item.product_new ? (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            background: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            left: '0.5rem',
          }}
        >
          <p style={{ padding: '0.2rem 0.7rem' }}>New</p>
          <Typography
            sx={{ position: 'absolute', left: { xs: '33vw', sm: '39vw' } }}
          >
            <HeartIcon fill="white" stroke="black" />
          </Typography>
        </div>
      ) : (
        <Typography
          sx={{
            position: 'absolute',
            left: { xs: '33vw', sm: '40vw' },
            top: '10px',
          }}
        >
          <HeartIcon fill="white" stroke="black" />
        </Typography>
      )}

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
            gap: '4px',
          }}
        >
          <Typography sx={{ fontWeight: '700', fontSize: '0.9rem' }}>
            {item.product_name.split(' ').slice(0, 2).join(' ')}
          </Typography>
          <Typography sx={{ fontSize: '0.9rem' }}>
            {item.product_name.split(' ').slice(2).join(' ')}
          </Typography>

          <Box>
            <Typography
              sx={{
                fontWeight: '700',
                marginRight: '1rem',
                fontSize: '0.9rem',
              }}
            >
              ${item.procuct_price}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '6px', mt: 1 }}>
            {item.product_color.map((items) => (
              <Typography
                sx={{
                  bgcolor: `${items?.hex}`,
                  width: '16px',
                  height: '16px',
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
      </Box>
    </Link>
  );
}
