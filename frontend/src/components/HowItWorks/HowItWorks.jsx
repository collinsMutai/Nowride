import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaClipboardCheck,
  FaCarSide,
  FaBolt,
} from "react-icons/fa";

import "./HowItWorks.css";

const steps = [
  {
    icon: <FaPhoneAlt />,
    title: "Request Ride",
    desc: "Book online or by phone",
  },
  {
    icon: <FaClipboardCheck />,
    title: "We Confirm Details",
    desc: "Instant dispatch confirmation",
  },
  {
    icon: <FaCarSide />,
    title: "Safe Pickup & Transport",
    desc: "Door-to-door assistance",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="how">
      <div className="how-container">

        {/* HEADER */}
        <motion.div
          className="how-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>
            <FaBolt /> How It Works
          </h2>
          <p>Simple 3-step medical transportation process</p>
        </motion.div>

        {/* STEPPER */}
        <motion.div
          className="stepper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="stepper-line" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="step-item"
              variants={itemVariants}
            >

              {/* ICON */}
              <motion.div
                className="step-icon"
                animate={
                  activeStep === index
                    ? {
                        scale: 1.3,
                        boxShadow: "0 0 25px rgba(225,29,72,0.5)",
                      }
                    : {
                        scale: 1,
                        boxShadow: "0 10px 30px rgba(225,29,72,0.12)",
                      }
                }
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {step.icon}
              </motion.div>

              {/* TEXT */}
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;