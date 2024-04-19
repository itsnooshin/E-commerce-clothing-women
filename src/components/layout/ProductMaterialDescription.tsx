import React from 'react';

import { Box, Typography } from '@mui/material';
import ProductUtilityIcons from './ProductUtilityIcons';

export default function ProductMaterialDescription() {
  return (
    <Box
      bgcolor={'#F0F2EF'}
      marginTop={'2rem'}
      padding={'2rem 1rem'}
      sx={{ width: { xs: '100%', md: '550px' } }}
    >
      <Typography
        variant="h6"
        sx={{
          borderBottom: '1px solid #ADADAD',
          paddingBottom: '1rem',
        }}
      >
        Cuproluxe
      </Typography>
      <Typography sx={{ paddingTop: '1rem' }}>
        Our CuproLuxe is a regenerated cellulose fabric made from cotton waste.
        This fabric is made in a zero-waste closed loop process, and is 100%
        biodegradable. Cupro is breathable, quick drying and durable. This
        OEKO-TEX®, FSC, and GRS certified material is made in Turkey.
      </Typography>
      <Box sx={{ display: 'flex', gap: '12px', marginTop: '1rem' }}>
        <Box>
          <Typography sx={{ background: '#ffff', padding: '0.7rem' }}>
            Quick Dry
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ background: '#ffff', padding: '0.7rem' }}>
            breathable
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ background: '#ffff', padding: '0.7rem' }}>
            machine washable
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
