import React from "react";
import { useParams } from "react-router-dom";
import { useGetResortQuery, useGetAccountQuery, useGetDistanceQuery } from "../login/auth.js";


export default function Directions() {

  const { thisResort } = useParams();
  const { data } = useGetResortQuery(thisResort);


  const { data: account } = useGetAccountQuery();

  const get_account_address = (account) => {
    if (account){
      let account_address = [
        account.address_1.split(" ").join("+"),
        account.city.split(" ").join("+"),
        account.state,
      ].join("+");
      return account_address;
    }
  }

  const get_resort_address = (data) => {
    if (data) {
    let resort_address = [
      data.address.split(" ").join("+"),
      data.city.split(" ").join("+"),
      data.state,
    ].join("+");
    return resort_address
    }
  }

  const origin = get_account_address(account)
  console.log(origin)
  const destination = get_resort_address(data)
  console.log(destination);

  const { data: distance } = useGetDistanceQuery({origin, destination})
  console.log(distance)


    return (
  <div>
    {distance && distance.routes.length > 0 && (
      <div>
        <h4><br/>Distance: {distance.routes[0].legs[0].distance.text}</h4>
        <h4>Travel Time: {distance.routes[0].legs[0].duration.text}</h4>
      </div>
    )}
  </div>
    )
}
