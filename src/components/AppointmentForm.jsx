import React, { useState } from 'react';

const AppointmentForm = ({ doctorName }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <strong>Success!</strong> Your appointment with {doctorName} has been booked.
      </div>
    );
  }

  return (
    <div className="appointment-form-container">
      <h3>Book Your Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name</label>
          <input 
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-grid">
          <div>
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="form-submit-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;