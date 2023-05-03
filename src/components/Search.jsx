import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import WeatherCard from "./Weather/WeatherCard";
import WeatherCardTile from "./Weather/WeatherCardTile";

function Search({ lat, lon }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        lat: lat,
        lon: lon,
        key: import.meta.env.VITE_API_KEY,
        day: 7,
      };

      try {
        const response = await axios.get(
          "http://api.weatherbit.io/v2.0/forecast/daily",
          { params }
        );
        setWeatherData(response.data);
      } catch (err) {
        console.log(err); // Error handle for API response
      }
      setLoading(false);
    };

    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon]);

  const getIconUrl = (iconCode) => {
    return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
  };

  return (
    <div>
      {loading ? (
        <div></div>
      ) : weatherData ? (
        <>
          <WeatherCard
            cityTemperature={weatherData.data[0].temp}
            cityDescription={weatherData.data[0].weather.description}
            cityName={weatherData.city_name}
            date={weatherData.data[0].datetime}
            weatherImg={getIconUrl(weatherData.data[0].weather.icon)}
          />
          <div className="flex justify-between">
            {weatherData.data.slice(1, 3).map((weather, index) => (
              <WeatherCardTile
                key={index}
                cityTemperature={weather.temp}
                cityDescription={weather.weather.description}
                cityName={weather.city_name}
                date={weather.datetime}
                weatherImg={getIconUrl(weather.weather.icon)}
              />
            ))}
          </div>
          <div className="flex justify-between">
            {weatherData.data.slice(3, 5).map((weather, index) => (
              <WeatherCardTile
                key={index}
                cityTemperature={weather.temp}
                cityDescription={weather.weather.description}
                cityName={weather.city_name}
                date={weather.datetime}
                weatherImg={getIconUrl(weather.weather.icon)}
              />
            ))}
          </div>
        </>
      ) : (
        <div>Unable to fetch weather data.</div>
      )}
    </div>
  );
}

Search.propTypes = {
  lat: PropTypes.number,
  lon: PropTypes.number,
};

Search.defaultProps = {
  lat: 0,
  lon: 0,
};

export default Search;
