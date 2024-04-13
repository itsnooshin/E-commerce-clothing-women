import { Modal, Box, Button, Typography } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

import { CartItem } from "@/src/types/CartItemTypes";
import EmptyCart from "./EmptyCart";
import DisplayProductCart from "./DisplayProductCart";

interface Types {
  shopsItems: CartItem[];
  openModal: boolean;
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleRemove: (id: any) => void;
}

export default function ModalCart(props: PropsWithChildren<Types>) {
  const { shopsItems, openModal, handleCloseModal, handleRemove } = props;
  return (
    <Modal open={openModal}>
      {shopsItems.length === 0 ? (
        <EmptyCart handleCloseModal={handleCloseModal} />
      ) : (
        <DisplayProductCart
          shopsItem={shopsItems}
          handleCloseModal={handleCloseModal}
          handleRemove={handleRemove}
        />
      )}
    </Modal>
  );
}
