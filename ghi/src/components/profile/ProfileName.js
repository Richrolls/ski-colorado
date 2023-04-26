import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery, useGetAccountQuery } from "../login/auth.js";

export default function ProfileInfo() {
  const { accountId } = useParams();
  const { data } = useGetProfileQuery(accountId);

  const { data: account } = useGetAccountQuery();

  // function getLastInitial(lastname) {
  //   return lastname.charAt(0) + ".";
  // }

  if (data?.id == account?.id) {
    return (
      <h1 className="snow">
        {account.first_name} {account.last_name}
      </h1>
    );
  } else {
    return (
      <h1 className="snow">
        {data?.username}
        {/* {getLastInitial(data?.last_name)} */}
      </h1>
    );
  }
}
