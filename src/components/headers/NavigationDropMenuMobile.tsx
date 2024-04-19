import React, { PropsWithChildren } from 'react';
import { Drawer, IconButton, Box } from '@mui/material';
import BannerHeader from '../headers/BannerHeader';
import MobileMenu from '../layout/MobileMenu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import LogoMobileWebsite from '@/src/components/layout/LogoMobileWebsite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

interface Types {
  open: boolean;
  handleDrawerClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavigationDropMenuMobile(
  props: PropsWithChildren<Types>,
) {
  const { open, handleDrawerClose } = props;
  if (!open) return null;
  return (
    <Drawer
      sx={{
        zIndex: 9999,
        display: { xs: 'block', md: 'none' },

        '& .MuiDrawer-paper': {
          width: '100%',
          backgroundColor: 'white',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <BannerHeader />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.2rem 1rem',
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            cursor: 'pointer',
            padding: '7px 10px',
          }}
        >
          <IconButton onClick={handleDrawerClose} sx={{ cursor: 'pointer' }}>
            <CloseIcon sx={{ color: '#000000' }} />
          </IconButton>
          <SearchIcon />
        </Box>
        <LogoMobileWebsite />
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            gap: '9px',
          }}
        >
          <FavoriteBorderOutlinedIcon sx={{ cursor: 'pointer' }} />
          <ShoppingBagOutlinedIcon sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>
      <MobileMenu     />
    </Drawer>
  );
}
