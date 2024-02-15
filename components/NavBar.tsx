'use client';

import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import LogoMobile from '../public/Logo-mobile.png';
import IconHeader from './IconHeader';
import BannerHeader from './BannerHeader';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

export default function NavBar() {
  return (
    <>
      <AppBar
        position="sticky"
        
        sx={{
          backgroundColor: '#ffff',
          
          color: '#404040',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'space-between', md: 'space-around' },
            pt: '10px',
            pb: '10px',
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Link href="/">
              <Image src={Logo} alt="Logo for page" width={184} height={46} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
            <MenuOutlinedIcon />
            <SearchIcon />
          </Box>
          <NavBarDesktop />
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Image
              alt="Logo for shop"
              src={LogoMobile}
              width={138}
              height={40}
              quality={100}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconHeader />
          </Box>
          <NavBarMobile />
        </Toolbar>
      </AppBar>
    </>
  );
}
