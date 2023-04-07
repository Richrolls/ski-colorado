import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavLoggedIn from "../header/NavLoggedIn.js"

const ResortDetail = () => {
    const [resort, setResort] = useState([]);
    const { thisResort } = useParams();

    const getResortData = async () => {
        const response = await fetch(`http://localhost:8000/api/resorts/{resort_id}?id=${thisResort}`);
        if (response.ok) {
            const data = await response.json();
            setResort(data)
        }
    }

    useEffect(() => {
        getResortData();
    }, [thisResort]);

    return (
        <>
        <NavLoggedIn />
        <div className="row bg-primary">
            <div className="col-4 bg-info min-vh-100">
                <div>
                    <h1 className="text-center">{resort.name}</h1>
                        {/* Change this to resort name later */}
                    <div className="text-center">
                        RATINGS
                    </div>
                </div>
                <div className="rounded bg-white m-3">
                    <h2 className="text-center">Resort Info</h2>
                    <p className="text-center">{resort.elevation} m</p>
                    <p className="text-center">{resort.address} {resort.city}, {resort.state} {resort.zipcode}</p>
                    <p className="text-center">{resort.price}</p>
                    <p className="text-center">Distance/Travel Time</p>
                </div>
            </div>
            <div className="col-auto">
                <p>Test</p>
            </div>
        </div>
        </>
    );

}
export default ResortDetail;
