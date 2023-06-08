import { useState, useEffect } from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

const TempAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300 sm:justify-center">
        <p>Cloudy or whatever</p>
      </div>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center sm:justify-between text-white py-0 md:py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-4xl">34°</p>
        <div className="flex flex-col space-y-2 py-5 md:py-0">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/ph</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-2 sm:space-y-0 text-white text-sm py-3">
        <div className="flex items-center justify-center sm:justify-start space-x-2">
          <UilSun />
          <p className="font-light">
            Rise: <span className="font-medium ml-1">06:45</span>
            <span className="hidden sm:inline"> AM</span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <UilSunset />
          <p className="font-light">
            Set: <span className="font-medium ml-1">07:35</span>
            <span className="hidden sm:inline"> PM</span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <UilSun />
          <p className="font-light">
            High: <span className="font-medium ml-1">45°</span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <UilSun />
          <p className="font-light">
            Low: <span className="font-medium ml-1">35°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TempAndDetails;
