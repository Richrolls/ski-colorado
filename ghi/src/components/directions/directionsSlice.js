import { createApi, useQuery, fetchBaseQuery} from '@reduxjs/toolkit/query'
import dotenv from 'dotenv'

dotenv.config();

export const directionsSlice = createApi({
    retucerPath: 'directionsSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://maps.googleapis.com',
    }),
    endpoints: (builder) => ({
        getDirections: builder.query({
            query: ({ origin, destination }) => `/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
        })
    })
})

export const { useGetDirectionsQuery } = directionsSlice;
