import PropTypes from "prop-types";

const WeatherCard = ({
  cityTemperature,
  cityDescription,
  cityName,
  weatherImg,
  date,
}) => {
  return (
    <div className="pt-5">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
        <a href="#">
          <img className="w-20 center" src={weatherImg} alt="weatherImage" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cityName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Temperature: {cityTemperature}°C
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Description: {cityDescription}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Date: {date.split("-").reverse().join("-")}
          </p>
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  cityTemperature: PropTypes.number.isRequired,
  cityDescription: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  weatherImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default WeatherCard;
