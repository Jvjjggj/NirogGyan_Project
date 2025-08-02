import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchDoctorById } from '../utils/api';
import AppointmentForm from '../components/AppointmentForm';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchDoctorById(id).then(data => {
      setDoctor(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <div className="loading-message">Loading doctor details...</div>;
  }

  if (!doctor) {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Doctor Not Found</h1>
        <Link to="/" className="back-link">Go back to the homepage</Link>
      </div>
    );
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'Available Today':
        return 'status-available';
      case 'Fully Booked':
        return 'status-booked';
      case 'On Leave':
        return 'status-leave';
      default:
        return 'status-leave';
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back-link">&larr; Back to all doctors</Link>
      
      <div className="profile-card">
        <img 
          src={doctor.profileImage} 
          alt={`Dr. ${doctor.name}`} 
        />
        <div className="profile-content">
          <h1>{doctor.name}</h1>
          <p>{doctor.specialization}</p>
          <span className={`status-badge ${getStatusClass(doctor.availabilityStatus)}`}>
            {doctor.availabilityStatus}
          </span>
          
          <div className="profile-availability">
            <h3>Availability:</h3>
            <ul>
              {doctor.schedule.map(day => (
                <li key={day}>{day}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="book-btn"
          >
            {showForm ? 'Hide Form' : 'Book Appointment'}
          </button>
        </div>
      </div>
      
      {showForm && <AppointmentForm doctorName={doctor.name} />}
    </div>
  );
};

export default DoctorProfilePage;