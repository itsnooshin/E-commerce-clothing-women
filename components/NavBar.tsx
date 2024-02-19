'use client';
import { Toolbar } from '@mui/material';
import { AppBar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconHeader from './IconHeader';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NavBarMobile from './NavBarMobile';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import LogoWebsite from '@/components/LogoWebsite';
import LogoMobileWebsite from '@/components/LogoMobileWebsite';
import DesktopMenu from './DesktopMenu';
import HoverMenuDesktop from './HoverMenuDesktop';

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
    imageData: [
      'https://static.zara.net/photos///2023/I/0/1/p/9313/726/401/2/w/563/9313726401_1_1_1.jpg?ts=1700736921216',
      'https://static.zara.net/photos///2024/V/0/1/p/4387/096/390/17/w/750/4387096390_1_1_1.jpg?ts=1707923925845',
    ],
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
  console.log(hrefLink);
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
            p: '10px 0',
          }}
        >
          <LogoWebsite />

          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: '9px' }}>
            <MenuOutlinedIcon />
            <SearchIcon />
          </Box>

          <DesktopMenu
            options={options}
            isActive={isActive}
            hrefLink={hrefLink}
            setIsHovered={setIsHovered}
          />

          <LogoMobileWebsite />
          <Box>
            <IconHeader />
          </Box>
          <NavBarMobile />
        </Toolbar>
      </AppBar>

      <HoverMenuDesktop options={options} isHovered={isHoverd} />
    </>
  );
}
