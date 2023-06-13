import PropTypes from "prop-types";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../Services/weatherService";

const TempAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-2 text-xl text-cyan-300 sm:justify-center">
        <p>{details}</p>
      </div>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:items-center sm:justify-between text-white py-0 md:py-3">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-4xl">{`${temp.toFixed()}`}°</p>
        <div className="flex flex-col space-y-2 py-5 md:py-0">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">
              {`${feels_like.toFixed()}`}°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {`${speed.toFixed()}`}km/ph
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-2 sm:space-y-0 text-white text-sm py-3">
        <div className="flex items-center justify-center sm:justify-start space-x-2">
          <UilSun />
          <p className="font-light">
            Rise:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <UilSunset />
          <p className="font-light">
            Set:
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <UilSun />
          <p className="font-light">
            High:{" "}
            <span className="font-medium ml-1">{`${temp_max.toFixed()}`}°</span>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <UilSun />
          <p className="font-light">
            Low:{" "}
            <span className="font-medium ml-1">{`${temp_min.toFixed()}`}°</span>
          </p>
        </div>
      </div>
    </div>
  );
};

TempAndDetails.propTypes = {
  weather: PropTypes.object,
  details: PropTypes.string,
  icon: PropTypes.string,
  temp: PropTypes.number,
  temp_min: PropTypes.number,
  temp_max: PropTypes.number,
  sunrise: PropTypes.number,
  sunset: PropTypes.number,
  speed: PropTypes.number,
  humidity: PropTypes.number,
  feels_like: PropTypes.number,
  timezone: PropTypes.number,
};

export default TempAndDetails;
