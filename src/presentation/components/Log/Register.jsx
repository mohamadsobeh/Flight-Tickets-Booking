import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { fullName, email, phone, address };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <h2
        className="text-4xl font-bold text-darkGray mb-8 text-center"
        data-aos="fade-down"
      >
        Register
      </h2>
      <form
        onSubmit={handleRegister}
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div data-aos="fade-left">
            <label className="block text-darkGray font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right">
            <label className="block text-darkGray font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div data-aos="fade-left">
            <label className="block text-darkGray font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your address"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div data-aos="fade-right">
            <label className="block text-darkGray font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Enter your password"
              required
            />
          </div>

          <div data-aos="fade-left">
            <label className="block text-darkGray font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-6 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Confirm your password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white py-3 rounded-lg hover:bg-secondary transition duration-300"
          data-aos="zoom-in"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center" data-aos="fade-up">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
