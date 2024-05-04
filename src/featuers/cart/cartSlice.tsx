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
  Tax: number;
}

const initialState: CartState = {
  items: [],
  Tax: 38,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size,
      );
      if (index !== -1) {
        state.items[index].quantity =
          state.items[index].quantity + action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem('cartItem', JSON.stringify(state.items));
    },
    RemoveItem: (
      state,
      action: PayloadAction<{ id: string; color: string; size: string }>,
    ) => {
      const RemoveItem = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.color === action.payload.color &&
            item.size === action.payload.size
          ),
      );
      state.items = RemoveItem;

      localStorage.setItem('cartItem', JSON.stringify(RemoveItem));
    },
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addCart, RemoveItem, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
