import { getImages } from "@/src/lib/utilits/apImages";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";



// async operation
export const getProduct = createAsyncThunk("getProduct", async () => {
  const data = await getImages();
  console.log(data);
  return data;
});

interface Options {
  name?: string;
  category?: string[];
  featured?: string[];
  More?: string[];
  nameCat?: string;
  nameFeat?: string;
  nameMore?: string;
  imageData?: string[];
  imageDescription?: string[];
}

interface productState {
  items?: Options[] | null;
  loading: boolean;
  error?: string | null;
}
const initialState : productState = {
  items: null,
  loading: false,
  error: null,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<productState>) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
