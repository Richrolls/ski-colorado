import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetResortQuery, useGetWeatherQuery } from "../login/auth";

const CurrentWeather = () => {
  const { thisResort } = useParams();
  const { data: resorts, isLoading: isResortLoading } =
    useGetResortQuery(thisResort);

  const get_coordinates = (resorts) => {
    if (resorts) {
      let coordinates = resorts.coordinates;
      return coordinates;
    }
  };

  const coordinates = get_coordinates(resorts);
  const { data: CurrentWeather, isLoading: isWeatherLoading } =
    useGetWeatherQuery({
      thisResort,
      coordinates,
    });

  // if (isWeatherLoading || isResortLoading || !weather || !weather.data) {
  // return <progress className="progress is-primary" max="100"></progress>;
  // }

  return (
    <div>
      {CurrentWeather && (
        <div>
          <div
            className="shadow p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8 }}
          >
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Temperature: {CurrentWeather.current.temp_f}° F
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Feels like: {CurrentWeather.current.feelslike_f}° F
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Precipitation: {CurrentWeather.current.precip_in} in/hr
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Wind: {CurrentWeather.current.wind_mph} mph
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">UV Index: {CurrentWeather.current.uv}</h4>
            </div>
          </div>
        </div>
      )}
      <br/>
    </div>
  );
};

export default CurrentWeather;
