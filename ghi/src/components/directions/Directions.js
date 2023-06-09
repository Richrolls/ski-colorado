import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetResortQuery,
  useGetAccountQuery,
  useGetDistanceQuery,
} from "../login/auth.js";

export default function Directions() {
  const { thisResort } = useParams();
  const { data } = useGetResortQuery(thisResort);

  const { data: account } = useGetAccountQuery();

  const get_account_address = (account) => {
    if (account) {
      let account_address = [
        account.address_1.split(" ").join("+"),
        account.city.split(" ").join("+"),
        account.state,
      ].join("+");
      return account_address;
    }
  };

  const get_resort_address = (data) => {
    if (data) {
      let resort_address = [
        data.address.split(" ").join("+"),
        data.city.split(" ").join("+"),
        data.state,
      ].join("+");
      return resort_address;
    }
  };

  const origin = get_account_address(account);
  const destination = get_resort_address(data);
  const { data: distance } = useGetDistanceQuery({ origin, destination });

  function add2(add_2) {
    if (add_2 !== "") {
      return (
        <div>
          {add_2} <br />
        </div>
      );
    }
  }

  return (
    <div>
      {distance && distance.routes.length > 0 && (
        <div>
          <br></br>
          <h3>
            {account.address_1} <br></br> {add2(account.address_2)}{" "}
            {account.city}, {account.state} <br></br>to {data.name}
          </h3>
          <h4>
            <br />
            Distance: {distance.routes[0].legs[0].distance.text}
          </h4>
          <h4>
            Current Travel Time: {distance.routes[0].legs[0].duration.text}
          </h4>
        </div>
      )}
    </div>
  );
}
