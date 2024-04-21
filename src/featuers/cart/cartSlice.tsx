import store from '@/src/app/store';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  image: string;
  price: string;
  color: string | undefined;
  size: string;
}

interface CartState {
  items: CartItem[];
}

const Browser = typeof window !== 'undefined';
const initialState: CartState = {
  items: Browser
    ? JSON.parse(window.localStorage.getItem('cartItem') || '[]')
    : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push({ ...action.payload });
      localStorage.setItem('cartItem', JSON.stringify(state.items));
    },
    RemoveItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(
        'cartItem',
        JSON.stringify(
          state.items.filter((item) => item.id !== action.payload),
        ),
      );
    },
  },
});

export const { addCart, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
