import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../features/auth/signupSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { signupApi } from "../services/signup";
import { authApi } from "../features/auth/auth";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    [signupApi.reducerPath]: signupApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([signupApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);
