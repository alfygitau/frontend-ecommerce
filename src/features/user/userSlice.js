import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

let initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await userService.register(userData);
    } catch (error) {
      let { message } = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess === true) {
          toast.info("User created successfully");
        }
        state.createdUser = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      });
  },
});

export default userSlice.reducer;
