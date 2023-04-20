import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include", // sends cookie to FastAPI
  }),
  tagTypes: ["Account", "Resorts", "Resort", "CommentsList", "Favorite", "FavoriteList"],
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => "/token",
      transformResponse: (response) => response?.account,
      providesTags: ["Account"],
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "/api/accounts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Account"],
    }),
    login: builder.mutation({
      query: (body) => {
        const formData = new FormData();
        formData.append("username", body.username);
        formData.append("password", body.password);
        return {
          url: "/token",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Account"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/token",
        method: "DELETE",
      }),
      invalidatesTags: ["Account"],
    }),
    getAccountToken: builder.query({
      query: () => "/token",
      providesTags: ["Token"],
    }),
    getResorts: builder.query({
      transformResponse: (response) => response.resorts,
      query: () => "/api/resorts",
      providesTags: (result) => {
        const tags = [{ type: "Resorts", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Resorts", id })), ...tags];
      },
    }),
    getResort: builder.query({
      query: (thisResort) => `/api/resorts/${thisResort}`,
      providesTags: (result) => {
        const tags = [{ type: "Resort" }];
        if (!result) return tags;
        return [result, ...tags];
      },
    }),
    getComments: builder.query({
      query: ({ thisResort }) => `/api/resorts/${thisResort}/comments`,
      providesTags: ["CommentsList"],
    }),
    getDistance: builder.query({
      query: ({ origin, destination }) =>
        `/api/directions?origin=${origin}&destination=${destination}`,
    }),
    getProfile: builder.query({
      query: (accountId) => `/api/accounts/${accountId}`,
    }),
    favorite: builder.mutation({
      query: (info) => {
        return {
          url: `/api/resorts/${info.resort_id}/favorites`,
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["Favorite"],
    }),
    deleteFavorite: builder.mutation({
      query: ( thisResort, thisFavorite) => ({
        url: `/api/resorts/${thisResort}/favorites${thisFavorite}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite"],
    }),
    getFavorites: builder.query({
      query: ({ thisResort }) => `/api/resorts/${thisResort}/favorites`,
      providesTags: ["FavoriteList"],
    }),
  }),
});

export const {
  useGetAccountQuery,
  useLogoutMutation,
  useLoginMutation,
  useSignupMutation,
  useGetResortsQuery,
  useGetResortQuery,
  useGetCommentsQuery,
  useGetDistanceQuery,
  useGetProfileQuery,
  useGetAccountTokenQuery,
  useFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery
} = authApi;
