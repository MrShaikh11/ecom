import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/CartSlice";
import productReducer from "../features/product/productSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
