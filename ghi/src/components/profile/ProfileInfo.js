import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery, useGetAccountQuery } from "../login/auth.js";

export default function ProfileInfo() {
  const { accountId } = useParams();
  const { data } = useGetProfileQuery(accountId);

  const { data: account } = useGetAccountQuery();
  let ski = "";
  let snowboard = "";
  if (data?.ski == true) {
    ski = <img src="https://i.imgur.com/trwig2h.gif" className="" />;
  }
  // else {
  //   ski = "Not a Skier";
  // }
  if (data?.snowboard == true) {
    snowboard = <img src="https://i.imgur.com/oW26dZg.gif" className="" />;
  }
  // else {
  //   snowboard = "Not a Snowboarder";
  // }

  function add2(add_2) {
    if (add_2 != "") {
      return (
        <div>
          {add_2} <br />
        </div>
      );
    }
  }

  if (data?.id == account?.id) {
    return (
      <div>
        <div>
          {ski}
          {snowboard}
        </div>
        <br></br>
        <h2 className="underlined">Info</h2>
        {account && data && (
          <div>
            <h3>
              {data.email}
              <br></br>
              <br></br>
              {data.address_1}
              <br></br>
              {add2(data.address_2)}
              {data.city} {data.state}, {data.zipcode}
            </h3>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          {ski}
          {snowboard}
        </div>
        <br></br>
        <h2 className="underlined">Info</h2>
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
