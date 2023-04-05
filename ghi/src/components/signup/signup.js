import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signupApi = createApi({
  reducerPath: "signupApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts`,
    credentials: "include", // sends cookie to FastAPI
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body
      }),
    })
  }),
});

export const { useSignupMutation } = signupApi;
