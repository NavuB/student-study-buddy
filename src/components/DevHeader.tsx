import React from 'react';
import { Link } from 'react-router-dom';

const DevHeader: React.FC = () => {
  return (
    <div style={{
      background: '#333',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap'
    }}>
      <span style={{ color: 'white', marginRight: '10px' }}>Dev Navigation:</span>
      <Link to="/" style={{ color: '#ffd166', textDecoration: 'none' }}>Home</Link>
      <Link to="/login" style={{ color: '#ffd166', textDecoration: 'none' }}>Login</Link>
      <Link to="/signup" style={{ color: '#ffd166', textDecoration: 'none' }}>Signup</Link>
      <Link to="/dashboard" style={{ color: '#ffd166', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/planner" style={{ color: '#ffd166', textDecoration: 'none' }}>Planner</Link>
      <Link to="/ai-assistant" style={{ color: '#ffd166', textDecoration: 'none' }}>AI Assistant</Link>
      <Link to="/quiz" style={{ color: '#ffd166', textDecoration: 'none' }}>Quiz</Link>
      <Link to="/progress" style={{ color: '#ffd166', textDecoration: 'none' }}>Progress</Link>
    </div>
  );
};

export default DevHeader;