import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // We'll create this CSS file

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="logo-section">
          <div className="logo-graphic">
            <i className="fas fa-graduation-cap"></i>
            <div className="hand-graphic">👋</div>
          </div>
          <h1>STUDYBUDDY</h1>
          <h2>ACADEMIC HELPER</h2>
        </div>
        
        <div className="auth-buttons">
          <Link to="/login" className="auth-btn login-btn">LOGIN</Link>
          <Link to="/signup" className="auth-btn signup-btn">SIGN UP</Link>
        </div>
        <div className="welcome-footer">
          <p>Your AI-powered study assistant</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;