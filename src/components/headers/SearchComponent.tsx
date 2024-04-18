import {
  Container,
  Box,
  Skeleton,
  Typography,
  Grid,
  Button,
  Drawer,
  IconButton,
} from '@mui/material';
import React from 'react';
import FilterCollection from '../layout/FilterCollection';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import ProductMain from '../layout/ProductMain';
import SkeletonProductCollection from '../utility/SkeletonProductCollection';
import BannerHeader from './BannerHeader';
import SearchField from './SearchField';
import UseProductsReturn from '@/src/hooks/UseProductsReturn';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import ImageNotFound from '@/public/Match not found.png';
import { Suspense, useState } from 'react';
import SpinnerLoader from '@/src/components/layout/SpinnerLoader';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import FilterOptionMobile from './FilterOptionMobile';
import GridItemsSearch from '../layout/GridItemsSearch';

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') as string;
  const { items, loading, error } = UseProductsReturn();
  const [displayCount, setDisplayCount] = useState<number>(6);
  const [openDrawerMobile, setOpenDrawerMobile] = useState(false);
  const queryItems =
    query?.length > 0
      ? items?.filter((item) =>
          item.product_category.toLowerCase().includes(query?.toLowerCase()),
        )
      : [];

  if (loading) return <SpinnerLoader />;
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container sx={{ marginTop: '2rem' }}>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {loading ? (
            <Skeleton variant="text" width="100px" />
          ) : (
            <Typography variant="h6" fontWeight={600} fontFamily={'inherit'}>
              Search Result
            </Typography>
          )}
        </Box>

        <SearchField initialQuery={query} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mb: 4,
          }}
        >
          {queryItems.length === 0 ? (
            <Typography>
              No results found for “{query}”. Check the spelling or use a
              different word or phrase.
            </Typography>
          ) : (
            <Typography>
              {queryItems.length} results found for “{query}”
            </Typography>
          )}
        </Box>
        {queryItems.length === 0 && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 12,
            }}
          >
            <Image
              src={ImageNotFound}
              alt="image for not found"
              width={390}
              height={345}
              style={{ objectFit: 'cover', width: 'auto' }}
            />
          </Box>
        )}

        {queryItems.length > 0 && (
          <>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                onClick={() => setOpenDrawerMobile(true)}
              >
                <Typography>
                  <TuneIcon />
                </Typography>
                Filter
              </Button>
              <FilterOptionMobile
                onOpen={openDrawerMobile}
                onState={setOpenDrawerMobile}
              />
            </Box>
             <GridItemsSearch loading = {loading} count = {displayCount} items = {queryItems} />
            <Grid
              container
              spacing={3}
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
                    <ProductMain items={queryItems} count={displayCount} />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
