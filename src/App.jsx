import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import './App.css'; // Import the new CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;