import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function ProductAddMinus() {
  const [value, setValue] = useState<number>(1);

  function handleAdd() {
    setValue((count) => count + 1);
  }
  function handleMinus() {
    if (value === 0) return;
    else {
      setValue((count) => count - 1);
    }
  }

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
        onClick={handleMinus}
      >
        -
      </Button>
      <Typography>{value}</Typography>
      <Button
        sx={{
          minWidth: '0',
          color: '#404E3E',
          fontSize: '1.4rem',
          padding: '0',
          fontWeight: '600',
        }}
        onClick={handleAdd}
      >
        +
      </Button>
    </Box>
  );
}
