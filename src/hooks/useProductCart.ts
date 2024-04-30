import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/src/app/store';
import { RemoveItem } from '@/src/featuers/cart/cartSlice';
import { useState } from 'react';
export default function useProductPrice() {
  const shopsItem = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch<AppDispatch>();


  const totalPrice = shopsItem
    .map((item) => Number(item.price) * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);
  const Tax = useSelector((store: RootState) => store.cart.Tax);
  const orderTotal = Number(Tax) + Number(totalPrice);
  const handleRemove = (id: any) => {
    dispatch(RemoveItem(id));
  };



  return { totalPrice, Tax, orderTotal, shopsItem, handleRemove };
}
