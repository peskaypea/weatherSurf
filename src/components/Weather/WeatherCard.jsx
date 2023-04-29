const WeatherCard = ({
  cityTemperature,
  cityDescription,
  cityName,
  weatherImg,
}) => {
  const getIconUrl = (iconCode) => {
    return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
  };
  return (
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {cityTemperature}</p>
      <p>Weather Description: {cityDescription}</p>
      <p>City: {cityName}</p>
      <img src={weatherImg} alt="" />
    </div>
  );
};

export default WeatherCard;
