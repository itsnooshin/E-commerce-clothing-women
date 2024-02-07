import React from 'react';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Logo from '../public/Logo-mobile.png';
import BannerHeader from './BannerHeader';

const NavBarMobile = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: '#fff', boxShadow: 'none' }}
    >
      <BannerHeader />
      <Toolbar
        sx={{
          color: '#000000',
          p: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: '9px' }}>
          <MenuOutlinedIcon />
          <SearchIcon />
        </Box>
        <Box>
          <Image alt="Logo for shop" src={Logo} width={139} height={40} />
        </Box>
        <Box sx={{ display: 'flex', gap: '9px' }}>
          <FavoriteBorderOutlinedIcon />
          <ShoppingBagOutlinedIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
