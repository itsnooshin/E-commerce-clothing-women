'use client';

import NavBar from '@/src/components/layout/NavBar';
import HeroSection from '@/src/components/sections/HeroSection';
import BestSellers from '@/src/components/sections/BestSellers';
import BannerHeader from '@/src/components/headers/BannerHeader';
import Collection from '@/src/components/sections/Collection';
import MoodiWeek from '@/src/components/sections/MoodiWeek';
import Sustainability from '@/src/components/sections/Sustainability';
import FollowUs from '@/src/components/sections/FollowUs';
import Footer from '@/src/components/layout/Footer';
import UseProductsReturn from '../hooks/UseProductsReturn';

export default function Home() {
  const { loading } = UseProductsReturn();


  return (
    <>
      <BannerHeader />
      <NavBar />
      <HeroSection />
      <BestSellers />
      <Collection />
      <MoodiWeek />
      <Sustainability />
      <FollowUs />
      <Footer />
    </>
  );
}
