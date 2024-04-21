import { Box, Button, Typography } from '@mui/material';
import React from 'react';

export default function ProductAddMinus() {
  return (
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
      >
        -
      </Button>
      <Typography>1</Typography>
      <Button
        sx={{
          minWidth: '0',
          color: '#404E3E',
          fontSize: '1.4rem',
          padding: '0',
          fontWeight: '600',
        }}
      >
        +
      </Button>
    </Box>
  );
}
