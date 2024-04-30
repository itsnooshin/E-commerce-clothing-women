import { useEffect } from 'react';
import { setCartItems } from '@/src/featuers/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/app/store';

export default function useLocalstorage() {
  const dispatch = useDispatch<AppDispatch>();
  const shopsItem = useSelector((store: RootState) => store.cart.items);

  useEffect(() => {
    const getItemCard = localStorage.getItem('cartItem');
    if (getItemCard) {
      dispatch(setCartItems(JSON.parse(getItemCard)));
    }
  }, [dispatch]);
}
