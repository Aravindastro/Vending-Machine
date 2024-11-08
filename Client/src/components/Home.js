import React from 'react';
import './style.css';

const Home = () => {
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
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>10/11/2024 - 10:30 AM</td>
            <td>Fever & Cough</td>
            <td>
              <div className="dropdown">
                <button className="dropbtn">Select Type</button>
                <div className="dropdown-content">
                  <a href="#">OP</a>
                  <a href="#">Emergency</a>
                  <a href="#">Check-in</a>
                  <a href="#">Bought Medicine in VM</a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
