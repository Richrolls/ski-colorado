import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../components/signup/signupSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { signupApi } from "../components/signup/signup";
import { authApi } from "../components/login/auth";
import loginReducer from "../components/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    [signupApi.reducerPath]: signupApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([signupApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);
