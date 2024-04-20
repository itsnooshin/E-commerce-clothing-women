import { Button } from '@mui/material';
import React from 'react';

export default function CheckOutButton() {
  return (
    <Button
      sx={{
        background: '#5A6D57',
        color: 'white',
        borderRadius: 0,
        padding: '0.5rem 3rem',
        textTransform: 'capitalize',
      }}
    >
      Check Out
    </Button>
  );
}
