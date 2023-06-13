import PropTypes from "prop-types";
import { formatToLocalTime } from "../Services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="text-center my-6">
      <p className="font-poppins text-white text-xl font-extralight mb-3 sm:text-2xl">
        {formatToLocalTime(dt, timezone)}
      </p>
      <p className="font-poppins text-white text-2xl font-medium  sm:text-3xl">{`${name}, ${country}`}</p>
    </div>
  );
};

TimeAndLocation.propTypes = {
  weather: PropTypes.object,
  dt: PropTypes.number,
  timezone: PropTypes.number,
  name: PropTypes.string,
  country: PropTypes.string,
};

export default TimeAndLocation;
