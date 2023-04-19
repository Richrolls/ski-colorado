import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetProfileQuery,
  useGetAccountQuery,
} from "../login/auth.js";

export default function ProfileInfo() {
  const { accountId } = useParams();
  const { data } = useGetProfileQuery(accountId);

  const { data: account } = useGetAccountQuery();

  if (data?.id == account?.id) {
    return (
      <div>
        <h3>Info</h3>
        {account && data && (
          <div>
            <h3>
              {data.address_1}
              <br />
              {data.city} {data.state}, {data.zipcode}
            </h3>
          </div>
        )}
      </div>
    );
  }

  else {
    return (
      <div>
        <h3>Info</h3>
        {account && data && (
          <div>
            <h3>
              {data.city}, {data.state}
            </h3>
          </div>
        )}
      </div>
    );
  }


}
