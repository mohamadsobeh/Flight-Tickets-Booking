import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/traveller-1.jpg";
import img2 from "../../../assets/images/traveller-2.jpg";
import img3 from "../../../assets/images/traveller-3.jpg";
import img4 from "../../../assets/images/traveller-4.jpg";
import img5 from "../../../assets/images/traveller-5.jpg";
import img6 from "../../../assets/images/traveller-6.jpg";
import img7 from "../../../assets/images/traveller-7.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Flights = () => {
  const navigate = useNavigate();
  const flights = [
    {
      id: 1,
      image: img5,
      from: "New York",
      to: "Dubai",
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
    {
      id: 4,
      image: img4,
      from: "Berlin",
      to: "Tokyo",
      date: "2024-08-20",
      departure: "09:00 AM",
      arrival: "02:00 PM",
      price: "$300",
    },
    {
      id: 5,
      image: img6,
      from: "Los Angeles",
      to: "Sydney",
      date: "2024-09-10",
      departure: "11:00 AM",
      arrival: "07:00 PM",
      price: "$350",
    },
    {
      id: 6,
      image: img2,
      from: "Toronto",
      to: "France",
      date: "2024-10-01",
      departure: "01:00 PM",
      arrival: "03:30 PM",
      price: "$180",
    },
    {
      id: 7,
      image: img7,
      from: "Rome",
      to: "Barcelona",
      date: "2024-11-15",
      departure: "05:00 PM",
      arrival: "08:00 PM",
      price: "$220",
    },
    {
      id: 8,
      image: img5,
      from: "London",
      to: "Dubai",
      date: "2024-12-20",
      departure: "03:00 PM",
      arrival: "07:00 PM",
      price: "$270",
    },
    {
      id: 9,
      image: img3,
      from: "Rome",
      to: "Istanbul",
      date: "2024-5-20",
      departure: "04:00 PM",
      arrival: "07:00 PM",
      price: "$300",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleBookNow = () => {
    navigate("/bookingPage");
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2
        className="text-3xl font-bold text-darkGray mb-8 text-center"
        data-aos="fade-up"
      >
        Available Flights
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
              alt="Flight"
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
                onClick={handleBookNow}
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

export default Flights;
