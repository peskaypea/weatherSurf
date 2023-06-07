import NavBar from "../components/NavBar";
import TopButton from "../components/WeatherSearch/TopButton";
import Inputs from "../components/WeatherSearch/Inputs";
import TimeAndLocation from "../components/WeatherSearch/TimeAndLocation";
import TempAndDetails from "../components/WeatherSearch/TempAndDetails";

const WeatherWidget = () => {
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
      </div>
    </>
  );
};

export default WeatherWidget;
