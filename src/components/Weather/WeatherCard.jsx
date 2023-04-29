import PropTypes from "prop-types";

const WeatherCard = ({
  cityTemperature,
  cityDescription,
  cityName,
  weatherImg,
}) => {
  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {cityTemperature}</p>
      <p>Weather Description: {cityDescription}</p>
      <p>City: {cityName}</p>
      <img src={weatherImg} alt="weatherImage" />
    </div>
  );
};

WeatherCard.propTypes = {
  cityTemperature: PropTypes.number.isRequired,
  cityDescription: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  weatherImg: PropTypes.string.isRequired,
};

export default WeatherCard;
