import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery, useGetAccountQuery } from "../login/auth.js";

export default function ProfileInfo() {
  const { accountId } = useParams();
  const { data } = useGetProfileQuery(accountId);
  console.log(data)

  const { data: account } = useGetAccountQuery();
  console.log(account)
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

  // function add2(add_2) {
  //   if (add_2 != "") {
  //     return (
  //       <div>
  //         {add_2} <br />
  //       </div>
  //     );
  //   }
  // }

  if (data?.id == account?.id) {
    return (
      <div>
        <h3>
          {ski}
          {snowboard}
        </h3>

        <div className="shadow p-4 mt-4 bg-primary bg-gradient rounded">
          <h2 className="underlined">Info</h2>
          {account && data && (
            <div>
              <h3>
                {/* {account.email}
                <br></br>
                <br></br>
                {account.address_1}
                <br></br>
                {add2(account.address_2)} */}
                {account.city} {account.state}, {account.zipcode}
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          {ski}
          {snowboard}
        </h3>
        <div className="shadow p-4 mt-4 bg-primary bg-gradient rounded">
          <h2 className="underlined">Info</h2>
          {account && data && (
            <div>
              <h3>
                {data.city}, {data.state}
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
