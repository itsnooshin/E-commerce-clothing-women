import { Drawer, Box, Typography, IconButton, Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

interface Types {
  onOpen: boolean;
  onState: (hover: boolean) => void;
}

export default function FilterOptionMobile(props: PropsWithChildren<Types>) {
  const { onOpen, onState } = props;
  return (
    <Drawer
      open={onOpen}
      variant="persistent"
      anchor="left"
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          backgroundColor: 'white',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.4rem',
        }}
      >
        <Typography variant="h6" fontFamily={'inherit'} fontWeight={'bold'}>
          Filter
        </Typography>
        <IconButton onClick={() => onState(false)} sx={{ cursor: 'pointer' }}>
          <CloseIcon sx={{ color: '#000000' }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          background: '#748C70',
          margin: '0  1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          mb: 2,
        }}
      >
        <Typography sx={{ color: '#ffff', fontWeight: 600 }}>
          Sort By
        </Typography>
        <AddIcon sx={{ color: '#ffff' }} />
      </Box>
      <Box
        sx={{
          background: '#748C70',
          margin: '0  1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          mb: 2,
        }}
      >
        <Typography sx={{ color: '#ffff', fontWeight: 600 }}>Size</Typography>
        <AddIcon sx={{ color: '#ffff' }} />
      </Box>
      <Box
        sx={{
          background: '#748C70',
          margin: '0  1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          mb: 2,
        }}
      >
        <Typography sx={{ color: '#ffff', fontWeight: 600 }}>Color</Typography>
        <AddIcon sx={{ color: '#ffff' }} />
      </Box>
      <Box
        sx={{
          background: '#748C70',
          margin: '0  1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
          mb: 2,
        }}
      >
        <Typography sx={{ color: '#ffff', fontWeight: 600 }}>
          Collection
        </Typography>
        <AddIcon sx={{ color: '#ffff' }} />
      </Box>
      <Box
        sx={{
          background: '#748C70',
          margin: '0  1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1rem',
        }}
      >
        <Typography sx={{ color: '#ffff', fontWeight: 600 }}>Fabric</Typography>
        <AddIcon sx={{ color: '#ffff' }} />
      </Box>
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 4 }}
      >
        <Button sx={{ color: '#000000', textTransform: 'capitalize' }}>
          Clear Filter
        </Button>
        <Button
          sx={{
            background: '#5A6D57',
            padding: '0.5rem 1rem',
            color: '#ffff',
            textTransform: 'capitalize',
            borderRadius: 0,
          }}
        >
          Apply Filter
        </Button>
      </Box>
    </Drawer>
  );
}
