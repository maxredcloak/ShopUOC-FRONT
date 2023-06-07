import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let result = state.items.filter((x) => x.id === action.payload.id);
      if (result.length !== 0) {
        let returnValue = result[0];
        returnValue.quantity += 1;
      } else {
        let returnValue = action.payload;
        returnValue.quantity = 1;
        state.items = [...state.items, returnValue];
      }
    },
    deleteItem: (state, action) => {
      let result = state.items.filter((x) => x.id === action.payload.id);
      if (result.length !== 0) {
        let returnValue = result[0];
        if (returnValue.quantity === 1) {
          state.items = state.items.filter((x) => x.id !== action.payload.id);
        } else {
          returnValue.quantity -= 1;
        }
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, clearCart } = cart.actions;

export default cart.reducer;
