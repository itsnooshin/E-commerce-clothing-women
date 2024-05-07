import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@/src/featuers/product/productSlice';
import cartSlice from '@/src/featuers/cart/cartSlice';
import wishlistSlice from '@/src/featuers/wishlist/wishlistSlice';
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
