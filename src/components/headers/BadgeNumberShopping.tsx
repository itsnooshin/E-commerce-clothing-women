import { Badge } from '@mui/material';
import Link from '@mui/material/Link';
import React, { PropsWithChildren } from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

interface Types {
  badgetItem: string;
  handleOpenModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BadgeNumberShopping(props: PropsWithChildren<Types>) {
    const  {badgetItem , handleOpenModal} =props 
  return (
    <Badge
      badgeContent={badgetItem}
      sx={{
        '& .MuiBadge-badge': {
          color: 'white',
          backgroundColor: '#5A6D57',
        },
      }}
    >
      <Link
        component="button"
        color="inherit"
        underline="none"
        onClick={handleOpenModal}
      >
        <ShoppingBagOutlinedIcon />
      </Link>
    </Badge>
  );
}
