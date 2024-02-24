'use client';

import BannerHeader from '@/components/BannerHeader';
import Footer from '@/components/Footer';
import LoginAccount from '@/components/Login';
import NavBar from '@/components/NavBar';
import { Box } from '@mui/material';

export default function Login() {
  return (
    <>
      <BannerHeader />
      <NavBar />
       <LoginAccount />

      <Footer />
    </>
  );
}
