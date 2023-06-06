import React from "react";

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
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButton;
