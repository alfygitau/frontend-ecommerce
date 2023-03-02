import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

let initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllProducts = createAsyncThunk(
  "all-products",
  async (_, thunkAPI) => {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      const { message } = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "one-products",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      const { message } = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "all-products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
