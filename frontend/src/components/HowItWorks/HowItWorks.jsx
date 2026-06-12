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

        <div className="how-header">
          <h2>
            <FaBolt /> How It Works
          </h2>
          <p>Simple 3-step medical transportation process</p>
        </div>

        {/* STEPPER */}
        <div className="stepper">

          <div className="stepper-line" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="step-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              {/* ICON */}
              <motion.div
                className="step-icon"
                animate={
                  activeStep === index
                    ? {
                        scale: 1.25,
                        boxShadow: "0 0 25px rgba(225,29,72,0.45)",
                      }
                    : {
                        scale: 1,
                        boxShadow: "0 10px 30px rgba(225,29,72,0.12)",
                      }
                }
                transition={{ duration: 0.8, ease: "easeInOut" }}
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

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;