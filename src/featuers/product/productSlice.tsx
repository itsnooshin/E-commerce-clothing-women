import { getImages } from "@/src/lib/utilits/apImages";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/src/types/productTypes";

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: true,
  error: null,
};

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const data = await getImages();
  return data as Product[];
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;

