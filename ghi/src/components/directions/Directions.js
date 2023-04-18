
import { useGetDirectionsQuery } from "./directionsSlice"




export default function Directions() {
    const { data, error, isLoading } = useGetDirectionsQuery()
    console.log(data)

    // if (isLoading) {
    //     return <div>Loading...</div>
    // }
    // if (error) {
    //     return <div>Error: {error.message}</div>
    // }
    return (
        <div>
            <h1>Directions</h1>
            <ul>
                {data}
            </ul>
        </div>
    )
}
