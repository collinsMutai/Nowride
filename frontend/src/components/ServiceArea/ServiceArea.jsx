import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaTimes, FaPhone } from "react-icons/fa";

import "./ServiceArea.css";
import BookingModal from "../BookingModal/BookingModal";

const locations = [
  "Boulder",
  "Denver",
  "Aurora",
  "Colorado Springs",
  "Surrounding Communities",
];

const services = [
  "Medical Transportation",
  "Wheelchair Transport",
  "Hospital Discharge",
  "Senior Transportation",
  "Companion Rides",
];

/* =========================
   ZIP RANGE DATABASE
========================= */
const serviceRanges = [
  {
    prefix: "802",
    city: "Denver",
    county: "Denver County",
  },
  {
    prefix: "800",
    city: "Aurora",
    county: "Arapahoe County",
  },
  {
    prefix: "803",
    city: "Boulder",
    county: "Boulder County",
  },
  {
    prefix: "809",
    city: "Colorado Springs",
    county: "El Paso County",
  },
];

const findCoverage = (zip) => {
  if (!zip || zip.length < 3) return null;

  const prefix = zip.slice(0, 3);
  const match = serviceRanges.find((r) => r.prefix === prefix);

  if (!match) return null;

  return {
    zip,
    city: match.city,
    county: match.county,
    services,
  };
};

const ServiceArea = () => {
  const [showChecker, setShowChecker] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [coverageInfo, setCoverageInfo] = useState(null);
  const [result, setResult] = useState(null);
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [zipError, setZipError] = useState("");

  const openModal = () => {
    setShowChecker(true);
    setZipCode("");
    setCoverageInfo(null);
    setResult(null);
  };

  const closeModal = () => setShowChecker(false);

 const checkCoverage = (e) => {
  e.preventDefault();

  const zip = zipCode.trim();

  // reset UI state
  setZipError("");
  setResult(null);
  setCoverageInfo(null);

  // ❌ empty validation (STOP submission flow)
  if (!zip) {
    setZipError("Please enter a ZIP code.");
    return;
  }

  // ❌ format validation
  const isValidZip = /^[0-9]{3,10}$/.test(zip);

  if (!isValidZip) {
    setZipError("Please enter a valid ZIP code.");
    return;
  }

  const area = findCoverage(zip);

  if (area) {
    setCoverageInfo(area);
    setResult(true);
  } else {
    setResult(false);
    setCoverageInfo(null);
  }
};

  return (
    <section className="service-area" id="coverage">
      <div className="service-area-container">
        {/* LEFT */}
        <motion.div
          className="service-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="service-tag">Service Area</span>

          <h2>We Serve Across Colorado</h2>

          <p>
            Reliable transportation services connecting patients, families, and
            healthcare providers across Colorado.
          </p>

          <div className="service-cities">
            {locations.map((city, index) => (
              <motion.div
                key={city}
                className="city-pill"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: false }}
              >
                <FaMapMarkerAlt />
                <span>{city}</span>
              </motion.div>
            ))}
          </div>

          <button className="service-btn" onClick={openModal}>
            Check if we serve your area <FaArrowRight />
          </button>
        </motion.div>

        {/* RIGHT MAP */}
        <motion.div
          className="map-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="map-bg">
            <div className="map-grid"></div>

            {/* BouldER (START) */}
            <motion.div
              className="map-pin boulder"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <span></span>
              <p>Boulder</p>
            </motion.div>

            {/* Denver */}
            <motion.div
              className="map-pin denver"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <span></span>
              <p>Denver</p>
            </motion.div>

            {/* Aurora */}
            <motion.div
              className="map-pin aurora"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <span></span>
              <p>Aurora</p>
            </motion.div>

            {/* Colorado Springs (END) */}
            <motion.div
              className="map-pin springs"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: false }}
            >
              <span></span>
              <p>Colorado Springs</p>
            </motion.div>

            <svg className="map-route" viewBox="0 0 500 350">
              <path
                d="M120 90 C180 50, 250 70, 300 130 S380 220, 420 260"
                fill="none"
                stroke="rgba(225,29,72,0.35)"
                strokeWidth="4"
                strokeDasharray="10 8"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      {showChecker && (
        <div className="coverage-overlay" onClick={closeModal}>
          <div className="coverage-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>

            <h3>Check Service Availability</h3>
            <p>Enter your ZIP code to check coverage.</p>

            <form onSubmit={checkCoverage}>
              <input
                type="text"
                placeholder="Enter ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
{zipError && (
  <p style={{ color: "#b91c1c", marginTop: "8px", fontSize: "13px" }}>
    {zipError}
  </p>
)}
              <button className="check-btn" type="submit">
                Check Coverage
              </button>
            </form>

            {result === true && coverageInfo && (
              <div className="coverage-success">
                <h4>✅ We serve this area</h4>

                <p>
                  <strong>ZIP:</strong> {coverageInfo.zip}
                </p>
                <p>
                  <strong>City:</strong> {coverageInfo.city}
                </p>
                <p>
                  <strong>County:</strong> {coverageInfo.county}
                </p>

                <div className="services-list">
                  {coverageInfo.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>

                <button
                  className="cta-btn success-cta"
                  onClick={() => {
                    closeModal(); // closes coverage modal
                    setOpenBookingModal(true);
                  }}
                >
                  Book / Request Ride <FaArrowRight />
                </button>
              </div>
            )}

            {result === false && (
              <div className="coverage-error">
                <h4>❌ Not in service area</h4>

                <p>
                  We may not currently serve this ZIP code. Please contact
                  dispatch for assistance.
                </p>

                <a href="tel:+1234567890" className="cta-btn error-cta">
                  Call Dispatch <FaPhone />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      <BookingModal
        isOpen={openBookingModal}
        onClose={() => setOpenBookingModal(false)}
      />
    </section>
  );
};

export default ServiceArea;
