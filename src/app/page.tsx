'use client';

import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';
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
