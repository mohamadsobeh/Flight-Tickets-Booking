import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl font-bold mb-6 text-center text-darkGray"
          data-aos="fade-down"
        >
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-6" data-aos="fade-right">
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

          <div className="mb-6" data-aos="fade-left">
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

          <button
            type="submit"
            className="w-full bg-accent text-white py-3 rounded-lg hover:bg-secondary transition duration-300"
            data-aos="zoom-in"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center" data-aos="fade-up">
          <p className="text-darkGray">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
