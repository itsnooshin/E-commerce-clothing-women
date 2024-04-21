import React, { PropsWithChildren } from 'react';
import { CartItem } from '@/src/types/CartItemTypes';
import { Box, Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import CheckOutButton from './CheckOutButton';
interface Types {
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shopsItem: CartItem[];
  handleRemove: (id: any) => void;
}

export default function DisplayCartMobile(props: PropsWithChildren<Types>) {
  const { handleCloseModal, shopsItem, handleRemove } = props;

  return (
    <>
      <Box
        sx={{
          // height: '100vh',
          width :'100%',
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
        {shopsItem.map((items) => (
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
                  <Typography
                    sx={{
                      position: 'absolute' as 'absolute',
                      right: '3rem',
                    }}
                  >
                    - 1 +
                  </Typography>
                </Box>
                <Button
                  onClick={() => handleRemove(items.id)}
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

            {/* item - 1 + ==> quantity */}
            {/* item chanta selected  */}
          </>
        ))}
      </Box>
      <CheckOutButton />
    </>
  );
}
