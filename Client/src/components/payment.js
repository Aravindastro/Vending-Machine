import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const closePage = () => {
    window.close();
  };

  return (
    <div className="success-container">
      <h2>Payment Successful!</h2>
      <p>Your payment of Rs. 3000 has been received.</p>
      <div className="payment-details">
        <p>Order ID: IC-1234, IC-5678</p>
        <p>Transaction ID: 12345</p>
        <p>Total Amount: ₹ 5000</p>
        <p>Paid via Incentives: ₹ 1000</p>
        <p>Paid via Online Transaction: ₹ 3000</p>
      </div>
      <button className="ok-button" onClick={closePage}>OK</button>
    </div>
  );
};

export default PaymentSuccess;
