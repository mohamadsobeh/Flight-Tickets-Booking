import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaBars } from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const MenuLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Flights", link: "/flights" },
    { id: 3, name: "Booking Page", link: "/bookingPage" },
  ];

  const LoginDropdownLinks = [
    { id: 1, name: "Login", action: "login" },
    { id: 2, name: "Register", action: "register" },
    { id: 3, name: "Logout", action: "logout" },
  ];

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(
    (action) => {
      if (action === "login") {
        navigate("/login");
      } else if (action === "register") {
        navigate("/register");
      } else if (action === "logout") {
        localStorage.removeItem("user");
        navigate("/login");
      }
      setDropdownOpen(false);
      setMobileMenuOpen(false);
    },
    [navigate]
  );

  return (
    <header className="bg-darkGray relative w-full lg:px-20 sm:px-12 px-6 z-40 ">
      <div className="py-4">
        <div className="flex justify-between items-center  ">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold hover:text-accent transition duration-300"
          >
            Start<span className="text-accent"> Up</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {MenuLinks.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                className="hover:text-accent transition duration-300 text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="p-3 focus:outline-none text-white"
            >
              <FaUser className="text-xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-lightGray shadow-lg rounded-md py-2">
                <ul className="space-y-2">
                  {LoginDropdownLinks.map((data) => (
                    <li key={data.id}>
                      <button
                        onClick={() => handleLinkClick(data.action)}
                        className="block w-full px-4 py-2 text-gray-700 hover:bg-primary/20 rounded-md font-semibold"
                      >
                        {data.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-3 focus:outline-none text-white"
          >
            <FaBars className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-lightGray text-black shadow-lg">
            <ul className="space-y-4 p-4">
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary/20 rounded-md font-semibold"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
