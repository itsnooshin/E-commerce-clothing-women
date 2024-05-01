import { CartItem } from '@/src/types/CartItemTypes';
import React, { PropsWithChildren, useState } from 'react';
import CartDisplayMobile from './CartDisplayMobile';
import CartDisplayDesktop from './CartDisplayDesktop';
interface Props {
  shopsItem: CartItem[];
  Tax: number;
  handleRemove: (id: any) => void;
}
export default function CartDisplayItems(props: PropsWithChildren<Props>) {
  const { shopsItem, Tax, handleRemove } = props;
  const [counts, setCounts] = useState(shopsItem.map(() => 0));
  const handleChangeHandle = (index: number) => {
    setCounts((preview) =>
      preview.map((count, i) => (i === index ? count + 1 : count)),
    );
  };
  const handleChangeHandleMinus = (index: number) => {
    setCounts((preview) =>
      preview.map((count, i) => (i === index ? count - 1 : count)),
    );
  };

  const itemsEl = shopsItem.map((item, index) => counts[index] + item.quantity);
  const total = shopsItem
    .map((item, index) => Number(item.price) * (counts[index] + item.quantity))
    .reduce((acc, cur) => acc + cur, 0);
  const Order = Number(Tax) + Number(total);
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
