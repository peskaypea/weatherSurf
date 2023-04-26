import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        lat: "35.5",
        lon: "-78.5",
        key: "ecd6952a36304cad817eb19b87da7bfa",
      };

      try {
        const response = await axios.get(
          "http://api.weatherbit.io/v2.0/current",
          { params }
        );
        setWeatherData(response.data);
      } catch (err) {
        console.log(err); // Error handle for API response
      }
    };

    fetchData();
  }, []);

  const getIconUrl = (iconCode) => {
    return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
  };

  return (
    <div>
      {weatherData ? (
        <>
          <h1>Current Weather</h1>
          <p>Temperature: {weatherData.data[0].temp}</p>
          <p>Weather Description: {weatherData.data[0].weather.description}</p>
          <p>City: {weatherData.data[0].city_name}</p>
          <img src={getIconUrl(weatherData.data[0].weather.icon)} alt="" />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Search;
