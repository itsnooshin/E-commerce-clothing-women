import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push({ ...action.payload });
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
