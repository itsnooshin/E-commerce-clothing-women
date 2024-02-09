'use client';

import NavBar from '@/components/NavBar';
import { Container } from '@mui/material';
import HeroSection from '@/components/HeroSection';
import BestSellers from '@/components/BestSellers';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Container>
        <BestSellers />
      </Container>
    </>
  );
}
