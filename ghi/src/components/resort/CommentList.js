import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavLoggedIn from "../header/NavLoggedIn.js"
import { Link } from 'react-router-dom';
import { useGetCommentsQuery } from "../../app/commentsApi.js";

function CommentList() => {
    const { data, error, isLoading } = useGetCommentsQuery();

    if (isLoading) {
        return (
            <progress className="progress is-primary" max="100"></progress>
        )
    }

    return (
        <>
        <div className="row bg-primary">
            <table className="table is-striped">
            <thead>
            </thead>
            <tbody>
                {data.resorts.map(resort => {
                    <tr key={resort.id}>
                        <td>{resort.name}</td>
                    </tr>
                })}
            </tbody>
            </table>
        </div>
        </>
    );

}
export default CommentList;
