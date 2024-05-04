import { Box, Typography, Button } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import Image from 'next/image';
import { CartItem } from '@/src/types/CartItemTypes';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LogoMobile from '@/public/Logo-mobile.png';

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

export default function CartDisplayMobile(props: PropsWithChildren<Props>) {
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

  const router = useRouter();

  return (
    <Box sx={{ display: { md: 'none' } }}>
      <Box sx={{ mt: 3 }}>
        <Link href="/">
          <Image priority src={LogoMobile} alt="Logo for page" />
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        <Button
          sx={{
            color: '#5A6D57',
            fontSize: '1rem',
            paddingLeft: '1.5rem',
            textTransform: 'capitalize',
          }}
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Typography fontFamily={'inherit'} variant="h5" fontWeight={'700'}>
          Your Cart
        </Typography>
      </Box>

      <Typography>Order Summary</Typography>
      <Box sx={{ padding: ' 3rem 0rem' }}>
        {shopsItem.map((items, index) => (
          <>
            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <Box sx={{ position: 'relative' }}>
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
                    background: 'white',
                    position: 'absolute',
                    top: '0.4rem',
                    right: '0.4rem',
                    padding: '0.3rem 1rem',
                  }}
                >
                  {items.quantity}
                </Box>
              </Box>

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
                >
                  <Typography sx={{ fontWeight: '600' }}>
                    {' '}
                    $ {items.price}{' '}
                  </Typography>
                  <Box
                    sx={{ position: 'absolute' as 'absolute', right: '2rem' }}
                  >
                    <Box
                      sx={{
                        background: '#D1D9CF',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0rem 0.9rem',

                        gap: '20px',
                      }}
                    >
                      <Button
                        sx={{
                          minWidth: '0',
                          color: '#404E3E',
                          fontSize: '1.4rem',
                          padding: '0',
                          fontWeight: '600',
                        }}
                        onClick={() => {
                          counts[index] === 0
                            ? handleRemove(items.id)
                            : handleChangeHandleMinus(index);
                        }}
                      >
                        -
                      </Button>
                      <Typography>{itemsEl[index]}</Typography>
                      <Button
                        sx={{
                          minWidth: '0',
                          color: '#404E3E',
                          fontSize: '1.4rem',
                          padding: '0',
                          fontWeight: '600',
                        }}
                        onClick={() => handleChangeHandle(index)}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                </Box>
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
                    position: 'absolute' as 'absolute',
                    right: '0rem',
                  }}
                >
                  <CloseIcon />
                </Button>
              </Box>
            </Box>
          </>
        ))}
        <Box sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Subtotal({shopsItem.length})</Typography>
            <Typography>
              ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography>Tax</Typography>
            <Typography>
              ${Tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography>Shipping</Typography>
            <Typography>Free</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Typography fontWeight={'700'}>Order Total : </Typography>
            <Typography fontWeight={'700'}>
              ${order.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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
      </Box>
    </Box>
  );
}

