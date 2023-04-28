import axios from "axios";
import { useState } from "react";
import Search from "./Search";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const fetchGeo = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=AIzaSyBIyET3ksgL5bSzBl8YhzW-3kpdbW_7VmQ`
      );
      let result = response.data.results[0].geometry.location;
      setLat(result.lat);
      setLon(result.lng);
      console.log(result.lat);
      console.log(result.lng);
    } catch (err) {
      console.log(err); // Error handle for API response
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGeo();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city name"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <Search lat={lat} lon={lon} />
    </div>
  );
};

export default SearchForm;
