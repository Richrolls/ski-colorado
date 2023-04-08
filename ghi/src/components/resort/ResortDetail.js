import React from "react";
import { useGetResortQuery } from "../login/auth.js";
import NavLoggedIn from "../header/NavLoggedIn.js"

const ResortDetail = () => {
    const { data } = useGetResortQuery();
    return (
        <>
        <NavLoggedIn />
        <div className="row bg-primary">
            <div className="col-4 bg-info min-vh-100">
                <div>
                    <h1 className="text-center">{data?.name}</h1>
                        {/* Change this to resort name later */}
                    <div className="text-center">
                        RATINGS
                    </div>
                </div>
                <div className="rounded bg-white m-3">
                    <h2 className="text-center">Resort Info</h2>
                    <p className="text-center">{data?.elevation} m</p>
                    <p className="text-center">{data?.address} {data?.city}, {data?.state} {data?.zipcode}</p>
                    <p className="text-center">{data?.price}</p>
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
