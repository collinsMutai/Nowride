import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaTimes,
  FaPhone,
} from "react-icons/fa";

import "./ServiceArea.css";

const locations = [
  "Denver",
  "Aurora",
  "Colorado Springs",
  "Boulder",
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
    services: [
      "Medical Transportation",
      "Wheelchair Transport",
      "Hospital Discharge",
    ],
  },
  {
    prefix: "800",
    city: "Aurora",
    county: "Arapahoe County",
    services: ["Medical Transportation", "Senior Transportation"],
  },
  {
    prefix: "803",
    city: "Boulder",
    county: "Boulder County",
    services: ["Medical Transportation", "Companion Rides"],
  },
  {
    prefix: "809",
    city: "Colorado Springs",
    county: "El Paso County",
    services: ["Medical Transportation", "Wheelchair Transport"],
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
    services: services,
  };
};

const ServiceArea = () => {
  const [showChecker, setShowChecker] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [coverageInfo, setCoverageInfo] = useState(null);
  const [result, setResult] = useState(null); // true / false / null

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
    const area = findCoverage(zip);

    if (area) {
      setCoverageInfo(area);
      setResult(true);
    } else {
      setCoverageInfo(null);
      setResult(false);
    }
  };

  return (
    <section className="service-area">
      <div className="service-area-container">

        {/* LEFT */}
        <motion.div
          className="service-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="service-tag">Service Area</span>

          <h2>We Serve Across Colorado</h2>

          <p>
            Reliable transportation services connecting patients,
            families, and healthcare providers across Colorado.
          </p>

          <div className="service-cities">
            {locations.map((city) => (
              <div key={city} className="city-pill">
                <FaMapMarkerAlt />
                <span>{city}</span>
              </div>
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
        >
          <div className="map-bg">
            <div className="map-grid"></div>

            <div className="map-pin denver"><span></span><p>Denver</p></div>
            <div className="map-pin aurora"><span></span><p>Aurora</p></div>
            <div className="map-pin springs"><span></span><p>Colorado Springs</p></div>
            <div className="map-pin boulder"><span></span><p>Boulder</p></div>

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
              <button className="check-btn" type="submit">
                Check Coverage
              </button>
            </form>

            {/* ✅ SUCCESS */}
            {result === true && coverageInfo && (
              <div className="coverage-success">
                <h4>✅ We serve this area</h4>

                <p><strong>ZIP:</strong> {coverageInfo.zip}</p>
                <p><strong>City:</strong> {coverageInfo.city}</p>
                <p><strong>County:</strong> {coverageInfo.county}</p>

                <div className="services-list">
                  {coverageInfo.services.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>

                {/* CTA: BOOK */}
                <a href="/book" className="cta-btn success-cta">
                  Book / Request Ride <FaArrowRight />
                </a>
              </div>
            )}

            {/* ❌ FAILURE */}
            {result === false && (
              <div className="coverage-error">
                <h4>❌ Not in service area</h4>
                <p>
                  We may not currently serve this ZIP code.
                  Please contact dispatch for assistance.
                </p>

                {/* CTA: CALL DISPATCH */}
                <a href="tel:+1234567890" className="cta-btn error-cta">
                  Call Dispatch <FaPhone />
                </a>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceArea;