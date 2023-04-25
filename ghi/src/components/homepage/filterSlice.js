import { createSlice } from "@reduxjs/toolkit";
import loginSlice from "../login/loginSlice";

const initialState = {
  pass: [],
  price: [],
};

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    addToPass: (state, action) => {
      state.pass = [...state.pass, action.payload];
    },
    removeFromPass: (state, action) => {
      state.pass = action.payload;
    },
    addToPrice: (state, action) => {
      state.price = [...state.price, action.payload];
    },
    removeFromPrice: (state, action) => {
      state.price = action.payload;
    },
    reset: () => initialState,
  },
});

export const { addToPass, removeFromPass, addToPrice, removeFromPrice, reset } =
  checkboxSlice.actions;

export default checkboxSlice.reducer;
