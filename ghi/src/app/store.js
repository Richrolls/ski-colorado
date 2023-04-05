import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/login/loginSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../components/login/auth";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
