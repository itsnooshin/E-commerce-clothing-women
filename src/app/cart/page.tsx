'use client';
import { Container } from '@mui/material';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';
import SpinnerLoader from '@/src/components/layout/SpinnerLoader';
import CartDisplayMobile from '@/src/components/layout/CartDisplayMobile';
import CartDisplayDesktop from '@/src/components/layout/CartDisplayDesktop';
import useLocalstorage from '@/src/hooks/useLocalstorage';
import useProductPrice from '@/src/hooks/useProductCart';

export default function page() {
  const { loading } = UseProductsReturn();
  const { Tax, totalPrice, orderTotal, shopsItem, handleRemove } =
    useProductPrice();
  useLocalstorage();

  if (loading) return <SpinnerLoader />;
  return (
    <Container sx={{ pb: { md: 6 } }}>
      <CartDisplayMobile
        orderTotal={orderTotal}
        shopsItem={shopsItem}
        Tax={Tax}
        totalPrice={totalPrice}
        handleRemove={handleRemove}
      />
      <CartDisplayDesktop
        orderTotal={orderTotal}
        shopsItem={shopsItem}
        Tax={Tax}
        totalPrice={totalPrice}
        handleRemove={handleRemove}
      />
    </Container>
  );
}
