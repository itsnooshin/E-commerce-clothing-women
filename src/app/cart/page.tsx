'use client';
import { Container } from '@mui/material';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';
import SpinnerLoader from '@/src/components/layout/SpinnerLoader';
import useLocalstorage from '@/src/hooks/useLocalstorage';
import CartDisplayItems from '@/src/components/layout/CartDisplayItems';
import useProductItems from '@/src/hooks/useProductItems';

export default function page() {
  const { loading } = UseProductsReturn();
  const { shopsItem, handleRemove } = useProductItems();

  console.log(shopsItem);

  useLocalstorage();

  if (loading) return <SpinnerLoader />;
  return (
    <Container sx={{ pb: { md: 6 } }}>
      <CartDisplayItems shopsItem={shopsItem} handleRemove={handleRemove} />
    </Container>
  );
}
