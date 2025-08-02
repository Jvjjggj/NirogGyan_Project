import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import { fetchDoctors } from '../utils/api';

const HomePage = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchDoctors().then(data => {
      setAllDoctors(data);
      setFilteredDoctors(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const results = allDoctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(results);
  }, [searchTerm, allDoctors]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) {
    return <div className="loading-message">Loading doctors...</div>;
  }

  return (
    <div className="container">
      <h1 className="homepage-title">Find a Doctor</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p className="no-results">No doctors found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;