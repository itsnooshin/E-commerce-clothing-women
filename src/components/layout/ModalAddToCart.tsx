import { CartItem } from '@/src/types/CartItemTypes';
import { Modal, Box, Typography, Button } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import EmptyCart from './EmptyCart';
import DisplayProductCart from './DisplayProductCart';

interface Types {
  openModal: boolean;
  shopsItem: CartItem[];
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleRemove: (id: any) => void;
}

export default function ModalAddToCart(props: PropsWithChildren<Types>) {
  const { handleRemove, openModal, shopsItem, handleCloseModal } = props;

  return (
    <Modal open={openModal} sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Box>
        {shopsItem.length === 0 ? (
          <EmptyCart handleCloseModal={handleCloseModal} />
        ) : (
          <DisplayProductCart
            shopsItem={shopsItem}
            handleCloseModal={handleCloseModal}
            handleRemove={handleRemove}
          />
        )}
      </Box>
    </Modal>
  );
}
