import React from "react";
import { useParams } from "react-router-dom";
import { useGetProfileQuery, useGetAccountQuery } from "../login/auth.js";

export default function ProfileInfo() {
  const { accountId } = useParams();
  const { data: otherUser } = useGetProfileQuery(accountId);
  const { data: account } = useGetAccountQuery();

  let ski = "";
  let snowboard = "";
  if (otherUser?.ski === true) {
    ski = <img alt="skier" src="https://i.imgur.com/trwig2h.gif" />;
  }

  if (otherUser?.snowboard === true) {
    snowboard = <img alt="snowboarder" src="https://i.imgur.com/oW26dZg.gif" />;
  }

  function add2(add_2) {
    if (add_2 !== "") {
      return (
        <div>
          {add_2} <br />
        </div>
      );
    }
  }

  if (accountId === account?.id) {
    return (
      <div>
        <h3>
          {ski}
          {snowboard}
        </h3>

        <div className="shadow p-4 mt-4 bg-primary bg-gradient rounded">
          <h2 className="underlined">Info</h2>
          {account && (
            <div>
              <h3>
                {account.email}
                <br></br>
                <br></br>
                {account.address_1}
                <br></br>
                {add2(account.address_2)}
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
          {otherUser && (
            <div>
              <h3>
                {otherUser.city}, {otherUser.state}
              </h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
