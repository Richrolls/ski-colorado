import { configureStore } from "@reduxjs/toolkit";
import newSignupReducer from "../features/account/newAccountSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { thingsApi } from "../services/things";
import { authApi } from "../services/auth";

export const store = configureStore({
  reducer: {
    newThing: newThingReducer,
    login: loginReducer,
    [thingsApi.reducerPath]: thingsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([thingsApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);
