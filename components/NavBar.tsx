'use client';

import { Container, Grid, List, Toolbar, Typography } from '@mui/material';
import { AppBar } from '@mui/material';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.png';
import LogoMobile from '../public/Logo-mobile.png';
import IconHeader from './IconHeader';
import BannerHeader from './BannerHeader';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavBarMobile from './NavBarMobile';
import NavBarDesktop from './NavBarDesktop';

import { ListItemText } from '@mui/material';
import { Box } from '@mui/material';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { ListItem } from '@mui/material';
import BlousesImageBanner from '../public/Lifestyle.webp';
import PlusSizeImageBanner from '../public/Somethingx.webp';

const options = [
  {
    name: 'Collection',

    category: [
      'Shop All',
      'Blouses & Top',
      'Pants',
      'Dresses & Jumpsuits',
      'Outwear & Jackets',
      'pullovers',
      'Tees',
      'Shorts & Skirts',
    ],
    featured: ['New In', 'Modiweek', 'Plus Size', 'Best Seller'],
    More: ['Bundles', 'Occasion Wear', 'Matching Set', 'Suiting'],
    nameCat: 'Category',
    nameFeat: 'Featured ',
    nameMore: 'More',
  },
  {
    name: 'New In',
    category: [
      'Shop All',
      'Tops & Blouses',
      'Tees',
      'Pants',
      'Jackets & Outwears',
      'Pullovers',
      'Dresses & Jumpsuits',
      'Shorts & Skirts',
    ],
    featured: ['Plus Size', 'Fall Collection', 'Modiweek'],
    nameCat: 'Category',
    nameFeat: 'Trending ',
  },
  {
    name: 'Modiweek',
    category: [
      'Shop All',
      'Tops & Blouses',
      'Tees',
      'Pants',
      'Jackets & Outwears',
      'Pullovers',
      'Dresses & Jumpsuits',
      'Shorts & Skirts',
    ],
    nameCat: 'Category',
    nameFeat: 'Trending ',
  },
  {
    name: 'Plus Size',
    category: ['Shop All', 'Blouses & Top'],
    nameCat: 'Category',
  },
  {
    name: 'Sustainability',
    category: [
      'Mission',
      'Processing',
      'Materials',
      'Packaging',
      'Product Care',
      'Our Suppliers',
    ],
    nameCat: 'Sustainability ',
  },
];

export default function NavBar() {
  const pathName = usePathname();
  const [isHoverd, setIsHovered] = useState('');

  const hrefLink = options.map((option) =>
    option.name.toLowerCase().replace(/\s+/g, '-')
  );

  const isActive = pathName.startsWith(`/${hrefLink}`);

  useEffect(() => {
    // const mainContent = document.getElementById('main-content');
    // if (isHoverd) {
    //   mainContent.style.filter = 'blur(5px)';
    // }
    // else {
    //   mainContent.style.filter = 'blur(0px)';
    // }
    return;
  }, [isHoverd]);

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

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <List
              sx={{
                display: 'flex',
                gap: { md: '24px' },
                pt: 0,
                pb: 0,
              }}
            >
              {options.map((option, index) => {
                return (
                  <Link
                    href={`/${hrefLink[index]}`}
                    key={option.name}
                    onMouseOver={() => setIsHovered(option.name)}
                  >
                    <ListItem
                      sx={{
                        '&:hover': {
                          '.MuiListItemText-primary': { color: 'red' },
                        },
                      }}
                    >
                      <ListItemText
                        primary={option.name}
                        sx={{ color: isActive ? 'red' : 'inherit' }}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>

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
      {isHoverd && (
        <Box
          sx={{
            position: 'absolute',
            // top: '100px',
            zIndex: '1000',
            width: '100%',
            height: '480px',
            backgroundColor: '#fff',
          }}
        >
          <Container>
            <Grid container spacing={1} columns={15}>
              <Grid item md={3} sm={4} xs={2}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {options.map(
                    (items) => isHoverd === items.name && <p>{items.nameCat}</p>
                  )}
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {options.map((items) =>
                    items.name === isHoverd
                      ? items.category?.map((items) => (
                          <Typography sx={{ color: '#404040' }}>
                            {items}
                          </Typography>
                        ))
                      : null
                  )}
                </Box>
              </Grid>
              <Grid item md={2} sm={4} xs={12}>
                <Box
                  sx={{
                    color: '#0C0C0C',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {options.map(
                    (items) =>
                      isHoverd === items.name && <p>{items.nameFeat}</p>
                  )}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {options.map((items) =>
                    items.name === isHoverd
                      ? items.featured?.map((items) => (
                          <Typography sx={{ color: '#404040' }}>
                            {items}
                          </Typography>
                        ))
                      : null
                  )}
                </Box>
              </Grid>
              <Grid item md={2} sm={4} xs={12}>
                <Box
                  sx={{
                    color: '#0C0C0C',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: '20px',
                  }}
                >
                  {options.map(
                    (items) =>
                      isHoverd === items.name && <p>{items.nameMore}</p>
                  )}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {options.map((items) =>
                    items.name === isHoverd
                      ? items.More?.map((items) => (
                          <Typography sx={{ color: '#404040' }}>
                            {items}
                          </Typography>
                        ))
                      : null
                  )}
                </Box>
              </Grid>

              {/* axaaaa */}

              <Grid item xs={4}>
                <Box>
                  <Image
                    src={BlousesImageBanner}
                    width={400}
                    height={400}
                    alt="mmmm"
                    style={{ objectFit: 'cover'  , width :'100%' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  {' '}
                  <Image
                    src={PlusSizeImageBanner}
                    width={400}
                    height={400}
                    alt="kkkk"
                    style={{ objectFit: 'cover' , width :'100%' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}
