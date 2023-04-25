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

    if (isWeatherLoading || isResortLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
    }





  return (
    <div>
      {weather && weather.data && weather.data.current && (
        <div>
          <br></br>
          <h4>
            <br />
            Temp: {weather.data.current.temp_f}
          </h4>
          <h4>Precip: {weather.data.current.precip_in}</h4>
        </div>
      )}
    </div>
  );
};

export default Weather;
