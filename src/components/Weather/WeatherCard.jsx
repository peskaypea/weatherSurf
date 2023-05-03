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
      <div className="max-w-m bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-lg flex">
        <a href="#">
          <img className="w-20 ml-10" src={weatherImg} alt="weatherImage" />
        </a>
        <div className="p-5 center">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
              {cityName}
            </h5>
          </a>
          <p className="mb-3 font-normal  dark:text-gray-400">
            {cityTemperature}°C
          </p>
          <p className="mb-3 font-normal  dark:text-gray-400">
            {cityDescription}
          </p>
          <p className="mb-3 font-normal  dark:text-gray-400">
            {date.split("-").reverse().join("-")}
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
