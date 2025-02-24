import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-darkGray">
          Logout
        </h1>
        <p className="text-center text-darkGray mb-6">
          Are you sure you want to log out?
        </p>
        <div className="text-center">
          <button
            onClick={handleLogout}
            className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-secondary transition duration-300"
          >
            Yes, Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
