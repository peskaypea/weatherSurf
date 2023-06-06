import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Search({ lat, lon, cityName }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        lat: lat,
        lon: lon,
        appid: import.meta.env.VITE_API_KEY,
      };

      try {
        const response = await axios.get(
          "http://api.openweathermap.org/data/2.5/forecast",
          { params }
        );
        setWeatherData(response.data.list);
      } catch (err) {
        console.log(err); // Error handle for API response
      }
      setLoading(false);
    };

    if (lat && lon) {
      fetchData();
    }
  }, [lat, lon]);

  // const getIconUrl = (iconCode) => {
  //   return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  // };

  return (
    <div>
      {loading ? (
        <div></div>
      ) : weatherData ? (
        <>
          {console.log(weatherData[0].main.temp)}
          <p>{cityName}</p>
          <p>{weatherData[0].main.temp}</p>
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
  cityName: PropTypes.string,
};

Search.defaultProps = {
  lat: 0,
  lon: 0,
  cityName: "",
};

export default Search;
