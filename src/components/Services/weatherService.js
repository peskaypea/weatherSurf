import { DateTime } from "luxon";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};
const formatForcastWeather = (data) => {
  let { city, list } = data;
  const timezone = data.city.timezone;

  // Extract daily forecast data
  const daily = list
    .filter((d, index) => index % 8 === 0) // Get data every 24 hours (index divisible by 8)
    .slice(0, 5) // Take the next 5 days
    .map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    });

  // Extract hourly forecast data
  const hourly = list
    .slice(0, 5 * 8) // Take the next 5 days of hourly data (8 data points per day)
    .map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForcastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => {
//   const dt = DateTime.fromSeconds(secs).toUTC(); // Convert Unix timestamp to UTC DateTime
//   const dtLocal = dt.setZone(zone, { keepLocalTime: true }); // Set the time zone while preserving local time
//   return dtLocal.toFormat(format); // Format the DateTime in the local time zone
// };

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (iconCode) =>
  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
