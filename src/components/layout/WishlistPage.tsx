import { AppDispatch, RootState } from '@/src/app/store';
import { wishItems } from '@/src/featuers/wishlist/wishlistSlice';
import { Container, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, {  useEffect } from 'react';
import HeartIcon from './heartIcon';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import BannerHeader from '@/src/components/headers/BannerHeader';
import NavBar from '@/src/components/layout/NavBar';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';
import SpinnerLoader from '@/src/components/layout/SpinnerLoader';

export default function WishlistPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = UseProductsReturn();
  const wishlistitems = useSelector(
    (store: RootState) => store.wishlist.wishListItem,
  );

  useEffect(() => {
    const getWishList = localStorage.getItem('wishlistItem');
    if (getWishList) {
      dispatch(wishItems(JSON.parse(getWishList)));
    }
  }, [dispatch]);

  if (loading) return <SpinnerLoader />;
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          mt: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          fontFamily={'inherit'}
          fontWeight={'700'}
          sx={{}}
        >
          My Wish List
        </Typography>
        <Typography> {wishlistitems.length} item</Typography>
      </Box>
      <Container>
        <Grid container spacing={2} sx={{ mt: 7, mb: 10 }}>
            
          {wishlistitems.map((item) => (
            <Grid item xs ={6} md ={4}>
            <Link
              href={{
                pathname: '/products/',
                query: { name: `${item.product_name}` },
              }}
              style={{ color: 'inherit' }}
            >
              <Image
                src={item.product_img[0]}
                style={{ objectFit: 'cover', width: '100%' }}
                alt="image for product"
                width={400}
                height={400}
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: '2rem',
                  marginLeft: '1rem',
                }}
              >
                {item.product_new && (
                  <Typography
                    sx={{
                      bgcolor: 'white',
                      padding: '0.5rem 1.5rem',
                      marginRight: '17rem',
                    }}
                  >
                    New{' '}
                  </Typography>
                )}
                <Box sx={{ position: 'absolute', left: '24vw' }}>
                  {' '}
                  <HeartIcon fill="white" stroke="black" />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: '6px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3px',
                  }}
                >
                  <Typography sx={{ fontWeight: '700' }}>
                    {item.product_name.split(' ').slice(0, 2).join(' ')}
                  </Typography>
                  <Typography>
                    {item.product_name.split(' ').slice(2).join(' ')}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: '6px', mt: 1 }}>
                    {item.product_color.map((items, index) => (
                      <Typography
                        key={index}
                        sx={{
                          bgcolor: `${items?.hex}`,
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'inline-block',
                          border: `${
                            items?.hex === '#FFFFFF'
                              ? '1px solid #dad7cd'
                              : null
                          }`,
                        }}
                      ></Typography>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: '700',
                      marginRight: '1rem',
                    }}
                  >
                    ${item.procuct_price}
                  </Typography>
                </Box>
              </Box>
            </Link>

            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
