'use client';

import BannerHeader from '@/components/BannerHeader';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import RegisterAccount from '@/components/RegisterAccount';

export default function Register() {
  return (
    <>
      <BannerHeader />
      <NavBar />
       <RegisterAccount />
      <Footer/>
    </>
  );
}
