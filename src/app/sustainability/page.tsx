'use client';

import BannerHeader from '@/src/components/headers/BannerHeader';
import NavBar from '@/src/components/layout/NavBar';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';

const page = () => {
  const { items, loading, error } = UseProductsReturn();
  return (
    <>
      <BannerHeader />
      <NavBar />
      
    </>
  );
};

export default page;
