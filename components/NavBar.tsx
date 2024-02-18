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

// if images.lengt 2 xs = 4 but if its 3 pict xs 2
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
    imageData: [
      'https://www.thisisaday.com/cdn/shop/products/Lifestyle_Something_Borrowed_Shirt_White_6cbbe157-e76b-4a34-99f3-35ec9f4065dc_1400x.jpg?v=1694755042',
      'https://www.thisisaday.com/cdn/shop/products/Something-Borrowed-Dress-Midnight-Half_1400x.jpg?v=1649306008',
    ],
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
    imageData: [
      'https://media.chicmi.com/853300-preview.jpg',
      'https://www.popsalewear.com/wp-content/uploads/2023/11/fa2f1c3100fdc58d08bf6b3def54ebc6_0.jpg',
      'https://www.thisisaday.com/cdn/shop/files/MINI-DRESS-BEACH-0098-Edit_1400x.jpg?v=1690476380',
    ],
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
    imageData : [
      'https://static.zara.net/photos///2023/I/0/1/p/9313/726/401/2/w/563/9313726401_1_1_1.jpg?ts=1700736921216' ,
      'https://static.zara.net/photos///2024/V/0/1/p/4387/096/390/17/w/750/4387096390_1_1_1.jpg?ts=1707923925845'
    ]
  },
  {
    name: 'Plus Size',
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
    imageData: [
      'https://avatars.dzeninfra.ru/get-zen_doc/3414159/pub_617a86671e63a0483fd35e77_617a873e58457b4e20cb1d9d/scale_1200',
      'https://www.thisisaday.com/cdn/shop/products/Wind-Down-Dress-Coconut-Half_1400x.jpg?v=1649333228',
      'https://www.thisisaday.com/cdn/shop/products/Something-Borrowed-Shirt-Black-Half_1400x.jpg?v=1652487628',
    ],
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
    imageData: [
      'https://freethelabel.com/cdn/shop/products/ElbaDressOff-WhiteFreeTheLabel4.jpg?v=1702279927',
      'https://i.ibb.co/gr0qQY8/IMG-8663.jpg',
    ],
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
            <Grid container spacing={2} columns={15}>
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

              {options.map((items) =>
                isHoverd === items.name && items.imageData?.length === 2
                  ? items.imageData.map((items) => (
                      <Grid item xs={4}>
                        <Box>
                          <Image
                            src={items}
                            alt="jjjj"
                            width={400}
                            height={400}
                            style={{ objectFit: 'cover', width: '100%' }}
                          />
                        </Box>
                      </Grid>
                    ))
                  : isHoverd === items.name
                  ? items.imageData?.map((items, index) => (
                      <Grid item xs={2.5} key={index}>
                        <Box>
                          <Image
                            src={items}
                            alt="Display Image"
                            width={400}
                            height={400}
                            style={{ objectFit: 'cover', width: '100%' }}
                          />
                        </Box>
                      </Grid>
                    ))
                  : null
              )}
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
}
