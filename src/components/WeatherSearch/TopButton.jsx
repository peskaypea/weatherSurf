const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "Lisbon",
    },
    {
      id: 2,
      title: "Gold Coast",
    },
    {
      id: 3,
      title: "Sydney",
    },
    {
      id: 4,
      title: "Bali",
    },
    {
      id: 5,
      title: "Hawaii",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-sm lg:text-lg font-medium mx-2 my-2 p-2  rounded-lg transition ease-out hover:scale-110"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
