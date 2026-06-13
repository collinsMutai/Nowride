import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaUserShield,
  FaBroom,
  FaHeadset,
} from "react-icons/fa";

import rideCareImage from "../../assets/img6.jpg";
import "./WhyNowRideCare.css";

const features = [
  { icon: <FaClock />, text: "Predictable on-time pickups" },
  { icon: <FaUserShield />, text: "Professional trained drivers" },
  { icon: <FaBroom />, text: "Clean, sanitized vehicles daily" },
  { icon: <FaHeadset />, text: "Real-time dispatch coordination" },
  { icon: <FaCheckCircle />, text: "Compassion-first service model" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhyNowRideCare = () => {
  return (
    <section className="why-care">
      <div className="why-care-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="why-illustration"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="image-wrapper">
            <img
              src={rideCareImage}
              alt="Reliable transportation service"
              className="care-image"
            />

            <div className="image-badge">
              Trusted Transportation
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="why-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <span className="section-tag">Why Choose Us</span>

          <h2>Built for Reliability, Designed for Care</h2>

          <p>
            We combine compassionate service with professional transportation
            standards to ensure every ride is safe, comfortable, and dependable.
          </p>

          {/* FEATURES */}
          <motion.div
            className="why-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="why-item"
                variants={itemVariants}
              >
                {feature.icon}
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyNowRideCare;