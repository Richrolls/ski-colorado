import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetResortQuery, useGetWeatherQuery } from "../login/auth";

const Weather = () => {
  const { thisResort } = useParams();
  const { data: resorts, isLoading: isResortLoading } = useGetResortQuery(thisResort);
  //const { data: weather, isLoading: isWeatherLoading } = useGetWeatherQuery(thisResort);


  const get_resort_address = (resorts) => {
    if (resorts) {
      let address = [
        resorts.city.split(" ").join("+"),
        resorts.state,
      ].join("+");
      return address;
    }
  };

  const resort_address = get_resort_address(resorts)
  console.log(resort_address)
  const { data: weather, isLoading: isWeatherLoading } = useGetWeatherQuery({thisResort, resort_address})
  console.log(weather)

  if (isWeatherLoading || isResortLoading || !weather || !weather.data) {
    return <progress className="progress is-primary" max="100"></progress>;
  }





return (
  <div>
    {weather && weather.data && weather.data.current && (
      <div>
        <br />
        <div className="shadow p-4 mt-4 bg-primary bg-gradient" style={{ borderRadius: 8 }}>
          <div className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border" style={{ paddingTop: 20 }}>
            <h3>Temp: {weather.data.current.temp_f}</h3>
          </div>
          <br />
          <div className="mx-auto w-50 bg-secondary bg-opacity-50 bg-gradient white-border" style={{ paddingTop: 20 }}>
            <h3>Precip: {weather.data.current.precip_in}</h3>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default Weather;
