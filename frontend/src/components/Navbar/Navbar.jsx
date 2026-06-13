import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import BookingModal from "../BookingModal/BookingModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setOpen(false);

  // Scroll to top for page navigation
  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    closeMenu();
  };

  // Service Areas scroll behavior
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  return (
    <>
      {/* TOP NAV */}
      <div className="top-nav">
        <div className="top-nav-left">
          <span>
            <FaClock className="icon" /> Mon - Fri: 8:00 AM - 6:00 PM
          </span>

          <span>
            <FaPhoneAlt className="icon" /> (719) 555-1234
          </span>

          <span>
            <FaEnvelope className="icon" /> dispatch@nowride.com
          </span>

          <span>
            <FaMapMarkerAlt className="icon" /> Colorado Springs, CO
          </span>
        </div>

        <div className="top-nav-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-logo">
          <FaAmbulance className="logo-icon" />
          <span>NOWRIDE</span>
        </div>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-links ${open ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={handleNavLinkClick}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/services" onClick={handleNavLinkClick}>
              Services
            </Link>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("coverage")}
              className="nav-link-btn"
            >
              Service Areas
            </button>
          </li>

          <li>
            <Link to="/contact" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="navbar-btn"
          onClick={() => setOpenModal(true)}
        >
          Schedule a Ride
        </button>

        <BookingModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;