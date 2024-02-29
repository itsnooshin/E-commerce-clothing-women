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
import BannerHeader from '../headers/BannerHeader';
import LogoWebsite from '../LogoWebsite';

const NavBarMobile = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
        <FavoriteBorderOutlinedIcon />
        <ShoppingBagOutlinedIcon />
      </Box>
    </>
  );
};

export default NavBarMobile;
