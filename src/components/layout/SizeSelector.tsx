import React, { PropsWithChildren } from 'react';
import { FormControl, SelectChangeEvent } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { Typography } from '@mui/material';

interface Types {
  handleChange: (event: SelectChangeEvent) => void;
  size: string;
  productSize: string[];
}

export default function SizeSelector(props: PropsWithChildren<Types>) {
  const { productSize, size, handleChange } = props;

  return (
    <FormControl
      sx={{ m: 1, width: { xs: '100%', md: '550px' }, marginLeft: 0 }}
    >
      <Select
        sx={{
          marginBottom: 0,
          width: { xs: '100%', md: '550px' },
          height: 50,
        }}
        onChange={handleChange}
        value={size}
        displayEmpty
        MenuProps={{
          PaperProps: {},
        }}
        renderValue={(selectedSize) => {
          if (selectedSize.length === 0) {
            return (
              <Typography sx={{ fontWeight: '800 !important' }}>
                {size}
              </Typography>
            );
          }
          return selectedSize;
        }}
      >
        {productSize.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
