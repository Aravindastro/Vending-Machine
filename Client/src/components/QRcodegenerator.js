import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './style.css';

const QRCodeGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const qrData = `Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`;

  return (
    <div className="container">
      <div className="user-data">
        <h2>QR Code Generator</h2>
        <input
          type="text"
          className="user-name input"
          placeholder="Enter your name..."
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="user-email input"
          placeholder="Enter your email..."
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="user-phone input"
          placeholder="Enter your phone number..."
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button className="generate-qr-code">
          Generate QR Code
        </button>
      </div>
      <div className="qr-canvas">
        <h2>QR Code</h2>
        <div id="qrcode" className="loading">
          <QRCode value={qrData} size={150} />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
