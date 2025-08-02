import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
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
    <Link to={`/doctor/${doctor.id}`} className="doctor-card">
      <img 
        src={doctor.profileImage} 
        alt={`Dr. ${doctor.name}`} 
      />
      <div>
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
        <span className={`status-badge ${getStatusClass(doctor.availabilityStatus)}`}>
          {doctor.availabilityStatus}
        </span>
      </div>
    </Link>
  );
};

export default DoctorCard;