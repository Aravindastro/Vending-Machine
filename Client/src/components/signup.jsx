import React from 'react';
import './SignUp.css'; // Import the CSS for styling

function SignUp() {
  return (
    <div className="wrap">
      <div className="main">
        <h1>Create a New Account</h1>
        <form action="welcome.html"> {/* Redirects to welcome.html upon submission */}
          {/* Username */}
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

          {/* Email */}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          {/* Password */}
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          {/* Confirm Password */}
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          {/* Submit Button */}
          <button type="submit">Create Account</button>
        </form>

        {/* Back to Login Link */}
        <div className="new-account">
          <p>Already have an account? <a href="doctorlogin.jsx">Go back to Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
