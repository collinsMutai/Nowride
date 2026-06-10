import { useState } from "react";
import {
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaAmbulance,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP NAV (always visible) */}
      <div className="top-nav">
        <div className="top-nav-left">
          <span><FaClock className="icon" /> Mon - Fri: 8:00 AM - 6:00 PM</span>
          <span><FaPhoneAlt className="icon" /> (719) 555-1234</span>
          <span><FaEnvelope className="icon" /> dispatch@nowride.com</span>
          <span><FaMapMarkerAlt className="icon" /> Colorado Springs, CO</span>
        </div>

        <div className="top-nav-right">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://linkedin.com"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="navbar">
        <div className="navbar-logo">
          <FaAmbulance className="logo-icon" />
          <span>NOWRIDE</span>
        </div>

        {/* HAMBURGER */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* LINKS */}
        <ul className={`navbar-links ${open ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#coverage" onClick={() => setOpen(false)}>Service Areas</a></li>
          <li><a href="#insurance" onClick={() => setOpen(false)}>Insurance & Medicaid</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About Us</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>

        <button className="navbar-btn">Schedule a Ride</button>
      </nav>
    </>
  );
};

export default Navbar;