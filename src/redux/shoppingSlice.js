import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingItems: [
],
};

export const shoppingSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
        addItem: (state, action) => {
      state.shoppingItems.push(action.payload); 
    },
    removeItem: (state, action) => {
        state.shoppingItems.splice(action.payload, 1);
      },
  },
});
export const { addItem, removeItem } = shoppingSlice.actions;

export const selectShoppingItems = (state) => state.shoppingItems.shoppingItems;

export default shoppingSlice.reducer;
