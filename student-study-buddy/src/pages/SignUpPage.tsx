import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    gradeLevel: '',
    subjects: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const subjects = checked 
        ? [...prev.subjects, value] 
        : prev.subjects.filter(subject => subject !== value);
      return { ...prev, subjects };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup data:', formData);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Create Account</h2>
          <div className="auth-tabs">
            <Link to="/login" className="auth-tab">Login</Link>
            <Link to="/signup" className="auth-tab active">Signup</Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-email">Email Address:</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="signup-password">Password:</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="gradeLevel">Grade Level:</label>
            <select
              id="gradeLevel"
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              required
            >
              <option value="">Select your grade level</option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Subjects:</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="math"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                Mathematics
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="science"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                Science
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="history"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                History
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="english"
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
                English
              </label>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">Create Account</button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;