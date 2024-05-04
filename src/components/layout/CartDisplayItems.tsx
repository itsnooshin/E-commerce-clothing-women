import { CartItem } from '@/src/types/CartItemTypes';
import React, { PropsWithChildren, useState } from 'react';
import CartDisplayMobile from './CartDisplayMobile';
import CartDisplayDesktop from './CartDisplayDesktop';
import useProductDetails from '@/src/hooks/useProductDetails';
interface Props {
  shopsItem: CartItem[];
  handleRemove: (id: any) => void;
}
export default function CartDisplayItems(props: PropsWithChildren<Props>) {
  const { shopsItem, handleRemove } = props;

  const {
    counts,
    itemsEl,
    handleChangeHandleMinus,
    handleChangeHandle,
    Order,
    total,
    Tax
  } = useProductDetails();

  return (
    <>
      <CartDisplayDesktop
        counts={counts}
        handleChangeHandleMinus={handleChangeHandleMinus}
        itemsEl={itemsEl}
        shopsItem={shopsItem}
        total={total}
        order={Order}
        Tax={Tax}
        handleChangeHandle={handleChangeHandle}
        handleRemove={handleRemove}
      />

      <CartDisplayMobile
        counts={counts}
        handleChangeHandleMinus={handleChangeHandleMinus}
        itemsEl={itemsEl}
        shopsItem={shopsItem}
        total={total}
        order={Order}
        Tax={Tax}
        handleChangeHandle={handleChangeHandle}
        handleRemove={handleRemove}
      />
    </>
  );
}
