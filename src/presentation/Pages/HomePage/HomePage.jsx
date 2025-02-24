import React from "react";
import Services from "../../components/Services/Services.jsx";
import SearchForm from "../../components/SearchForm/SearchForm";
import FlightList from "../../components/FlightList/FlightList";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className=" container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="bg-lightGray p-6 rounded-lg shadow-lg mt-10 flex flex-col md:flex-row items-center">
          <SearchForm />
        </div>
        <Services />
        <div className="mt-8 ">
          <FlightList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
