import React, { useState } from 'react';
import UseProductsReturn from './UseProductsReturn';
import useProductItems from './useProductItems';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export default function useProductDetails() {
  const { shopsItem } = useProductItems();
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
  const Tax = useSelector((store: RootState) => store.cart.Tax);
  const total = shopsItem
    .map((item, index) => Number(item.price) * (counts[index] + item.quantity))
    .reduce((acc, cur) => acc + cur, 0);
  const Order = Number(Tax) + Number(total);

  return {
    itemsEl,
    Tax,
    total,
    Order,
    handleChangeHandle,
    handleChangeHandleMinus,
    counts,
  };
}
