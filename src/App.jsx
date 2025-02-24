import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./presentation/components/Header/Header";
import Footer from "./presentation/components/Footer/Footer";
import HomePage from "./presentation/Pages/HomePage/HomePage";
import Flights from "./presentation/Pages/Flights/Flights";
import BookingPage from "./presentation/Pages/BookingPage/BookingPage";
import LoginPage from "./presentation/components/Log/Login.jsx";
import RegisterPage from "./presentation/components/Log/Register.jsx";
import LogoutPage from "./presentation/components/Log/Logout.jsx";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Header />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
