import { createSlice } from "@reduxjs/toolkit";

let wishlistFromStorage = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: wishlistFromStorage,
  },
  reducers: {
    addToWishlist: (state, action) => {
      let itemInWishlist = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (itemInWishlist) {
      } else {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
  extraReducers: (builder) => {},
});

export default wishlistSlice.reducer;

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
