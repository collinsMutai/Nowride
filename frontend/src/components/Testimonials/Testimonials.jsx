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

        <div className="testimonials-header">
          <h2>Trusted by Patients & Facilities</h2>
          <p>Real feedback from people who rely on our transportation services.</p>
        </div>

        <div className="testimonial-slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
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

              <p className="testimonial-text">“{current.text}”</p>

              <span className="testimonial-author">
                — {current.author}
              </span>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* dots */}
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