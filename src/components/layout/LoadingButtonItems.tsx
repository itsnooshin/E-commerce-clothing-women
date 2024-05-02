import { Product } from '@/src/types/productTypes';
import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';

interface Types {
  items: Product[];
  loading: boolean;
  count: number;
  handleData: (hover: number) => void;
}

const LoadingButtonItems = (props: PropsWithChildren<Types>) => {
  const { items, loading, count, handleData } = props;
  const onClickHandler = () => handleData(count);
  return (
    <>
      {!loading && count < items?.length && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 1,
            width: { xs: '100%' },
          }}
        >
          <Button
            onClick={onClickHandler}
            sx={{
              color: '#5A6D57',
              border: '1px solid #5A6D57',
              padding: '0.6rem 3rem',
              borderRadius: 0,
              textTransform: 'capitalize',
              marginBottom: '4rem',
              marginTop: '2rem',
            }}
          >
            Load more
          </Button>
        </Box>
      )}
    </>
  );
};
export default LoadingButtonItems;
