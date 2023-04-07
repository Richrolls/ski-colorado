import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
    reducerPath: 'comments',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST
    }),
    tagTypes: ['CommentsList'],
    endpoints: builder => ({
        getComments: builder.query({
            query: () => 'api/resorts',
            providesTags: ['CommentsList'],
        });
    })
})

export const { useGetCommentsQuery } = commentsApi
