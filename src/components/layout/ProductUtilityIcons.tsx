import React from 'react';
import { Box, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export default function ProductUtilityIcons() {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      color={'#868686'}
      marginTop={'2rem'}
      sx={{
        width: { xs: '100%', md: '500px' },
        justifyContent: { xs: 'center', md: 'space-between' },
        flexDirection: { xs: 'column', md: 'row' },
        gap : {xs :'1rem' , md :'0rem'}
      }}
    >
      <Box display={'flex'} alignItems={'center'} gap={'4px'}>
        <LocalShippingOutlinedIcon />
        <Typography>Easy Return</Typography>
      </Box>
      <Box display={'flex'} alignItems={'center'} gap={'4px'}>
        <FavoriteBorderOutlinedIcon sx={{ color: '#000000' }} />
        <Typography>Add to Wish List</Typography>
      </Box>
    </Box>
  );
}
