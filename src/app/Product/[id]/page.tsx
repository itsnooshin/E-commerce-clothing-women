'use client';
import BannerHeader from '@/src/components/headers/BannerHeader';
import NavBar from '@/src/components/layout/NavBar';
import ProductDetail from '@/src/components/layout/ProductDetail';
import { getSingleproduct } from '@/src/helper';
import { Product } from '@/src/types/productTypes';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  colors,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SpinnerLoader from '@/src/components/layout/SpinnerLoader';
import AccordionProduct from '@/src/components/layout/AccordionProduct';
import SizeGuidModal from '@/src/components/layout/SizeGuidModal';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ProductDeatilHome from '@/src/components/layout/ProductDeatilHome';

export default function page({ params }: any) {
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const { singleProduct } = await getSingleproduct(id);
        setSingleProduct(singleProduct);
      };

      fetchData();
    }
  }, [id]);

  if (!singleProduct) return <SpinnerLoader />;
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            mt: 4,
          }}
        >
          <Link href="/">
            <Typography sx={{ color: '#748C70' }}> Home</Typography>
          </Link>
          <span>/</span>
          <Link href="">
            <Typography>{singleProduct.product_name}</Typography>
          </Link>
        </Box>
      </Container>

      <ProductDeatilHome product={singleProduct} />
    </>
  );
}
