import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-6">
      <div className="flex flex-col md:flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="font-poppins text-xs md:text-xl font-light p-2 w-full md:w-auto shadow-xl focus:outline-none capitalize placeholder:lowercase md:max-w-md placeholder:sm:text-sm placeholder:md:text-xl rounded-lg"
        />
        <div className="flex flex-row md:flex-row justify-center md:justify-start items-center">
          <div className="flex justify-center md:justify-start">
            <UilSearch
              size={25}
              className="font-poppins text-white cursor-pointer transition ease-out hover:scale-125 mt-3 mr-2"
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <UilLocationPoint
              size={25}
              className="text-white cursor-pointer transition ease-out hover:scale-125 mt-3 ml-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full md:w-1/4 items-center justify-center mt-4 md:mt-0">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-110 md:mt-4"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1 md:mt-4">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-110 md:mt-4"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
