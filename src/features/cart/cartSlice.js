import { createSlice } from "@reduxjs/toolkit";

let cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

let initialState = {
  cart: cartFromStorage,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state?.cart?.find(
        (item) => item.product._id === action.payload.product._id
      );
      if (itemInCart) {
        itemInCart.count++;
      } else {
        state?.cart?.push({ ...action.payload, count: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart?.filter(
        (item) => item.product._id !== action.payload.product._id
      );
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    incrementCount: (state, action) => {
      const item = state.cart.find(
        (item) => item.product._id === action.payload.product._id
      );
      item.count++;
    },
    decreaseCount: (state, action) => {
      const itemInCart = state?.cart?.find(
        (item) => item.product._id === action.payload.product._id
      );
      if (itemInCart.count === 1) {
        itemInCart.count = 1;
      } else {
        itemInCart.count--;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, removeFromCart, incrementCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
