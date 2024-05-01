'use client';
import NavBar from '@/src/components/layout/NavBar';
import BannerHeader from '@/src/components/headers/BannerHeader';
import {
  Box,
  Button,
  Container,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/app/store';
import { getProduct } from '@/src/featuers/product/productSlice';
import { useEffect, useState } from 'react';
import FilterCollection from '@/src/components/layout/FilterCollection';
import ProductMain from '@/src/components/layout/ProductMain';
import SkeletonProductCollection from '@/src/components/utility/SkeletonProductCollection';
import LoadingButton from '@/src/components/layout/LoadingButtonItems';
import CollectionHeader from '@/src/components/headers/CollectionHeader';
import CollectionImageBanner from '@/src/components/layout/CollectionImage';
import Footer from '@/src/components/layout/Footer';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';
import CollectionImageBannerMobile from '@/src/components/headers/CollectionImageBannerMobile';
import Link from 'next/link';
import HeartIcon from '@/src/components/layout/heartIcon';
import Image from 'next/image';
import FilterOptionMobile from '@/src/components/headers/FilterOptionMobile';
import TuneIcon from '@mui/icons-material/Tune';

function page() {
  const [displayCount, setDisplayCount] = useState<number>(6);
  const [openFilter, setOpenFilter] = useState(false);
  const { items, loading, error } = UseProductsReturn();

  function handleMoreData() {
    setDisplayCount((prev) => prev + 6);
  }
  return (
    <>
      <Box>
        <BannerHeader />
        <NavBar />
        {loading ? (
          <Container sx={{ mb: 7, mt: 2 }}>
            {' '}
            <Skeleton variant="rectangular" width={95} />{' '}
          </Container>
        ) : (
          <CollectionHeader item={'Shop All'} />
        )}

        <Box
          sx={{ mt: 4, display: { xs: 'none', md: 'flex' } }}
        >
          <CollectionImageBanner />
        </Box>
        {loading ? (
          <Box>
            {' '}
            <Skeleton variant="rectangular" width={'100%'} height={400} />{' '}
          </Box>
        ) : (
          <Box
            sx={{
              mt: 4,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <CollectionImageBannerMobile />
          </Box>
        )}

        <Container sx={{ marginTop: '2rem' }}>
          <Box
            sx={{
              mb: 3,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            {loading ? (
              <Skeleton variant="text" width="90px" />
            ) : (
              <Typography>{items.length} items</Typography>
            )}
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <Grid item xs={3}>
              <FilterCollection />
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={2} sx={{ marginBottom: '3rem' }}>
                {loading ? (
                  <Grid
                    container
                    spacing={{ xs: 2 }}
                    item
                    sx={{ marginBottom: '5rem' }}
                  >
                    <SkeletonProductCollection displayCount={displayCount} />
                  </Grid>
                ) : (
                  <ProductMain items={items} count={displayCount} />
                )}
              </Grid>
              <LoadingButton
                items={items}
                loading={loading}
                count={displayCount}
                handleData={handleMoreData}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'center',
                }}
                onClick={() => setOpenFilter(true)}
              >
                <Typography>
                  <Skeleton variant="rectangular" width={90} />
                </Typography>
              </Box>
            ) : (
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#000000',
                  textTransform: 'capitalize',
                  gap: '1rem',
                  width: '100%',
                  justifyContent: 'center',
                }}
                onClick={() => setOpenFilter(true)}
              >
                <Typography>
                  <TuneIcon />
                </Typography>
                Filter
              </Button>
            )}

            <FilterOptionMobile onOpen={openFilter} onState={setOpenFilter} />
          </Box>
          <Container sx={{ mt: 6, display: { xs: 'flex', md: 'none' }, mb: 5 }}>
            {/* gdfgfdgdg
            <FilterOptionMobile onOpen={openFilter} onState={setOpenFilter} /> */}

            <Grid container spacing={2}>
              {loading
                ? Array.from({ length: 6 }, (_, index) => (
                    <Grid item xs={6} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{
                            fontSize: '1rem',
                            height: '200px',
                          }}
                        />

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Box>
                            <Skeleton variant="text" width="150px" />
                            <Skeleton variant="text" width="100px" />
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                              }}
                            >
                              <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                              />
                              <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                              />
                              <Skeleton
                                variant="circular"
                                width={20}
                                height={20}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))
                : items.slice(0, displayCount).map((item) => (
                    <Grid item xs={6}>
                      <>
                        <Link
                          style={{ color: 'inherit' }}
                          href={{
                            pathname: `/collection/all/products/${item.id}`,
                            query: { name: `${item.product_name}` },
                          }}
                        >
                          <Box sx={{ position: 'relative' }}>
                            <Image
                              src={item.product_img[0]}
                              style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: 'auto',
                              }}
                              alt="image for product"
                              width={500}
                              height={500}
                            />

                            {item.product_new ? (
                              <div
                                style={{
                                  position: 'absolute',
                                  background: 'white',
                                  top: '10px',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  left: '0.5rem',
                                }}
                              >
                                <p style={{ padding: '0.2rem 0.7rem' }}>New</p>
                                <Typography
                                  sx={{
                                    position: 'absolute',
                                    left: { xs: '32vw', sm: '38vw' },
                                  }}
                                >
                                  {' '}
                                  <HeartIcon fill="white" stroke="black" />
                                </Typography>
                              </div>
                            ) : (
                              <Typography
                                sx={{
                                  position: 'absolute',
                                  left: { xs: '33vw', sm: '38vw' },
                                  top: '10px',
                                }}
                              >
                                <HeartIcon fill="white" stroke="black" />
                              </Typography>
                            )}
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
                                gap: '4px',
                              }}
                            >
                              <Typography
                                sx={{ fontWeight: '700', fontSize: '0.9rem' }}
                              >
                                {item.product_name
                                  .split(' ')
                                  .slice(0, 2)
                                  .join(' ')}
                              </Typography>
                              <Typography sx={{ fontSize: '0.9rem' }}>
                                {item.product_name
                                  .split(' ')
                                  .slice(2)
                                  .join(' ')}
                              </Typography>

                              <Box>
                                <Typography
                                  sx={{
                                    fontWeight: '700',
                                    marginRight: '1rem',
                                    fontSize: '0.9rem',
                                  }}
                                >
                                  ${item.procuct_price}
                                </Typography>
                              </Box>

                              <Box sx={{ display: 'flex', gap: '6px', mt: 1 }}>
                                {item.product_color.map((items) => (
                                  <Typography
                                    sx={{
                                      bgcolor: `${items?.hex}`,
                                      width: '16px',
                                      height: '16px',
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
                          </Box>
                        </Link>
                      </>
                    </Grid>
                  ))}
              <LoadingButton
                items={items}
                loading={loading}
                count={displayCount}
                handleData={handleMoreData}
              />
            </Grid>
          </Container>
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default page;
