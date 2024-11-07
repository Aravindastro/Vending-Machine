import React, { useState } from 'react';
import './PatientRecords.css'; // Import CSS file

function PatientRecords() {
  // Sample data for patients
  const patients = [
    {
      id: 1,
      name: 'John Doe',
      dateTime: '10/11/2024 - 10:30 AM',
      details: 'Fever & Cough',
      type: ''
    },
    // You can add more patients here
  ];

  // Function to handle type selection from the dropdown
  const handleTypeSelect = (patientId, type) => {
    // Update the patient type based on selection
    console.log(`Patient ID: ${patientId}, Selected Type: ${type}`);
  };

  return (
    <div className="main">
      <h1>Patient Records</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Patients Diagnosed</th>
            <th>Day & Time</th>
            <th>Details</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={patient.id}>
              <td>{index + 1}</td>
              <td>{patient.name}</td>
              <td>{patient.dateTime}</td>
              <td>{patient.details}</td>
              <td>
                <div className="dropdown">
                  <button className="dropbtn">Select Type</button>
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleTypeSelect(patient.id, 'OP')}>OP</a>
                    <a href="#" onClick={() => handleTypeSelect(patient.id, 'Emergency')}>Emergency</a>
                    <a href="#" onClick={() => handleTypeSelect(patient.id, 'Check-in')}>Check-in</a>
                    <a href="#" onClick={() => handleTypeSelect(patient.id, 'Bought Medicine in VM')}>Bought Medicine in VM</a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientRecords;
w