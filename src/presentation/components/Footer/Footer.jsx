import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterLink = [
  { title: "Home", link: "/" },
  { title: "Flights", link: "/flights" },
  { title: "Booking Page", link: "/bookingPage" },
];

const Footer = () => {
  return (
    <div className="bg-darkGray mt-20">
      <div className="grid md:grid-cols-3 pb-10 pt-5">
        <div className="py-4 px-4 mx-4">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-accent transition duration-300"
          >
            Start<span className="text-accent"> Up</span>
          </Link>
          <p className="text-lightGray text-md pt-3">
            ✈️ The best flight booking platform - your gateway to the world! 🌍
            <br />
            Offering exclusive deals on flights worldwide 🌐
            <br />
            💥 Get discounts and special offers up to 30%! 💥
            <br />
            📦 Fast booking | 🛡️ Quality service | 💳 Safe payments
          </p>
        </div>

        {/* Footer Links */}
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 mx-4">
          <div className="py-4 px-4">
            <h1 className="text-xl text-orange font-bold sm:text-left mb-3">
              Important Links
            </h1>
            <ul className="space-y-3">
              {FooterLink.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link}
                    className="text-lightGray hover:text-accent duration-300"
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="py-4 px-4">
            <h1 className="text-xl text-orange font-bold sm:text-left mb-3">
              Quick Links
            </h1>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="text-lightGray hover:text-accent duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-lightGray hover:text-accent duration-300"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* company Address */}
          <div className="py-4 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl text-orange font-bold sm:text-left mb-3">
              Address
            </h1>
            <div>
              <div className="flex items-center text-lightGray ">
                <FaLocationArrow className="hover:text-accent" />
                <p className="ml-3 ">Syria, Damascus</p>
              </div>
              <div className="flex items-center gap-3 mt-4 text-lightGray">
                <FaMobileAlt className="hover:text-accent" />
                <p>+963 959837527</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-4">
              <a href="#">
                <FaInstagram className="text-3xl text-lightGray hover:text-danger duration-200" />
              </a>
              <a href="https://www.facebook.com/login">
                <FaFacebook className="text-3xl text-lightGray hover:text-blue-600 duration-200" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl text-lightGray hover:text-gray-500 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
