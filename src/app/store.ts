import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@/src/featuers/product/productSlice';
import cartSlice from '@/src/featuers/cart/cartSlice';
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
