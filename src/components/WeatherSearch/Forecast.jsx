import PropTypes from "prop-types";
import { iconUrlFromCode } from "../Services/weatherService";

const Forecast = ({ title, weather }) => {
  const { daily } = weather; // Destructure the daily array from the weather object

  return (
    <div>
      <div className="flex item-center justify-start my-6">
        {console.log(daily[0].title)}
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="mt-2" />
      <div className="flex flex-row items-center justify-between text-white mt-3">
        {daily.map((info) => (
          <div
            className="flex flex-col items-center justify-center"
            key={info.title}
          >
            <p className="font-light text-sm">{info.title}</p>
            <img
              src={iconUrlFromCode(info.icon)}
              alt=""
              className="w-12 my-1"
            />
            <p className="font-medium">{info.temp}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Forecast.propTypes = {
  title: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    daily: PropTypes.array.isRequired,
  }).isRequired,
};

export default Forecast;
