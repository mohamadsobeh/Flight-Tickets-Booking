import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('src/assets/images/pexels-4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Book Your Dream Flight
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find the best deals and enjoy a seamless booking experience.
        </p>
        <button className="bg-accent px-6 py-3 rounded-lg hover:bg-secondary transition duration-300">
          Search Flights
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
