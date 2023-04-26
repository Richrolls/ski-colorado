import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SAMPLE_SERVICE_API_HOST}`,
    credentials: "include", // sends cookie to FastAPI
  }),
  tagTypes: [
    "Account",
    "Resorts",
    "Resort",
    "CommentsList",
    "FavoriteList",
    "Accounts",
  ],
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
    getResortComments: builder.query({
      query: (resort_id) => `/api/resorts/${resort_id}/comments`,
      providesTags: ["ResortCommentsList"],
    }),
    getUserComments: builder.query({
    query: ( user_id ) => `/api/accounts/${user_id}/comments`,
    providesTags: ["UserCommentsList"],
    }),
    getDistance: builder.query({
      query: ({ origin, destination }) =>
        `/api/directions?origin=${origin}&destination=${destination}`,
    }),
    getWeather: builder.query({
      query: ({ thisResort, coordinates }) =>
        `/api/resort/${thisResort}/weather/?coordinates=${coordinates}`,
    }),
    getProfile: builder.query({
      query: (accountId) => `/api/accounts/${accountId}`,
    }),
    getProfiles: builder.query({
      query: () => `/api/accounts`,
      providesTags: ["Accounts"],
    }),
    favorite: builder.mutation({
      query: (info) => {
        return {
          url: `/api/resorts/${info.resort_id}/favorites`,
          method: "POST",
          body: info,
        };
      },
      invalidatesTags: ["FavoriteList"],
    }),
    deleteFavorite: builder.mutation({
      query: ({ thisResort, thisFavorite }) => ({
        url: `/api/resorts/${thisResort}/favorites/${thisFavorite}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FavoriteList"],
    }),
    getResortFavorites: builder.query({
      query: (resort_id) => `/api/resorts/${resort_id}/favorites`,
      providesTags: ["FavoriteList"],
    }),
    getUserFavorites: builder.query({
      query: (user_id) => `/api/accounts/${user_id}/favorites`,
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
  useGetResortCommentsQuery,
  useGetUserCommentsQuery,
  useGetDistanceQuery,
  useGetProfileQuery,
  useGetAccountTokenQuery,
  useFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetResortFavoritesQuery,
  useGetUserFavoritesQuery,
  useGetProfilesQuery,
  useGetWeatherQuery,
} = authApi;
