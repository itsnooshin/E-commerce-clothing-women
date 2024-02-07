import { AppBar } from '@mui/material';
import { List } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import IconHeader from './IconHeader';
import BannerHeader from './BannerHeader';

const NavBarDesktop = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#ffff',
          boxShadow: 'none',
          color: '#404040',
          padding: '0px',
        }}
      >
        <BannerHeader />
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '60px',
            marginRight: '60px',
            paddingTop : '10px',
            paddingBottom :'10px'
          }}
        >
          <Box>
            <Image src={Logo} alt="Logo for page" width={184} height={46} />
          </Box>

          <Box>
            <List
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 3, md: 4, lg: 6 },
              }}
            >
              <ListItemText primary="Collection" />
              <ListItemText primary="New In" />
              <ListItemText primary="Modiweek" />
              <ListItemText primary="Plus Size" />
              <ListItemText primary="Sustainability" />
            </List>
          </Box>
          <Box>
            <IconHeader />
          </Box>
        </Toolbar>
      </AppBar>

      {/* add background */}
    </>
  );
};

export default NavBarDesktop;
