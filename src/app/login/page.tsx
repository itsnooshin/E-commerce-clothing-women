'use client';

import BannerHeader from '@/src/components/headers/BannerHeader';
import Footer from '@/src/components/layout/Footer';
import FormLogin from '@/src/components/aut/FormLogin';
import NavBar from '@/src/components/layout/NavBar';

export default function Login() {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <FormLogin />
      <Footer />
    </>
  );
}
