import {
  FaWheelchair,
  FaWalking,
  FaHospital,
  FaTint,
  FaUserFriends,
  FaBuilding,
} from "react-icons/fa";

import "./ServicesPreview.css";

const services = [
  {
    icon: <FaWheelchair />,
    title: "Wheelchair Transportation",
    description: "Door-to-door safe mobility transport",
  },
  {
    icon: <FaWalking />,
    title: "Ambulatory Rides",
    description: "Assisted transport for mobile patients",
  },
  {
    icon: <FaHospital />,
    title: "Hospital Discharge",
    description: "Safe post-treatment pickup service",
  },
  {
    icon: <FaTint />,
    title: "Dialysis Transport",
    description: "Recurring scheduled rides",
  },
  {
    icon: <FaUserFriends />,
    title: "Senior Transportation",
    description: "Comfortable rides for elderly patients",
  },
  {
    icon: <FaBuilding />,
    title: "Facility Contracts",
    description: "Partner transport for clinics & care homes",
  },
];

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">OUR SERVICES</span>

          <h2>Medical Transportation Services</h2>

          <p>
            Safe, reliable, and compassionate transportation solutions for
            patients, seniors, healthcare providers, and care facilities.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="service-link">
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;