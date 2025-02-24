import React, { useState } from "react";

const SearchForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for flights:", {
      from,
      to,
      departureDate,
      returnDate,
      passengers,
    });

    setFrom("");
    setTo("");
    setDepartureDate("");
    setReturnDate("");
    setPassengers(1);
  };

  return (
    <div
      className="bg-darkGray p-6 md:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mt-10"
      data-aos="fade-up"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-orange mb-6 text-center">
        Find Your Flight
      </h2>
      <form className="space-y-6" onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <label className="block text-lightGray font-bold mb-1">From</label>
            <input
              type="text"
              placeholder="City or Airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full p-3 border border-lightGray rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-lightGray font-bold mb-1">To</label>
            <input
              type="text"
              placeholder="City or Airport"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full p-3 border border-lightGray rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-lightGray font-bold mb-1">
              Depart
            </label>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full p-3 border border-lightGray rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-lightGray font-bold mb-1">
              Return
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full p-3 border border-lightGray rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-lightGray font-bold mb-1">
              Passengers
            </label>
            <input
              type="number"
              placeholder="Number"
              value={passengers}
              onChange={(e) =>
                setPassengers(e.target.value.replace(/[^0-9]/g, ""))
              }
              min="1"
              className="w-full p-3 border border-lightGray rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-lg hover:bg-secondary transition duration-300 text-lg font-semibold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
