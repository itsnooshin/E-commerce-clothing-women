import { Button } from '@mui/material';
import React from 'react';

export default function CheckOutButton() {
  return (
    <Button
      href="/cart"
      sx={{
        background: '#5A6D57',
        color: 'white',
        borderRadius: 0,
        padding: '0.5rem 3rem',
        textTransform: 'capitalize',
        margin: '0rem 3rem',
        '&:hover': {
          background: '#5A6D57',
        },
      }}
    >
      Check Out
    </Button>
  );
}
