import React from "react";
import { useParams } from "react-router-dom";
import { useGetResortQuery, useGetAccountQuery } from "../login/auth.js";


export default function Directions() {

  const { thisResort } = useParams();
  const { data } = useGetResortQuery(thisResort);
  console.log(data)


  const { data: account } = useGetAccountQuery();
  console.log(account)

  if (account) {

    const get_account_address = async (account) => {
        await (account)
        let account_address = [account.address_1.split(" ").join("+"), account.city, account.state].join("+")
        return account_address
    }
    console.log(get_account_address(account))
  }

  if (data) {
        const get_resort_address = async (data) => {
        await (data)
        let resort_address = [data.address.split(" ").join("+"), data.city, data.state].join("+")
        return resort_address
    }
    console.log(get_resort_address(data))
  }

//   function get_directions = async (get_account_address, get_resort_address) =>  {
//     let
//   }










    return (
        <div>
            <h1>Directions</h1>
            <ul>

            </ul>
        </div>
    )
}
