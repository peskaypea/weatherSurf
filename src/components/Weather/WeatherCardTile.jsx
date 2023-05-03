import PropTypes from "prop-types";

const WeatherCardTile = ({
  cityTemperature,
  cityDescription,
  cityName,
  weatherImg,
  date,
}) => {
  const formatedDate = date.split("-").reverse().join("-");
  return (
    <div className="pt-5">
      <div className=" w-max bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg dark:bg-gray-800 dark:border-gray-700 rounded-lg flex">
        <div className="p-5 center">
          <p className="mb-3 font-normal  dark:text-gray-400">{formatedDate}</p>
          <p className="mb-3 font-normal  dark:text-gray-400">{cityName}</p>
          <p className="mb-3 font-normal  dark:text-gray-400">
            {cityDescription}
          </p>
          <p className="mb-3 font-normal  dark:text-gray-400">
            {`${cityTemperature}°C`}
          </p>
        </div>
        <a href="#">
          <img className="w-10 mr-3" src={weatherImg} alt="weatherImage" />
        </a>
      </div>
    </div>
  );
};

WeatherCardTile.propTypes = {
  cityTemperature: PropTypes.number.isRequired,
  cityDescription: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  weatherImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default WeatherCardTile;
