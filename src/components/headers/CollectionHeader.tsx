import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
interface Types {
  item: string;
}
const CollectionHeader = (props: PropsWithChildren<Types>) => {
  const { item } = props;
  return (
    <Container>
      <Box sx={{ display: 'flex', gap: '15px', mt: 3 }}>
        <Link style={{ color: '#748C70' }} href={'/'}>
          Home
        </Link>
        <Typography>/</Typography>
        <Typography>{item}</Typography>
      </Box>
    </Container>
  );
};
export default CollectionHeader;
