'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import HoverMenuDesktop from './HoverMenuDesktop';
import Modal from '@mui/material/Modal';
import BannerHeader from './BannerHeader';
import MainNavBar from './MainNavBar';


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
    imageDescription: ['Blouses', 'Plus Size'],
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
    imageDescription: ['Fall Collection', 'Blouses', 'Dresses'],
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
    imageDescription: ['Blouses', 'Dresses'],
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
    imageDescription: ['Pants', 'Dresses', 'Blouses'],
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
  const [isOpen, setIsOpen] = useState(false);

  const hrefLink = options.map((option) =>
    option.name.toLowerCase().replace(/\s+/g, '-')
  );
  const isActive = pathName.startsWith(`/${hrefLink}`);

  return (
    <>
      <MainNavBar
        setIsOpen={setIsOpen}
        setIsHovered={setIsHovered}
        options={options}
        isActive={isActive}
        hrefLink={hrefLink}
      />

      <Modal
        open={isOpen}
        style={{ backdropFilter: 'blur(5px)', border: 'none' }}
      >
        <Box
          style={{ height: '500px', backgroundColor: 'white' }}
          onMouseLeave={() => setIsOpen(false)}
        >
          <BannerHeader />
          <MainNavBar
            setIsOpen={setIsOpen}
            setIsHovered={setIsHovered}
            options={options}
            isActive={isActive}
            hrefLink={hrefLink}
          />
          <HoverMenuDesktop
            setHover={setIsHovered}
            options={options}
            isHoverd={isHoverd}
            setIsOpen={setIsOpen}
          />
        </Box>
      </Modal>
    </>
  );
}
