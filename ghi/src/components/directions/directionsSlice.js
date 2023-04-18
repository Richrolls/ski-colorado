import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

    // let origin = '6721+Alan+Drive+Denver+CO'
    // let destination = '606+Brick+Yard+Lane+Saint+Simons+Island+GA'

export const directionsApi = createApi({
    reducerPath: 'directionsSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://maps.googleapis.com',
    }),
    endpoints: (builder) => ({
        getDirections: builder.query({
            query: ( origin, destination ) => `/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
        })
    })
})

export const { useGetDirectionsQuery } = directionsApi;
