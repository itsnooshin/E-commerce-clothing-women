import React from 'react';
import BannerHeader from './BannerHeader';
import { Box, AppBar, Toolbar } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Logo from '../public/Logo-mobile.png';


const NavBarMobile = () => {
  return (
    <AppBar position="sticky"sx={{ bgcolor: 'transparent', boxShadow: 'none', pt : 1 }}>
      <Toolbar sx={{ color: '#000000'  , p:0}}>
        <Box sx={{ display: 'flex', gap: '9px' }}>
          <MenuOutlinedIcon />
          <SearchIcon />
        </Box>
        <Box sx ={{marginLeft : 'auto'}} >
          <Image alt="Logo for shop" src={Logo} width={139} height={40} />
        </Box>
        <Box sx ={{marginLeft : 'auto'  ,  display: 'flex', gap: '9px'}}>
          <FavoriteBorderOutlinedIcon />
          <ShoppingBagOutlinedIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMobile;
