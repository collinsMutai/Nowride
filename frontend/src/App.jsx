import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";

import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      {/* TOAST NOTIFICATIONS (GLOBAL) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
        toastStyle={{
          background: "#e11d48",
          color: "#fff",
          borderRadius: "16px",
          fontFamily: "DM Sans, sans-serif",
        }}
      />

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScroll ? "show" : ""}`}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    </BrowserRouter>
  );
}

export default App;
