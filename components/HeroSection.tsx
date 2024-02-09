'use client';

import Image from 'next/image';
import HeroImage from '../public/hero-Desktop.png';
import { Box } from '@mui/material';

function HeroSection() {
  return (
    <Image
      src={HeroImage}
      alt="Image for hero"
      style={{ width: '100%', objectFit: 'cover', height: 'auto' }}
      quality={100}
      width={500}
      height={500}
      sizes="100vw"
    />
  );
}

export default HeroSection;
