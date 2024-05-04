import { CartItem } from '@/src/types/CartItemTypes';
import React, { PropsWithChildren, useState } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import LogoWebsite from './LogoWebsite';
import { useRouter } from 'next/navigation';
import HeaderCart from '../headers/HeaderCart';
import Link from 'next/link';

interface Props {
  counts: number[];
  handleChangeHandleMinus: (index: any) => void;
  handleChangeHandle: (index: any) => void;
  handleRemove: (id: any) => void;
  itemsEl: number[];
  shopsItem: CartItem[];
  total: number;
  order: number;
  Tax: number;
}

export default function CartDisplayDesktop(props: PropsWithChildren<Props>) {
  const {
    Tax,
    counts,
    order,
    total,
    shopsItem,
    itemsEl,
    handleChangeHandleMinus,
    handleChangeHandle,
    handleRemove,
  } = props;

  return (
    <Box sx={{ display: { md: 'block', xs: 'none' } }}>
      <Box sx={{ mt: 4 }}>
        <LogoWebsite />
      </Box>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <HeaderCart />
        <Link href={'/collection/all'}>Continue Shopping</Link>
      </Box>

      <Grid container spacing={2} sx={{ paddingBottom: '1rem' }}>
        <Grid item xs={6} md={6}>
          <Box>Order summary</Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Box>Price</Box>
            </Grid>
            <Grid item xs={4}>
              <Box>Quantity</Box>
            </Grid>
            <Grid item xs={4}>
              <Box>Total</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ borderBottom: '2px solid #DFDFDF' }}></Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          {shopsItem.map((items) => (
            <>
              <Box
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'space-between',
                  mt: 3,
                }}
              >
                <Box
                  sx={{ position: 'relative', display: 'flex', gap: '10px' }}
                >
                  <Image
                    src={items.image}
                    width={142}
                    height={142}
                    alt="image selected"
                    style={{
                      objectFit: 'cover',
                    }}
                  />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.7rem',
                    }}
                  >
                    {' '}
                    <Typography sx={{ fontWeight: '600' }}>
                      {items.name.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                    <Typography>Size : {items.size}</Typography>
                    <Typography>Color : {items.color}</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                      }}
                    ></Box>
                  </Box>
                </Box>

                <Box sx={{}}>
                  <Button
                    onClick={() =>
                      handleRemove({
                        id: items.id,
                        color: items.color,
                        size: items.size,
                      })
                    }
                    sx={{
                      color: 'black',
                    }}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
              </Box>
            </>
          ))}
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} sx={{ mt: 3 }}>
              <Grid container direction="column" spacing={1}>
                <Grid item xs={4} md={4}>
                  {shopsItem.map((item, index) => (
                    <Grid item key={index}>
                      <Box sx={{ mb: 6 }}>
                        ${' '}
                        {Number(item.price).toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                        })}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4} md={4} sx={{ mt: 3 }}>
              <Grid container direction="column" spacing={1}>
                <Grid item xs={4} md={4}>
                  {shopsItem.map((item, index) => (
                    <Grid item key={index}>
                      <Box sx={{ mb: 6 }}>
                        <Box
                          sx={{
                            background: '#D1D9CF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 0,
                            width: '50%',
                          }}
                        >
                          <Button
                            sx={{
                              p: 0,
                              minWidth: 0,
                              color: '#404E3E',
                              fontSize: '1rem',
                            }}
                            onClick={() => {
                              counts[index] === 0
                                ? handleRemove(item.id)
                                : handleChangeHandleMinus(index);
                            }}
                          >
                            -
                          </Button>
                          <Typography sx={{ px: '1rem' }}>
                            {itemsEl[index]}
                          </Typography>
                          <Button
                            sx={{
                              p: 0,
                              minWidth: 0,
                              color: '#404E3E',
                              fontSize: '1rem',
                            }}
                            onClick={() => handleChangeHandle(index)}
                          >
                            +
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sx={{ mt: 3 }}>
              <Grid container direction="column" spacing={1}>
                <Grid item xs={4}>
                  {shopsItem.map((item, index) => (
                    <Box sx={{ mb: 6 }}>
                      ${' '}
                      {(
                        Number(item.price) *
                        (item.quantity + counts[index])
                      ).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              borderBottom: '1px solid #DFDFDF',
            }}
          ></Box>

          {/* subtotal */}

          <Box sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Subtotal({shopsItem.length})</Typography>
              <Typography>
                $
                {total.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                })}
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Typography>Tax</Typography>
              <Typography>
                ${Tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Typography>Shipping</Typography>
              <Typography>Free</Typography>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
            >
              <Typography fontWeight={'700'}>Order Total : </Typography>
              <Typography fontWeight={'700'}>
                $
                {order.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                })}
              </Typography>
            </Box>
            <Typography sx={{ mt: 2, fontWeight: '700', fontSize: '0.9rem' }}>
              The total amount you pay includes all applicable customs duties &
              taxes. We guarantee no additional charges on delivery
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'end',
            }}
          >
            <Button
              href="/checkout"
              sx={{
                background: '#5A6D57',
                color: 'white',
                borderRadius: 0,
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',

                '&:hover': {
                  background: '#5A6D57',
                },
              }}
            >
              Next
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
