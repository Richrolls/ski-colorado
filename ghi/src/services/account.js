import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}/api/accounts`,
    credentials: "include", // sends cookie to FastAPI
  }),
  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body
      }),
    })
  }),
});

export const { useCreateAccountMutation } = accountApi;
