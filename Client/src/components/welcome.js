import React from 'react';
import './style.css';

const Welcome = () => {
  return (
    <div className="wrap">
      <div className="main">
        <h1>Welcome!</h1>
        <p>Your account has been created successfully.</p>
        <p><a href="login.html">Click here to log in</a> with your new account.</p>
      </div>
    </div>
  );
};

export default Welcome;
