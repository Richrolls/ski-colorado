import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../components/signup/signupSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../components/login/auth";
import loginReducer from "../components/login/loginSlice";
import { commentsApi } from ".//commentsApi";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([signupApi.middleware, authApi.middleware, commentsApi.middleware]),
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
