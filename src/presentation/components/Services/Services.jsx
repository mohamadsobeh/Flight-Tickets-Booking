import React from "react";
import { FaPlaneDeparture, FaSearch, FaWallet } from "react-icons/fa"; 

const ServicesData = [
  {
    id: 1,
    icon: <FaPlaneDeparture className="text-4xl md:text-5xl text-primary" />,
    title: "Find Flights Anytime",
    description:
      "Explore the best flight deals from anywhere to everywhere, with no extra fees when booking.",
  },
  {
    id: 2,
    icon: <FaSearch className="text-4xl md:text-5xl text-primary" />,
    title: "Compare Flight Deals",
    description:
      "Compare deals from over 1000 providers and select the cheapest, fastest, or most eco-friendly flights.",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Track Prices and Alerts",
    description:
      "Find the cheapest months and days to fly, and set up alerts to book when the price is just right.",
  },
];

const Services = () => {
  return (
    <div className="my-14 md:my-20">
      <h2 className="text-3xl font-bold text-darkGray mb-8 text-center">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ServicesData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col items-center justify-center gap-6 text-center p-6 bg-lightGray rounded-lg shadow-lg hover:shadow-xl transition-all"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
          >
            <div className="mb-4" data-aos="flip-left" data-aos-duration="1500">
              {data.icon}
            </div>
            <h2
              className="text-xl font-semibold text-gray-800"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {data.title}
            </h2>
            <p
              className="text-gray-500 text-sm"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
