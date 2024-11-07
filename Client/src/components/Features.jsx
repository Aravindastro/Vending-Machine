// src/components/Features.jsx
import React from "react";

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <h3>Blockchain Security</h3>
            <p>Immutable ledger records every transaction, ensuring tamper-proof medication dispensation.</p>
          </div>
          <div className="feature">
            <i className="fas fa-qrcode"></i>
            <h3>QR Code Prescription Scanning</h3>
            <p>Scan prescriptions directly, reducing errors and automating the medication process.</p>
          </div>
          <div className="feature">
            <i className="fas fa-prescription-bottle-alt"></i>
            <h3>Precise Dosage Control</h3>
            <p>Automated dosage dispensation based on verified prescription data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
