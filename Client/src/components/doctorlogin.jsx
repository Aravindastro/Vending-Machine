import React from 'react';
import './DoctorLogin.css'; // Import the CSS for styling

function DoctorLogin() {
  return (
    <div className="wrap">
      <div className="main">
        <h1>Login</h1>
        <form action="home.html"> {/* This directs the form to "home.html" upon submission */}
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Submit</button>
        </form>
        
        {/* Create a New Account Link */}
        <div className="new-account">
          <p>Don't have an account? <a href="signup.jsx">Create a New Account</a></p>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
