import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productCategoryService from "./productCategoryService";

let initialState = {
  productCategories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getProductCategories = createAsyncThunk(
  "get-product-categories",
  async (_, thunkAPI) => {
    try {
      return await productCategoryService.getAllProductCategories();
    } catch (error) {
      let { message } = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productCategorySlice = createSlice({
  name: "product-category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productCategories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productCategorySlice.reducer;
