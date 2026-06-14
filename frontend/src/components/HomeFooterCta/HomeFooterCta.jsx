import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import "./HomeFooterCta.css";
import BookingModal from "../BookingModal/BookingModal";
import { useState } from "react";

const HomeFooterCta = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="cta-band">
      <div className="cta-bg-lines" />

      <motion.div
        className="cta-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Need a medical ride today?
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          viewport={{ once: false }}
        >
          We’re available 24/7 for scheduling and dispatch.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="cta-buttons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.button
            type="button"
            onClick={() => setOpenModal(true)}
            className="cta-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCalendarCheck />
            Book a Ride Now
          </motion.button>
          <BookingModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          />
          <motion.button
            type="button"
            onClick={() => (window.location.href = "tel:+1234567890")}
            className="cta-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaPhoneAlt />
            Call Dispatch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeFooterCta;
