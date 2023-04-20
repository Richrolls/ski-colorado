import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../components/signup/signupSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../components/login/auth";
import loginReducer from "../components/login/loginSlice";
import commentsReducer from "../components/comments/CreateCommentRedux/userCreateCommentSlice"

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    [authApi.reducerPath]: authApi.reducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
