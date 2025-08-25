import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, <span className="username">Yeabsira!</span></h1>
          <p>Here's your study overview for today</p>
        </div>
        <div className="student-animation">
          <div className="animated-student">
            <i className="fas fa-user-graduate"></i>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-tasks"></i>
          </div>
          <div className="stat-content">
            <h3>2</h3>
            <p>Today's Tasks</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chart-pie"></i>
          </div>
          <div className="stat-content">
            <h3>75%</h3>
            <p>Weekly Progress</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-robot"></i>
          </div>
          <div className="stat-content">
            <h3>Physics</h3>
            <p>Last AI Query</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions-section">
        <h2>Quick Actions</h2>
        <div className="quick-actions-grid">
          <Link to="/planner" className="action-card">
            <div className="action-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <span>Study Planner</span>
          </Link>

          <Link to="/ai-assistant" className="action-card">
            <div className="action-icon">
              <i className="fas fa-robot"></i>
            </div>
            <span>AI Assistant</span>
          </Link>

          <Link to="/progress" className="action-card">
            <div className="action-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <span>Progress Checker</span>
          </Link>

          <Link to="/quiz" className="action-card">
            <div className="action-icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <span>Take Quiz</span>
          </Link>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="motivation-section">
        <div className="motivation-card">
          <i className="fas fa-quote-left"></i>
          <p>"The beautiful thing about learning is that no one can take it away from you."</p>
          <span>- B.B. King</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon completed">
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="activity-content">
              <p>Completed Mathematics quiz</p>
              <span>Scored 85% • 2 hours ago</span>
            </div>
          </div>
          
          <div className="activity-item">
            <div className="activity-icon study">
              <i className="fas fa-book"></i>
            </div>
            <div className="activity-content">
              <p>Studied Physics concepts</p>
              <span>45 minutes • This morning</span>
            </div>
          </div>
          
          <div className="activity-item">
            <div className="activity-icon ai">
              <i className="fas fa-robot"></i>
            </div>
            <div className="activity-content">
              <p>Asked AI about Newton's Laws</p>
              <span>30 minutes ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;