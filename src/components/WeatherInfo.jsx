import React, { useState } from "react";
import getWeatherData from "../api";

const WeatherInfo = () => {
  const [weatherData, setWeatherData] = useState(() =>
    getWeatherData("Manchester,UK").then((data) => {
      console.log(data);
      return data;
    })
  );

  return <div></div>;
};

export default WeatherInfo;
