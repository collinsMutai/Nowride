import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  FaEnvelope,
} from "react-icons/fa";

import { toast } from "react-toastify";

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    patientType: "ambulatory",
    name: "",
    phone: "",
    email: "",
  });

  // =========================
  // BODY SCROLL LOCK
  // =========================
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  // =========================
  // SAFE PORTAL TARGET
  // =========================
  const modalRoot =
    typeof document !== "undefined"
      ? document.body
      : null;

  if (!isOpen || !modalRoot) return null;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const nextStep = () => {
    if (
      step === 1 &&
      (!form.pickup || !form.dropoff || !form.date || !form.time)
    ) {
      toast.warning("Please complete all trip details.");
      return;
    }

    if (step === 2 && !form.patientType) {
      toast.warning("Please select patient type.");
      return;
    }

    setStep((s) => Math.min(s + 1, 3));
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const closeModal = () => {
    setStep(1);
    onClose();
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.email) {
      toast.warning("Please complete your contact information.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/book-ride`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Booking failed");
      }

      toast.success(
        data.message ||
          "Booking received! Our dispatch team will contact you shortly."
      );

      setTimeout(() => {
        closeModal();
      }, 1200);
    } catch (error) {
      toast.error(error.message || "Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // PORTAL RENDER
  // =========================
  return createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="modal-header">
          <h2>
            <FaAmbulance />
            Book a Ride
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
            <h3>Contact Information</h3>

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

            <div className="input">
              <FaEnvelope className="icon" />
              <input
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              <FaCheckCircle />
              {loading ? "Submitting..." : "Confirm Booking"}
            </button>
          </div>
        )}

        {/* FOOTER */}
        <div className="modal-footer">
          {step > 1 && (
            <button
              className="secondary"
              onClick={prevStep}
              disabled={loading}
            >
              <FaArrowLeft />
              Back
            </button>
          )}

          {step < 3 && (
            <button className="primary" onClick={nextStep}>
              Next
              <FaArrowRight />
            </button>
          )}
        </div>

      </div>
    </div>,
    modalRoot
  );
};

export default BookingModal;