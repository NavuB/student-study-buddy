import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css'; // We'll create this CSS file

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will go here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Login Form</h2>
          <div className="auth-tabs">
            <Link to="/login" className="auth-tab active">Login</Link>
            <Link to="/signup" className="auth-tab">Signup</Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
          </div>

          <button type="submit" className="auth-submit-btn">Login</button>
        </form>

        <div className="auth-footer">
          <p>Not a member? <Link to="/signup">Sign up now</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;