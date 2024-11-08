import React, { useEffect, useState } from 'react';
import QRious from 'qrious';

const UPIPayment = () => {
  const [qrScanCompleted, setQrScanCompleted] = useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  // UPI Payment Link (Replace with your UPI ID and name)
  const upiLink = "upi://pay?pa=YOUR_UPI_ID@upi&pn=YOUR_NAME&am=100";

  useEffect(() => {
    // Generate QR Code for UPI Payment
    const qr = new QRious({
      element: document.getElementById('qr-code'),
      value: upiLink,
      size: 250
    });

    // Simulate QR code scanning as a default payment method after 10 seconds
    const qrScanTimer = setTimeout(() => {
      if (!qrScanCompleted) {
        alert("QR code scanned successfully. Proceeding with payment...");
        setQrScanCompleted(true);
        proceedToPayment();
      }
    }, 10000);

    return () => clearTimeout(qrScanTimer); // Clean up timer on component unmount
  }, [qrScanCompleted, upiLink]);

  const disableQR = () => {
    setQrScanCompleted(true);
  };

  const proceedToPayment = () => {
    if (selectedPaymentOption || qrScanCompleted) {
      alert("Proceeding to payment...");
      window.location.href = 'payment.html';
    } else {
      alert("Please select a payment option or scan the QR code.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", paddingTop: "20px", backgroundColor: "#f4f4f4" }}>
      <div style={{ width: "300px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", animation: "fadeIn 1s ease-in-out" }}>
        <h1 style={{ fontSize: "24px", color: "#333", textAlign: "center", marginBottom: "10px" }}>Scan to Pay</h1>
        <canvas id="qr-code" width="250" height="250"></canvas>
      </div>

      <p style={{ color: "#555", textAlign: "center", fontSize: "14px" }}>Or select a payment option below to proceed</p>

      <div style={{ width: "300px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)", animation: "fadeIn 1s ease-in-out" }}>
        <h2 style={{ fontSize: "24px", color: "#333", textAlign: "center", marginBottom: "10px" }}>How would you like to pay?</h2>
        
        <div>
          {['PhonePe', 'GPay', 'Credit or Debit Card', 'Click to Pay', 'PayPal'].map((option, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "15px", cursor: "pointer" }}>
              <input
                type="radio"
                name="payment"
                id={option.toLowerCase().replace(" ", "-")}
                onClick={() => {
                  disableQR();
                  setSelectedPaymentOption(option);
                }}
              />
              <label htmlFor={option.toLowerCase().replace(" ", "-")} style={{ marginLeft: "10px" }}>{option}</label>
            </div>
          ))}
        </div>

        <button
          style={{
            display: "inline-block",
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            width: "100%"
          }}
          onClick={proceedToPayment}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default UPIPayment;
