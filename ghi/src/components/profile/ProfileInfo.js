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
  let ski = ""
  let snowboard = ""
  if (data?.ski == true){
    ski = "Is a Skier"
  } else {
    ski = "Not a Skier"
  }
  if (data?.snowboard == true) {
    snowboard = "Is a Snowboarder"
  } else {
    snowboard = "Not a Snowboarder"
  }

  if (data?.id == account?.id) {
    return (
      <div>
        <h2>Info</h2>
        {account && data && (
          <div>
            <h3>
              {data.address_1}
              <br />
              {data.city} {data.state}, {data.zipcode}
            </h3>
            <br />
            <h3>
              {ski}
              <br />
              {snowboard}
            </h3>
          </div>
        )}
      </div>
    );
  }

  else {
    return (
      <div>
        <h2>Info</h2>
        {account && data && (
          <div>
            <h3>{data.city}, {data.state}</h3>
            <br/>
            <h3>
                {ski}
                <br/>
                {snowboard}
            </h3>
          </div>
        )}
      </div>
    );
  }


}
