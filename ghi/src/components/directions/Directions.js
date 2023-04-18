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
//   function get_directions = async (get_account_address, get_resort_address) =>  {
//     let
//   }

    return (
        <div>
            <h1>Directions</h1>
            <ul>
              {/* {distance.routes.legs[0].distance.text} */}
            </ul>
        </div>
    )
}
