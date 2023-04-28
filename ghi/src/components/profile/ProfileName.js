import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery, useGetAccountQuery } from "../login/auth.js";

export default function ProfileInfo() {
  const { accountId } = useParams();
  const { data } = useGetProfileQuery(accountId);

  const { data: account } = useGetAccountQuery();

  if (accountId == account?.id) {
    return (
      <>
        <h1 className="snow" style={{ paddingTop: 24 }}>
          {account.first_name} {account.last_name}
        </h1>
        <h3>@{account.username}</h3>
      </>
    );
  } else {
    return <h1 className="snow">@{data?.username}</h1>;
  }
}
