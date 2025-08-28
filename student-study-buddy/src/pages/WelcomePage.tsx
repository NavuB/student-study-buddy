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

        // In src/pages/WelcomePage.tsx, add this section after the auth-buttons:
<div className="dev-links">
  <p style={{ color: 'rgba(255,255,255,0.7)', margin: '30px 0 10px' }}>Development Access:</p>
  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
    <Link to="/dashboard" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
      View Dashboard
    </Link>
    <Link to="/planner" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
      View Planner
    </Link>
  </div>
</div>
        
        <div className="welcome-footer">
          <p>Your AI-powered study assistant</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;