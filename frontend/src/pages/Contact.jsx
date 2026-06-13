import { useState } from "react";
import "./Contact.css";

import HeroBanner from "../components/HeroBanner/HeroBanner";
import contactHeroImg from "../assets/img6.jpg";

// React Icons
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Submitted:", form);
    alert("Message sent successfully!");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      {/* HERO */}
      <HeroBanner
        backgroundImage={contactHeroImg}
        title="Get Support or Schedule a Ride"
        subtitle="Our dispatch team is available 24/7 for bookings, questions, and medical transport support."
        height="55vh"
      />

      {/* CONTENT */}
      <div className="contact-layout">
        {/* LEFT - DISPATCH */}
        <div className="dispatch-card">
          <h2>Contact Details</h2>

          <div className="dispatch-item">
            <FaPhoneAlt className="icon" />
            <div>
              <span className="label">Phone</span>
              <span className="value"> +1 (719) 306-7313</span>
            </div>
          </div>

          <div className="dispatch-item phone">
            <FaEnvelope className="icon" />
            <div>
              <span className="label">Email</span>
              <span className="value"> info@nowride.care</span>
            </div>
          </div>

          <div className="dispatch-item">
            <FaClock className="icon" />
            <div>
              <span className="label">Availability</span>
              <span className="value"> 24/7 Support</span>
            </div>
          </div>

          <div className="dispatch-item">
            <FaMapMarkedAlt className="icon" />
            <div>
              <span className="label">Address</span>
              <span className="value"> Colorado Springs, CO</span>
            </div>
          </div>

          <div className="dispatch-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <span className="label">Coverage</span>
              <span className="value">
                {" "}
                Denver, Aurora, Boulder, Colorado Springs
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaPhoneAlt className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group textarea">
            <FaCommentDots className="input-icon" />
            <textarea
              name="message"
              placeholder="Message / Ride request"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
