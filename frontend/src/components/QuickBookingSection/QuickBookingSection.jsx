import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaWheelchair,
  FaClock,
  FaUserShield,
  FaCalendarAlt,
  FaAmbulance,
} from "react-icons/fa";

import "./QuickBookingSection.css";
import QuickBookingForm from "../QuickBookingForm/QuickBookingForm";

const trustItems = [
  { icon: <FaCheckCircle />, text: "Background-Checked Drivers" },
  { icon: <FaWheelchair />, text: "Wheelchair Accessible Fleet" },
  { icon: <FaClock />, text: "On-Time Guarantee" },
  { icon: <FaUserShield />, text: "Medicaid Approved Trips" },
  { icon: <FaCalendarAlt />, text: "24/7 Scheduling" },
];

const QuickBookingSection = () => {
  return (
    <section className="trust-booking-section">
      {/* TRUST TICKER */}
      <div className="trust-ticker">
        <motion.div
          className="trust-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...trustItems, ...trustItems].map((item, index) => (
            <div key={index} className="trust-badge">
              <span className="trust-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BOOKING CARD */}
      <motion.div
        className="booking-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="booking-header">
          <div className="booking-icon">
            <FaAmbulance />
          </div>

          <div className="booking-title-wrap">
            <h2>Non-Emergency Medical Transportation (NEMT) Services</h2>
            <p>Schedule Medicaid rides in under 30 seconds</p>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="booking-actions">
            {/* LIVE STATUS */}
            <a href="tel:+17193067313" className="booking-pill">
              <span className="dot" />
              <span className="text">Live Dispatch</span>
            </a>

            {/* CALL NOW */}
            <a href="tel:+17193067313" className="call-now-btn">
              Call Now
            </a>
          </div>
        </div>

        <QuickBookingForm />
      </motion.div>
    </section>
  );
};

export default QuickBookingSection;
