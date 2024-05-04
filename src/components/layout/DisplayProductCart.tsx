import { Box, Button, Typography } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { CartItem } from '@/src/types/CartItemTypes';
import ProductAddMinus from './ProductAddMinus';
import useProductDetails from '@/src/hooks/useProductDetails';

interface Types {
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shopsItem: CartItem[];
  handleRemove: (id: any) => void;
}

export default function DisplayProductCart(props: PropsWithChildren<Types>) {
  const { handleCloseModal, shopsItem, handleRemove } = props;

  const { itemsEl, handleChangeHandleMinus, handleChangeHandle } =
    useProductDetails();

  return (
    <Box
      sx={{
        background: 'white',
        width: '500px',
        minHeight: 0,
        height: '100vh',
        overflow: 'auto',
        position: 'absolute' as 'absolute',
        top: '0px',
        right: '0rem',
        padding: ' 3rem 1.5rem',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        gap: '2rem',
        paddingTop: '3rem',
      }}
    >
      <Button
        onClick={handleCloseModal}
        sx={{
          color: 'black',
          position: 'absolute' as 'absolute',
          left: '0rem',
          top: '1rem',
        }}
      >
        <CloseIcon />
      </Button>

      <Typography variant="h6" textAlign={'center'} fontWeight={600}>
        Your Cart
      </Typography>
      {shopsItem.map((items, index) => (
        <>
          <Box
            sx={{
              display: 'flex',
              // justifyContent: "center",
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
                {itemsEl[index]}
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
                {/* <ProductAddMinus /> */}
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
                      p: 0,
                      minWidth: 0,
                      color: '#404E3E',
                      fontSize: '1rem',
                    }}
                    onClick={() => handleChangeHandleMinus(index)}
                  >
                    -
                  </Button>
                  <Typography>{itemsEl[index]}</Typography>

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
                <Typography
                  sx={{
                    fontWeight: '600',
                    position: 'absolute' as 'absolute',
                    right: '3rem',
                  }}
                >
                  ${items.price}
                </Typography>
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
                  // right: "0rem",
                  right: '0rem',
                  // top: "0",
                }}
              >
                <CloseIcon />
              </Button>
            </Box>
          </Box>
        </>
      ))}
      <Button
        href="/cart"
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
        View Cart
      </Button>
    </Box>
  );
}
