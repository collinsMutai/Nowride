import { useEffect, useState } from "react";
import "./Hero.css";

import hero1 from "../../assets/img1.jpg";
import hero2 from "../../assets/img2.jpg";
import hero3 from "../../assets/img3.jpg";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: hero1,
      title: "Reliable Medical Transportation",
      text: "Safe, on-time NEMT rides across Colorado",
      button: "Book a Ride",
    },
    {
      image: hero2,
      title: "Comfort Meets Care",
      text: "Wheelchair-accessible & trained drivers",
      button: "Schedule Pickup",
    },
    {
      image: hero3,
      title: "Always On Time",
      text: "Hospital, clinic & appointment transport",
      button: "Get Started",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            activeSlide === index ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <span className="hero-badge">
                Trusted Medical Transportation
              </span>

              <h1>{slide.title}</h1>

              <p>{slide.text}</p>

              <button className="hero-btn">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              activeSlide === index ? "active"
                : ""
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;