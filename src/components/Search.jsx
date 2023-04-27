import { useState, useEffect } from "react";
import axios from "axios";
import Geocode from "react-geocode";
import SearchForm from "./SearchForm";

function Search() {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        lat: "35.5",
        lon: "-78.5",
        key: "ecd6952a36304cad817eb19b87da7bfa",
      };

      try {
        const response = await axios.get(
          "http://api.weatherbit.io/v2.0/current"
        );
        setWeatherData(response.data);
      } catch (err) {
        console.log(err); // Error handle for API response
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyBIyET3ksgL5bSzBl8YhzW-3kpdbW_7VmQ`
      );
      const result = response.data.result[0];
      const { lat, lng } = result.geometry.location;
      setLat(lat);
      setLon(lng);
    } catch (error) {
      console.log(error);
    }
  };

  const getIconUrl = (iconCode) => {
    return `https://www.weatherbit.io/static/img/icons/${iconCode}.png`;
  };

  return (
    <div>
      <div>
        {weatherData ? (
          <>
            <h1>Current Weather</h1>
            <p>Temperature: {weatherData.data[0].temp}</p>
            <p>
              Weather Description: {weatherData.data[0].weather.description}
            </p>
            <p>City: {weatherData.data[0].city_name}</p>
            <img src={getIconUrl(weatherData.data[0].weather.icon)} alt="" />
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        <h1>Search for a city</h1>
        <SearchForm onSearch={handleSearch} />
        {location && (
          <p>
            The latitude is {lat} and the longitude is {lon}.
          </p>
        )}
      </div>
    </div>
  );
}

Geocode.setApiKey("AIzaSyBIyET3ksgL5bSzBl8YhzW-3kpdbW_7VmQ");

export default Search;
