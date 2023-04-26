import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetResortQuery, useGetWeatherQuery } from "../login/auth";

const DailyForecast = () => {
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
  const { data: DailyForecast, isLoading: isWeatherLoading } =
    useGetWeatherQuery({
      thisResort,
      coordinates,
    });

  return (
    <div>
      {DailyForecast && (
        <div>
          <div
            className="shadow p-4 mt-4 bg-primary bg-gradient"
            style={{ borderRadius: 8 }}
          >
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                High: {DailyForecast.forecast.forecastday[0].day.maxtemp_f}° F
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Low: {DailyForecast.forecast.forecastday[0].day.mintemp_f}° F
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Chance of Snow:{" "}
                {DailyForecast.forecast.forecastday[0].day.daily_chance_of_snow}
                %
              </h4>
            </div>
            <br />
            <div className="mx-auto w-75 bg-secondary bg-opacity-50 bg-gradient white-border">
              <h4 className="m-0">
                Precipitation:{" "}
                {DailyForecast.forecast.forecastday[0].day.totalprecip_in} in
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyForecast;
