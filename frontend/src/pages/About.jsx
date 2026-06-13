import { motion } from "framer-motion";
import {
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";

import "./About.css";
import aboutHeroImg from "../assets/img6.jpg";

const values = [
  { icon: <FaHeart />, title: "Patient First" },
  { icon: <FaShieldAlt />, title: "Safety Always" },
  { icon: <FaClock />, title: "Reliability Matters" },
  { icon: <FaHandsHelping />, title: "Respect in Every Ride" },
];

const safetyItems = [
  "Driver screening & background checks",
  "ADA-compliant vehicle fleet",
  "Routine inspections & maintenance",
  "Training in patient assistance",
];

/* =========================
   ANIMATION VARIANTS
========================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section className="about-page">

      {/* HERO */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHeroImg})` }}
      >
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Care-Focused Transportation You Can Depend On
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            NowRide Care provides non-emergency medical transportation across
            Colorado with a focus on dignity, safety, and reliability.
          </motion.p>
        </motion.div>
      </div>

      {/* MISSION */}
      <motion.div
        className="mission-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>Our Mission</h2>
        <p>
          To remove transportation barriers to healthcare by providing safe,
          consistent, and compassionate mobility solutions.
        </p>
      </motion.div>

      {/* VALUES */}
      <div className="values-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our Values
        </motion.h2>

        <motion.div
          className="values-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {values.map((itemData, index) => (
            <motion.div
              key={index}
              className="value-card"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <div className="value-icon">{itemData.icon}</div>
              <h3>{itemData.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SAFETY */}
      <motion.div
        className="safety-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="section-title">Safety & Compliance</h2>

        <motion.div
          className="safety-list"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {safetyItems.map((itemText, index) => (
            <motion.div
              key={index}
              className="safety-item"
              variants={item}
            >
              <FaCheckCircle className="check-icon" />
              <span>{itemText}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default About;