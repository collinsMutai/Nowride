import {
  FaWheelchair,
  FaWalking,
  FaHospital,
  FaTint,
  FaUserFriends,
  FaBuilding,
} from "react-icons/fa";
import { motion } from "framer-motion";

import "./ServicesPreview.css";

const services = [
  { icon: <FaWheelchair />, title: "Wheelchair Transportation", description: "Door-to-door safe mobility transport" },
  { icon: <FaWalking />, title: "Ambulatory Rides", description: "Assisted transport for mobile patients" },
  { icon: <FaHospital />, title: "Hospital Discharge", description: "Safe post-treatment pickup service" },
  { icon: <FaTint />, title: "Dialysis Transport", description: "Recurring scheduled rides" },
  { icon: <FaUserFriends />, title: "Senior Transportation", description: "Comfortable rides for elderly patients" },
  { icon: <FaBuilding />, title: "Facility Contracts", description: "Partner transport for clinics & care homes" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicesPreview = () => {
  return (
    <section className="services-preview" id="services">
      <div className="services-container">

        {/* HEADER */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="services-tag">OUR SERVICES</span>
          <h2>Private Pay For Ambulatory Transports</h2>
          <p>
            Safe, reliable, and compassionate transportation solutions for patients, seniors, healthcare providers, and care facilities.
          </p>
        </motion.div>

        {/* GRID (IMPORTANT FIX HERE) */}
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}  // 🔥 MUST NOT be once:true
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="service-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // 🔥 IMPORTANT
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {/* <button className="service-link">
                Learn More →
              </button> */}
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesPreview;