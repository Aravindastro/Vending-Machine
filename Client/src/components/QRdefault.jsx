import React, { useState, useEffect, useRef } from 'react';

function QrCodeGenerator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const qrRef = useRef(null);

  useEffect(() => {
    // Load the QR code library from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.async = true;
    script.onload = () => {
      console.log("QR Code library loaded.");
    };
    document.body.appendChild(script);
  }, []);

  const generateQrCode = () => {
    if (window.QRCode) {
      qrRef.current.innerHTML = ''; // Clear any existing QR code
      const qrData = `Name: ${name}, Email: ${email}, Phone: ${phone}`; // Corrected template string
      new window.QRCode(qrRef.current, {
        text: qrData,
        width: 128,
        height: 128,
      });
    } else {
      alert('QR Code library not loaded. Try again later.');
    }
  };

  return (
    <div className="container">
      <div className="user-data">
        <h2>QR Code Generator</h2>
        <input
          type="text"
          className="user-name input"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="user-email input"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          className="user-phone input"
          placeholder="Enter your phone number..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="generate-qr-code" onClick={generateQrCode}>
          Generate QR Code
        </button>
      </div>
      <div className="qr-canvas">
        <h2>QR Code</h2>
        <div ref={qrRef} className="loading"></div>
      </div>
    </div>
  );
}

export default QrCodeGenerator;
