import React, { PropsWithChildren } from 'react';
import { CartItem } from '@/src/types/CartItemTypes';
import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import CheckOutButton from './CheckOutButton';
import useProductDetails from '@/src/hooks/useProductDetails';
interface Types {
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shopsItem: CartItem[];
  handleRemove: (id: any) => void;
}

export default function DisplayCartMobile(props: PropsWithChildren<Types>) {
  const { handleCloseModal, shopsItem, handleRemove } = props;

  const { itemsEl, handleChangeHandleMinus, handleChangeHandle } =
    useProductDetails();

  return (
    <>
      <Box
        sx={{
          // height: '100vh',
          width: '100%',
          //   overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '3rem',
        }}
      >
        <Button
          onClick={handleCloseModal}
          sx={{
            color: 'black',
            position: 'absolute' as 'absolute',
            left: '0rem',
            //   top: '2rem',
            padding: ' 3rem 1.5rem',
          }}
        >
          <CloseIcon />
        </Button>
        <Box>
          <Typography variant="h6" fontFamily={'inherit'} fontWeight={'bold'}>
            Your Cart
          </Typography>
        </Box>
      </Box>

      <Box sx={{ padding: ' 3rem 1.5rem' }}>
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
                    sx={{
                      background: '#D1D9CF',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0rem 0.9rem',
                      position: 'absolute' as 'absolute',
                      right: '2rem',
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
      </Box>
      <CheckOutButton />
    </>
  );
}
