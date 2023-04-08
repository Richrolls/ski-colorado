import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
    reducerPath: 'comments',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_SAMPLE_SERVICE_API_HOST
    }),
    tagTypes: ['CommentsList'],
    endpoints: builder => ({
        getCommentsByResortId: builder.query({
            query: ({ resort_id }) => `/api/resorts/${resort_id}/comments`,
            providesTags: ['CommentsList'],
        })
    })
})

export const { useGetCommentsByResortIdQuery } = commentsApi
