// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentsApi = createApi({
    reducerPath: 'comments',
    baseQuery: processResult.env.REACT_APP_SAMPLE_SERVICE_API_HOST,
    endpoints: builder => ({
        getComments: builder.query({
            query: () => '/api/resorts'
        })
    })
});

export const { useGetCommentsQuery } = commentsApi
