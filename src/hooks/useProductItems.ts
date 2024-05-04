import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/src/app/store';
import { RemoveItem } from '@/src/featuers/cart/cartSlice';
export default function useProductItems() {
  const shopsItem = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch<AppDispatch>();
  const handleRemove = (id: any) => {
    dispatch(RemoveItem(id));
  };

  return { shopsItem, handleRemove };
}
