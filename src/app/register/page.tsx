'use client';

import BannerHeader from '@/src/components/headers/BannerHeader';
import Footer from '@/src/components/layout/Footer';
import NavBar from '@/src/components/layout/NavBar';
import RegisterAccount from '@/src/components/aut/FormRegister';

export default function Register() {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <RegisterAccount />
      <Footer />
    </>
  );
}
