import { useState } from "react";
import "./BookingModal.css";

import {
  FaTimes,
  FaMapMarkerAlt,
  FaFlag,
  FaCalendarAlt,
  FaClock,
  FaWheelchair,
  FaUser,
  FaPhoneAlt,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaAmbulance,
} from "react-icons/fa";

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    patientType: "ambulatory",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const closeModal = () => {
    setStep(1);
    onClose();
  };

  const handleSubmit = () => {
    console.log("Booking Submitted:", form);
    alert("🚐 Booking Confirmed!");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="modal-header">
          <h2>
            <FaAmbulance /> Book a Ride
          </h2>

          <button className="close-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        {/* PROGRESS */}
        <div className="progress">
          <div className={`bar step-${step}`} />
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="modal-body">
            <h3>Trip Details</h3>

            <div className="input">
              <FaMapMarkerAlt className="icon" />
              <input
                name="pickup"
                placeholder="Pickup Location"
                value={form.pickup}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <FaFlag className="icon" />
              <input
                name="dropoff"
                placeholder="Dropoff Location"
                value={form.dropoff}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <FaCalendarAlt className="icon" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </div>

            {/* NEW: TIME INPUT */}
            <div className="input">
              <FaClock className="icon" />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="modal-body">
            <h3>Patient Needs</h3>

            <div className="input">
              <FaWheelchair className="icon" />
              <select
                name="patientType"
                value={form.patientType}
                onChange={handleChange}
              >
                <option value="ambulatory">Ambulatory</option>
                <option value="wheelchair">Wheelchair</option>
                <option value="stretcher">Stretcher</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="modal-body">
            <h3>Confirmation</h3>

            <div className="input">
              <FaUser className="icon" />
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input">
              <FaPhoneAlt className="icon" />
              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
              <FaCheckCircle /> Confirm Booking
            </button>
          </div>
        )}

        {/* FOOTER NAV */}
        <div className="modal-footer">
          {step > 1 && (
            <button className="secondary" onClick={prevStep}>
              <FaArrowLeft /> Back
            </button>
          )}

          {step < 3 && (
            <button className="primary" onClick={nextStep}>
              Next <FaArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;