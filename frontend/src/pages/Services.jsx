import { useState } from "react";
import "./Services.css";

import HeroBanner from "../components/HeroBanner/HeroBanner";

import {
  FaWheelchair,
  FaUserNurse,
  FaHospital,
  FaCalendarCheck,
  FaCheckCircle,
} from "react-icons/fa";

// Banner Image
import servicesHeroImg from "../assets/img6.jpg";

// Payment Images
import idCard from "../assets/medicaid.png";
import money from "../assets/img7.jpg";
import building from "../assets/img8.jpg";

const servicesData = [
  {
    id: 1,
    title: "Wheelchair Transportation",
    category: "individual",
    icon: <FaWheelchair />,
    points: [
      "Secure boarding systems",
      "Assistance from pickup to drop-off",
      "Door-to-door support",
    ],
  },
  {
    id: 2,
    title: "Non-Emergency Medical Rides",
    category: "individual",
    icon: <FaUserNurse />,
    points: [
      "Clinic & hospital visits",
      "Safe scheduled pickups",
      "Comfort-focused travel",
    ],
  },
  {
    id: 3,
    title: "Facility Transport Services",
    category: "facility",
    icon: <FaHospital />,
    points: [
      "Nursing home coordination",
      "Hospital discharge transport",
      "Bulk scheduling available",
    ],
  },
  {
    id: 4,
    title: "Recurring Transportation Plans",
    category: "recurring",
    icon: <FaCalendarCheck />,
    points: [
      "Dialysis appointments",
      "Therapy sessions",
      "Weekly/monthly scheduling",
    ],
  },
];

const paymentOptions = [
  {
    icon: idCard,
    title: "Colorado Medicaid",
    desc: "Eligible non-emergency rides",
  },
  {
    icon: money,
    title: "Private Pay",
    desc: "Flexible direct payments",
  },
  {
    icon: building,
    title: "Facility Billing",
    desc: "Hospitals & care centers",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expanded, setExpanded] = useState(null);

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  return (
    <section className="services-page">
      <HeroBanner
        backgroundImage={servicesHeroImg}
        title="Medical Transportation Services"
        subtitle="Reliable, safe, and comfortable transport for patients and facilities."
      />

      {/* TABS */}
      <div className="service-tabs">
        {["all", "individual", "facility", "recurring"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* SERVICE GRID */}
      <div className="service-grid">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              expanded === service.id ? "expanded" : ""
            }`}
            onClick={() =>
              setExpanded(expanded === service.id ? null : service.id)
            }
          >
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
            </div>

            {expanded === service.id && (
              <div className="service-details">
                {service.points.map((point, i) => (
                  <div key={i} className="service-point">
                    <FaCheckCircle className="check" />
                    <span>{point}</span>
                  </div>
                ))}

                <button className="service-cta">
                  Schedule This Service →
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* PAYMENT SECTION */}
      <div className="insurance-section">
        <h2>Accepted Payment Options</h2>

        <div className="insurance-grid">
          {paymentOptions.map((item, i) => (
            <div key={i} className="insurance-card">
              <div className="insurance-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;