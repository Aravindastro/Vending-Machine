import React, { useState } from 'react';
import './style.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log(formData);
  };

  return (
    <div className="wrap">
      <div className="main">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <span
              id="togglePassword"
              className="toggle-password"
              onClick={togglePassword}
            >
              {passwordVisible ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className="new-account">
          <p>Don't have an account? <a href="signup.html">Create a New Account</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
