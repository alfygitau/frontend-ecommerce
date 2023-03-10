import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import productCategoryReducer from "../features/product-categories/productCategorySlice";
import authReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    product_categories: productCategoryReducer,
    cart:cartReducer,
    wishlist:wishlistReducer,
  },
});
