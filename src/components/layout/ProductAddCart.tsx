import { Alert, Box, Button, Snackbar } from '@mui/material';
import React, { PropsWithChildren, useState } from 'react';
import { ToastContainer } from 'react-toastify';

interface Types {
  handle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  price: string;
  openToaster: boolean;
  close: (hover: boolean) => void;
}

export default function ProductAddCart(props: PropsWithChildren<Types>) {
  const { handle, price, openToaster, close } = props;

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#5A6D57',
          width: { xs: '100%', md: '550px' },
        }}
      >
        <Button
          onClick={handle}
          sx={{
            color: '#fff',
            padding: '0.5rem',
            textAlign: 'center',
          }}
        >
          Add to cart ${price}
        </Button>
      </Box>

      {/* toaster */}

      <Snackbar
        open={openToaster}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={() => close(false)}
      >
        <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
          You must be logged in!
        </Alert>
      </Snackbar>
    </div>
  );
}
