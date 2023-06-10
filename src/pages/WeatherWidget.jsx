import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import TopButton from "../components/WeatherSearch/TopButton";
import Inputs from "../components/WeatherSearch/Inputs";
import TimeAndLocation from "../components/WeatherSearch/TimeAndLocation";
import TempAndDetails from "../components/WeatherSearch/TempAndDetails";
import Forecast from "../components/WeatherSearch/Forecast";
import getFormattedWeatherData from "../components/Services/weatherService";

const WeatherWidget = () => {
  const [query, setQuery] = useState({ q: "lisbon" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ q: "Lisbon" });
      console.log(data);
    };
    fetchWeather();
  }, [query, units]);

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 dark:shadow-gray-600">
        <div className="hidden sm:block">
          <TopButton />
        </div>

        <Inputs />
        <TimeAndLocation />
        <TempAndDetails />
        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />
      </div>
    </>
  );
};

export default WeatherWidget;
