import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fields: {
	rating: 5,
	comment: "",
	user_id: "",
	resort_id: "",
    },
    errorMessage: null
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    handleRatingChange: (state, action) => {
      state.fields.rating = action.payload;
    },
    handleCommentChange: (state, action) => {
      state.fields.comment = action.payload;
    },
    handleUserIDChange: (state, action) => {
      state.fields.user_id = action.payload;
    },
    handleResortIDChange: (state, action) => {
      state.fields.resort_id = action.payload;
    },
    error: (state, action) => {
      state.errorMessage = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  handleRatingChange,
  handleCommentChange,
  handleUserIDChange,
  handleResortIDChange,
  reset,
  error
} = commentSlice.actions;

export default commentSlice.reducer;
