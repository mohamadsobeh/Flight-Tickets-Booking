import React, { useEffect } from "react";
import img1 from "../../../assets/images/traveller-1.jpg";
import img2 from "../../../assets/images/traveller-2.jpg";
import img3 from "../../../assets/images/traveller-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const FlightList = () => {
  const flights = [
    {
      id: 1,
      image: img1,
      from: "New York",
      to: "London",
      date: "2024-05-15",
      departure: "12:00 PM",
      arrival: "03:00 PM",
      price: "$150",
    },
    {
      id: 2,
      image: img2,
      from: "Dubai",
      to: "France",
      date: "2024-06-01",
      departure: "02:00 PM",
      arrival: "05:00 PM",
      price: "$250",
    },
    {
      id: 3,
      image: img3,
      from: "Paris",
      to: "Istanbul",
      date: "2024-07-10",
      departure: "04:00 PM",
      arrival: "07:00 PM",
      price: "$200",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2
        className="text-3xl font-bold text-darkGray mb-8 text-center"
        data-aos="fade-up"
      >
        Flight deals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-lightGray p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
          >
            <img
              src={flight.image}
              alt={`${flight.from} to ${flight.to}`}
              className="w-full h-56 object-cover rounded-lg mb-6"
              data-aos="fade-in"
            />
            <div className="mb-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-primary mb-2">
                {flight.from} to {flight.to}
              </h3>
              <p className="text-darkGray text-sm mb-2">Date: {flight.date}</p>
              <p className="text-darkGray text-sm">
                Departure: {flight.departure} - Arrival: {flight.arrival}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-darkGray font-bold text-xl">{flight.price}</p>
              <button
                className="bg-accent px-6 py-3 rounded-lg hover:bg-secondary transition duration-300 text-lightGray"
                data-aos="fade-up"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
