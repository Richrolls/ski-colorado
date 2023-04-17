import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavLoggedIn from "../header/NavLoggedIn.js"
import { Link } from 'react-router-dom';
import { useGetCommentsByResortIdQuery } from "../login/auth.js";
import IndividualComment from "./IndividualComment.js";

function CommentList( {resort_id }) {
    const { data } = useGetCommentsByResortIdQuery({ resort_id });
    console.log(data)

  return (
    <>
    <table className="table table-striped shadow" style={{ borderRadius: 16 }}>
      <thead className="bg-primary bg-gradient">
        <tr>
          <th>
            <h1 className="snow">Resorts</h1>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.comments?.map(comment => <IndividualComment key={comment.rating} {...comment}/>)}
      </tbody>
    </table>
    </>
  );

}
export default CommentList;
