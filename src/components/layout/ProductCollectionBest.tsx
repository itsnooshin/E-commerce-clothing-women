import React from 'react';
import Image from 'next/image';
import { Box, Button, Grid, Typography } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import { Product } from '@/src/types/productTypes';
import Link from 'next/link';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeartIcon from './heartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/app/store';

interface ProductValue {
  items: Product[];
  count: number;
}

export default function ProductMainCollectionBlouses(
  props: PropsWithChildren<ProductValue>,
) {
  const { items, count } = props;

const wishlistitems = useSelector((store: RootState) => store.cart.items);
const dispatch = useDispatch<AppDispatch>();




  const [isSelected, setIsSelected] = useState(null);
  const handleChange = (id: any) => {
    setIsSelected(isSelected === id ? null : id);
  };

  const [isSelectedId, setIsSelectedId] = useState(null);

  const HandleChangeHeart = (id: any) => {
    setIsSelectedId(isSelectedId === id ? null : id);
  };
  return (
    <>
      {items?.slice(0, count).map((item) => (
        <Grid
          item
          xs={12}
          sm={6}
          key={item.id}
          sx={{ marginBottom: '1rem', position: 'relative' }}
        >
          <Link
            href={{
              pathname: `/collection/best-sellers/products/${item.id}`,
              query: { name: `${item.product_name}` },
            }}
            passHref
            onMouseOver={() => handleChange(item.id)}
            onMouseLeave={() => handleChange(item.id)}
            style={{ color: 'inherit', transition: 'all 1s ease-in-out' }}
          >
            <Image
              src={
                isSelected === item.id
                  ? item.product_img[1]
                  : item.product_img[0]
              }
              style={{ objectFit: 'cover' }}
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
                  {item.product_color.map((items) => (
                    <Typography
                      sx={{
                        bgcolor: `${items?.hex}`,
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'inline-block',
                        border: `${
                          items?.hex === '#FFFFFF' ? '1px solid #dad7cd' : null
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
          <Box
            onClick={(event) => {
              event.stopPropagation();
              HandleChangeHeart(item.id);
            }}
            sx={{
              cursor: 'pointer',
              position: 'absolute',
              left: '28vw',
              top: '30px',
            }}
          >
            {' '}
            {isSelectedId === item.id ? (
              <HeartIcon fill="red" stroke="red" />
            ) : (
              <HeartIcon fill="white" stroke="black" />
            )}
          </Box>
        </Grid>
      ))}
    </>
  );
}
