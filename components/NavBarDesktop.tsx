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

const options = [
  'Collection',
  'New In',
  'Modiweek',
  'Plus Size',
  'Sustainability',
];

const NavBarDesktop = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#ffff',
          boxShadow: 'none',
          color: '#404040',
        }}
      >
        <BannerHeader />
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            pt: '10px',
            pb: '10px',
          }}
        >
          <Box>
            <Image src={Logo} alt="Logo for page" width={184} height={46} />
          </Box>

          <Box>
            <List
              sx={{
                display: 'flex',
                gap: { md: '24px' },
                pt: 0,
                pb: 0,
              }}
            >
              {options.map((option) => (
                <ListItemText primary={option} key={option} />
              ))}
            </List>
          </Box>
          <Box>
            <IconHeader />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarDesktop;
