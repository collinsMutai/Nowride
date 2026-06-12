import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./QuickBookingForm.css";

const steps = [
  "eligibility",
  "member",
  "contact",
  "transport",
  "appointment",
  "final",
];

const QuickBookingForm = () => {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    // Eligibility
    over25Miles: "",
    transportAccess: "",

    // Member
    firstName: "",
    lastName: "",
    dob: "",
    memberId: "",

    // Contact
    phone: "",
    email: "",

    // Transport
    medicalReason: "",
    facilityName: "",
    facilityPhone: "",
    facilityAddress: "",
    facilityCity: "",
    facilityState: "",
    facilityZip: "",

    // Appointment
    apptDate: "",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    time: "",
    returnAddress: "",
    returnCity: "",
    returnState: "",
    returnZip: "",
    returnTime: "",
    wheelchair: "",
    notes: "",

    // Escort
    escort: "",
    escortReason: "",
    escortNames: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT:", form);
  };

  const variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <AnimatePresence mode="wait">
        {/* STEP 1: ELIGIBILITY */}
        {step === 0 && (
          <motion.div
            key="step1"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step"
          >
            <h3>Eligibility</h3>

            <div className="form-group">
              <label>Is your trip over 25 miles?</label>
              <select name="over25Miles" onChange={handleChange}>
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
                <option>Unsure</option>
              </select>
            </div>

            <div className="form-group">
              <label>Do you have other transportation?</label>
              <select name="transportAccess" onChange={handleChange}>
                <option value="">Select</option>
                <option>Personal Vehicle</option>
                <option>Family or Friend</option>
                <option>Public Transport</option>
                <option>None of the Above</option>
              </select>
            </div>
          </motion.div>
        )}

        {/* STEP 2: MEMBER */}
        {step === 1 && (
          <motion.div
            key="step2"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step member-step"
          >
            <h3>Medicaid Member Info</h3>

            <div className="inline-row">
              <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
              />

              <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>

            <div className="inline-row">
              <input type="date" name="dob" onChange={handleChange} />

              <input
                name="memberId"
                placeholder="Member ID"
                onChange={handleChange}
              />
            </div>
          </motion.div>
        )}

        {/* STEP 3: CONTACT */}
        {step === 2 && (
          <motion.div
            key="step3"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step contact-step"
          >
            <h3>Contact</h3>

            <div className="inline-row">
              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />

              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
          </motion.div>
        )}
        {/* STEP 4: FACILITY */}
        {step === 3 && (
          <motion.div
            key="step4"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step facility-step"
          >
            <h3>Facility & Reason</h3>

            <div className="inline-row">
              <input
                name="facilityName"
                placeholder="Facility Name"
                onChange={handleChange}
              />

              <input
                name="facilityPhone"
                placeholder="Facility Phone"
                onChange={handleChange}
              />
            </div>

            <div className="inline-row">
              <input
                name="facilityAddress"
                placeholder="Facility Address"
                onChange={handleChange}
              />

              <textarea
                name="medicalReason"
                placeholder="What are you being seen for?"
                onChange={handleChange}
              />
            </div>
          </motion.div>
        )}

        {/* STEP 5: APPOINTMENT */}
        {step === 4 && (
          <motion.div
            key="step5"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step appointment-step"
          >
            <h3>Appointment Details</h3>

            <div className="inline-row">
              <input type="date" name="apptDate" onChange={handleChange} />

              <input type="time" name="time" onChange={handleChange} />
            </div>

            <div className="inline-row">
              <input
                name="pickupAddress"
                placeholder="Pickup Address"
                onChange={handleChange}
              />

              <input
                name="dropoffAddress"
                placeholder="Dropoff Address"
                onChange={handleChange}
              />
            </div>

            <div className="inline-row">
              <select name="wheelchair" onChange={handleChange}>
                <option value="">Wheelchair Accessible?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <textarea
                name="notes"
                placeholder="Special Requests"
                onChange={handleChange}
              />
            </div>
          </motion.div>
        )}

        {/* STEP 6: ESCORT */}
        {step === 5 && (
          <motion.div
            key="step6"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="step escort-step"
          >
            <h3>Escort / Children</h3>

            <div className="inline-row">
              <select name="escort" onChange={handleChange}>
                <option value="">Will someone accompany you?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <textarea
                name="escortReason"
                placeholder="Reason for escort"
                onChange={handleChange}
              />
            </div>

            <div className="inline-row">
              <textarea
                name="escortNames"
                placeholder="Names of escort or children"
                onChange={handleChange}
              />

              <div />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION */}
      <div className="step-buttons">
        {/* BACK (always visible except first step) */}
        {step > 0 && (
          <button type="button" onClick={back}>
            Back
          </button>
        )}

        {/* NEXT (hidden only on last step) */}
        {step < steps.length - 1 && (
          <button type="button" className="next-btn" onClick={next}>
            Next
          </button>
        )}

        {/* SUBMIT (last step only) */}
        {step === steps.length - 1 && (
          <motion.button type="submit" whileTap={{ scale: 0.95 }}>
            Submit Request
          </motion.button>
        )}
      </div>
    </form>
  );
};

export default QuickBookingForm;
