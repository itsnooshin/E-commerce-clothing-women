'use client';

import NavBar from '@/components/NavBar';
import { Container } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
import { useEffect, useState } from 'react';
import BannerHeader from '@/components/BannerHeader';

export default function Home() {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <HeroSection />

      <BestSellers />
     
    
    </>
  );
}
