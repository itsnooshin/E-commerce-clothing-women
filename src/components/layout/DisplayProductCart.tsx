import { Box, Button, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { CartItem } from "@/src/types/CartItemTypes";
import ProductAddMinus from "./ProductAddMinus";

interface Types {
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shopsItem: CartItem[];
  handleRemove: (id: any) => void;
}

export default function DisplayProductCart(props: PropsWithChildren<Types>) {
  const { handleCloseModal, shopsItem, handleRemove } = props;
  return (
    <Box
      sx={{
        background: 'white',
        width: '500px',
        // height: "100vh",
        minHeight: 0,
        height: '100vh',
        overflow: 'auto',
        position: 'absolute' as 'absolute',
        top: '0px',
        right: '0rem',
        padding: ' 3rem 1.5rem',
        display: { xs: 'none', md: 'flex' },
        // justifyContent: "center",
        flexDirection: 'column',
        // alignItems: "center",

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
      {shopsItem.map((items) => (
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
                <ProductAddMinus />
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
      <Button
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
        Check Out
      </Button>
    </Box>
  );
}
