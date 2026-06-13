import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Always on time and very respectful drivers.",
    author: "Patient, Denver",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Reliable for our dialysis patients every week.",
    author: "Care Coordinator",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Great communication and smooth scheduling every time.",
    author: "Clinic Manager",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="testimonials">
      <div className="testimonials-container">

        {/* HEADER */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Trusted by Patients & Facilities</h2>
          <p>Real feedback from people who rely on our transportation services.</p>
        </motion.div>

        {/* SLIDER */}
        <div className="testimonial-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >

              {/* AVATAR */}
              <div className="avatar-wrapper">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="avatar"
                />
              </div>

              {/* STARS */}
              <div className="stars">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="testimonial-text">
                “{current.text}”
              </p>

              <span className="testimonial-author">
                — {current.author}
              </span>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;