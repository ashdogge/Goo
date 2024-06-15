import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bidTypeReducer from "./bidTypeSlice";
import shoppingItemReducer from "./shoppingSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    bidTypes: bidTypeReducer,
    shoppingItems: shoppingItemReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
