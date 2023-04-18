import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "../components/signup/signupSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../components/login/auth";
import loginReducer from "../components/login/loginSlice";
import { directionsSlice } from "../components/directions/directionsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    [authApi.reducerPath]: authApi.reducer,
    [directionsSlice.reducerPath]: directionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware], [directionsSlice.middleware]),
});

setupListeners(store.dispatch);
