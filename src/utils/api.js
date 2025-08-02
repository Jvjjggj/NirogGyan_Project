import doctors from '../data/doctors.json';

// Simulate an API call to get all doctors with a delay
export const fetchDoctors = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(doctors);
    }, 500); // 500ms delay to simulate network latency
  });
};

// Simulate an API call to get a single doctor by ID
export const fetchDoctorById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const doctor = doctors.find(doc => doc.id === parseInt(id));
      resolve(doctor);
    }, 500);
  });
};