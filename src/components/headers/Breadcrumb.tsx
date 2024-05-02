import React, { PropsWithChildren } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { Typography, Box } from '@mui/material';

interface PropsType {
  name: string;
  ItemMiddle: string;
  ItemLink: string;
}

function MyBreadcrumbs(props: PropsWithChildren<PropsType>) {
  const { name, ItemMiddle, ItemLink } = props;
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#606060' }}>
          <Link href="/" style={{ color: '#748C70' }}>
            Home
          </Link>
          <Link href={`/collection/${ItemLink}`} style={{ color: '#748C70' }}>
            {ItemMiddle}
          </Link>

          <Typography color="text.primary">
            {name.split(' ').slice(0, 2).join(' ')}
          </Typography>
        </Breadcrumbs>
      </Box>

      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ color: '#606060', fontSize: '1rem' }}
        >
          <Link
            href="/"
            style={{ color: '#748C70', fontSize: '1rem', paddingLeft: '15px' }}
          >
            Home
          </Link>
          <Link
            href={`/collection/${ItemLink}`}
            style={{ color: '#748C70', fontSize: '1rem' }}
          >
            {ItemMiddle}
          </Link>

          <Typography color="text.primary">
            {name.split(' ').slice(0, 2).join(' ')}
          </Typography>
        </Breadcrumbs>
      </Box>
    </>
  );
}

export default MyBreadcrumbs;
