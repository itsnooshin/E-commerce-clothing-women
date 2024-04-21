import { Box, Container, Grid, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import SkeletonProductCollection from '../utility/SkeletonProductCollection';
import ProductMain from './ProductMain';
import { Product } from '@/src/types/productTypes';
import ProductMobile from './ProductMobile';
import Image from 'next/image';
import Link from 'next/link';
import HeartIcon from './heartIcon';

interface Types {
  loading: boolean;
  count: number;
  items: Product[];
}

export default function GridItemsSearch(props: PropsWithChildren<Types>) {
  const { loading, count, items } = props;

  return (
    <Container sx={{ mt: 6, display: { xs: 'flex', md: 'none' }, mb: 5 }}>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={6}>
            <>
              <Link
                style={{ color: 'inherit' }}
                href={{
                  pathname: `product/${item.id}`,
                  query: { name: `${item.product_name}` },
                }}
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

                  {item.product_new ? (
                    <div
                      style={{
                        position: 'absolute',
                        zIndex: '99999',
                        background: 'white',
                        top: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        left: '0.5rem',
                      }}
                    >
                      <p style={{ padding: '0.2rem 0.7rem' }}>New</p>
                      <Typography
                        sx={{
                          position: 'absolute',
                          left: { xs: '32vw', sm: '38vw' },
                        }}
                      >
                        {' '}
                        <HeartIcon fill="white" stroke="black" />
                      </Typography>
                    </div>
                  ) : (
                    <Typography
                      sx={{
                        position: 'absolute',
                        left: { xs: '33vw', sm: '38vw' },
                        top: '10px',
                      }}
                    >
                      <HeartIcon fill="white" stroke="black" />
                    </Typography>
                  )}
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
                      gap: '4px',
                    }}
                  >
                    <Typography sx={{ fontWeight: '700', fontSize: '0.8rem' }}>
                      {item.product_name.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem' }}>
                      {item.product_name.split(' ').slice(2).join(' ')}
                    </Typography>

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
                              items?.hex === '#FFFFFF'
                                ? '1px solid #dad7cd'
                                : null
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
                        fontSize: '0.9rem',
                      }}
                    >
                      ${item.procuct_price}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
