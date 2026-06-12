import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import "./HomeFooterCta.css";

const HomeFooterCta = () => {
  return (
    <section className="cta-band">
      <div className="cta-bg-lines" />

      <div className="cta-container">
        <h2>Need a medical ride today?</h2>

        <p>
          We’re available 24/7 for scheduling and dispatch.
        </p>

        <div className="cta-buttons">
          <a href="/book" className="cta-primary">
            <FaCalendarCheck />
            Book a Ride Now
          </a>

          <a href="tel:+1234567890" className="cta-secondary">
            <FaPhoneAlt />
            Call Dispatch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFooterCta;