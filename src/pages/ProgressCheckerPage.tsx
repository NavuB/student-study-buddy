import React, { useState } from 'react';
import './ProgressCheckerPage.css';

const ProgressCheckerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'subjects' | 'goals'>('overview');
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'all'>('week');

  // Sample data - will be replaced with real data later
  const studyData = {
    totalHours: 28.5,
    averageDaily: 2.3,
    consistency: 85,
    completedSessions: 24,
    subjects: [
      { name: 'Mathematics', hours: 12.5, progress: 75, color: '#667eea' },
      { name: 'Physics', hours: 8.2, progress: 60, color: '#764ba2' },
      { name: 'History', hours: 4.8, progress: 45, color: '#f093fb' },
      { name: 'English', hours: 3.0, progress: 30, color: '#4cc9f0' }
    ],
    weeklyData: [12, 19, 15, 17, 14, 16, 18],
    goals: [
      { id: 1, title: 'Complete Calculus Chapter', subject: 'Mathematics', target: 10, current: 8, unit: 'hours' },
      { id: 2, title: 'Physics Problem Sets', subject: 'Physics', target: 5, current: 3, unit: 'sets' },
      { id: 3, title: 'Historical Events Timeline', subject: 'History', target: 20, current: 15, unit: 'events' }
    ],
    achievements: [
      { id: 1, title: 'Consistent Learner', description: 'Studied for 7 consecutive days', icon: 'fas fa-fire', earned: true },
      { id: 2, title: 'Math Master', description: 'Completed 10+ hours of math', icon: 'fas fa-calculator', earned: true },
      { id: 3, title: 'Early Bird', description: 'Studied before 8 AM', icon: 'fas fa-sun', earned: false },
      { id: 4, title: 'Quiz Champion', description: 'Scored 90%+ on 5 quizzes', icon: 'fas fa-trophy', earned: false }
    ]
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h1>Study Progress</h1>
        <p>Track your learning journey and achievements</p>
      </div>

      {/* Time Range Selector */}
      <div className="time-selector">
        <button 
          className={timeRange === 'week' ? 'active' : ''}
          onClick={() => setTimeRange('week')}
        >
          This Week
        </button>
        <button 
          className={timeRange === 'month' ? 'active' : ''}
          onClick={() => setTimeRange('month')}
        >
          This Month
        </button>
        <button 
          className={timeRange === 'all' ? 'active' : ''}
          onClick={() => setTimeRange('all')}
        >
          All Time
        </button>
      </div>

      {/* Overview Stats */}
      <div className="overview-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-content">
            <h3>{studyData.totalHours}h</h3>
            <p>Total Study Time</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="stat-content">
            <h3>{studyData.averageDaily}h/day</h3>
            <p>Daily Average</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
          <div className="stat-content">
            <h3>{studyData.consistency}%</h3>
            <p>Consistency</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-content">
            <h3>{studyData.completedSessions}</h3>
            <p>Sessions Completed</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="progress-tabs">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          <i className="fas fa-chart-bar"></i>
          Overview
        </button>
        <button 
          className={activeTab === 'subjects' ? 'active' : ''}
          onClick={() => setActiveTab('subjects')}
        >
          <i className="fas fa-book"></i>
          Subjects
        </button>
        <button 
          className={activeTab === 'goals' ? 'active' : ''}
          onClick={() => setActiveTab('goals')}
        >
          <i className="fas fa-bullseye"></i>
          Goals & Achievements
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-content">
            <div className="chart-card">
              <h3>Weekly Study Hours</h3>
              <div className="bar-chart">
                {studyData.weeklyData.map((value, index) => (
                  <div key={index} className="bar-container">
                    <div 
                      className="bar"
                      style={{ height: `${(value / 20) * 100}%` }}
                    ></div>
                    <span className="bar-label">{value}h</span>
                    <span className="day-label">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="recommendations-card">
              <h3>Study Recommendations</h3>
              <div className="recommendation">
                <i className="fas fa-lightbulb"></i>
                <div>
                  <p>Focus more on History - you've spent less time on it compared to other subjects.</p>
                  <span>Based on your study patterns</span>
                </div>
              </div>
              <div className="recommendation">
                <i className="fas fa-lightbulb"></i>
                <div>
                  <p>Try studying in the morning - your concentration is highest between 8-10 AM.</p>
                  <span>Based on performance analysis</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subjects' && (
          <div className="subjects-content">
            <div className="subjects-grid">
              {studyData.subjects.map((subject, index) => (
                <div key={index} className="subject-progress-card">
                  <div className="subject-header">
                    <h4>{subject.name}</h4>
                    <span className="hours">{subject.hours}h</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${subject.progress}%`,
                        backgroundColor: subject.color
                      }}
                    ></div>
                  </div>
                  <div className="progress-info">
                    <span>{subject.progress}% progress</span>
                    <span>{subject.hours} hours</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="subject-comparison">
              <h3>Time Distribution</h3>
              <div className="pie-chart">
                {studyData.subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="pie-segment"
                    style={{
                      backgroundColor: subject.color,
                      transform: `rotate(${index * 90}deg)`,
                      clipPath: `inset(0 0 0 ${100 - subject.progress}%)`
                    }}
                  ></div>
                ))}
              </div>
              <div className="pie-legend">
                {studyData.subjects.map((subject, index) => (
                  <div key={index} className="legend-item">
                    <div 
                      className="color-dot"
                      style={{ backgroundColor: subject.color }}
                    ></div>
                    <span>{subject.name} ({subject.hours}h)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="goals-content">
            <div className="goals-section">
              <h3>Current Goals</h3>
              <div className="goals-grid">
                {studyData.goals.map((goal) => (
                  <div key={goal.id} className="goal-card">
                    <div className="goal-header">
                      <h4>{goal.title}</h4>
                      <span className="subject-tag">{goal.subject}</span>
                    </div>
                    <div className="goal-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${(goal.current / goal.target) * 100}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">
                        {goal.current}/{goal.target} {goal.unit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievements-section">
              <h3>Achievements</h3>
              <div className="achievements-grid">
                {studyData.achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}
                  >
                    <div className="achievement-icon">
                      <i className={achievement.icon}></i>
                    </div>
                    <div className="achievement-info">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                    <div className="achievement-status">
                      {achievement.earned ? (
                        <i className="fas fa-check-circle"></i>
                      ) : (
                        <i className="fas fa-lock"></i>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressCheckerPage;