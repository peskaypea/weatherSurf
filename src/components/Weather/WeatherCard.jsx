const WeatherCard = ({ weatherData }) => {
  const getIconUrl = (iconCode) => {
    return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
  };
  return (
    <div>
      {" "}
      <h1>Current Weather</h1>
      <p>Temperature: {weatherData.data[0].temp}</p>
      <p>Weather Description: {weatherData.data[0].weather.description}</p>
      <p>City: {weatherData.data[0].city_name}</p>
      <img src={getIconUrl(weatherData.data[0].weather.icon)} alt="" />
    </div>
  );
};

export default WeatherCard;
