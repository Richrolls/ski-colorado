import { createSlice } from "@reduxjs/toolkit";
import loginSlice from "../login/loginSlice";

const initialState = {
  fields: {
    ikon: true,
    epic: true,
    $: true,
    $$: true,
    $$$: true,
    $$$$: true,
    $$$$$: true,
  },
};

const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    handleIkonChange: (state, action) => {
      state.fields.ikon = action.payload;
    },
    handleEpicChange: (state, action) => {
      state.fields.ikon = action.payload;
    },
    handle$Change: (state, action) => {
      state.fields.$ = action.payload;
    },
    handle$$Change: (state, action) => {
      state.fields.$$ = action.payload;
    },
    handle$$$Change: (state, action) => {
      state.fields.$$$ = action.payload;
    },
    handle$$$$Change: (state, action) => {
      state.fields.$$$$ = action.payload;
    },
    handle$$$$$Change: (state, action) => {
      state.fields.$$$$$ = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  handleIkonChange,
  handleEpicChange,
  handle$Change,
  handle$$Change,
  handle$$$Change,
  handle$$$$Change,
  handle$$$$$Change,
  reset,
} = checkboxSlice.actions;

export default checkboxSlice.reducer;
