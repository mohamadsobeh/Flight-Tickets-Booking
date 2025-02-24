import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    nationality: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    tickets: 1,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!");
  };

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <h2
        className="text-4xl font-bold text-darkGray mb-8 text-center"
        data-aos="fade-down"
      >
        Book Your Flight
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-2xl"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right">
            <label className="block text-darkGray font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Full Name"
            />
          </div>

          <div data-aos="fade-left">
            <label className="block text-darkGray font-semibold mb-2">
              Nationality
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter nationality"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right">
            <label className="block text-darkGray font-semibold mb-2">
              Payment Details
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter card number"
            />
          </div>

          <div data-aos="fade-left">
            <label className="block text-darkGray font-semibold mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="MM/YY"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right">
            <label className="block text-darkGray font-semibold mb-2">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter CVV"
            />
          </div>

          <div data-aos="fade-left">
            <label className="block text-darkGray font-semibold mb-2">
              Tickets
            </label>
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Number of tickets"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-lg hover:bg-secondary transition duration-300"
          data-aos="zoom-in"
        >
          Confirm Booking
        </button>
      </form>

      <div className="mt-6 text-center" data-aos="fade-up">
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BookingPage;
