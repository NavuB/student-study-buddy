import React, { useState } from 'react';
import './StudyPlannerPage.css';

const StudyPlannerPage: React.FC = () => {
  const [sessions, setSessions] = useState([
    { id: 1, subject: 'Mathematics', date: '2024-01-15', time: '14:00', duration: '2 hours', topic: 'Algebra Basics' },
    { id: 2, subject: 'Physics', date: '2024-01-16', time: '10:00', duration: '1.5 hours', topic: 'Newton\'s Laws' }
  ]);

  const [newSession, setNewSession] = useState({
    subject: '',
    date: '',
    time: '',
    duration: '1 hour',
    topic: ''
  });

  const handleAddSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSession.subject && newSession.date && newSession.time) {
      setSessions([...sessions, { ...newSession, id: Date.now() }]);
      setNewSession({ subject: '', date: '', time: '', duration: '1 hour', topic: '' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewSession(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="planner-container">
      <div className="planner-header">
        <h1>Study Planner</h1>
        <p>Plan your study sessions and track your schedule</p>
      </div>

      <div className="planner-content">
        {/* Add New Session Form */}
        <div className="add-session-card">
          <h2>Add New Study Session</h2>
          <form onSubmit={handleAddSession} className="session-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select 
                  id="subject" 
                  name="subject" 
                  value={newSession.subject} 
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="History">History</option>
                  <option value="English">English</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={newSession.date} 
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="time">Time *</label>
                <input 
                  type="time" 
                  id="time" 
                  name="time" 
                  value={newSession.time} 
                  onChange={handleInputChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Duration</label>
                <select 
                  id="duration" 
                  name="duration" 
                  value={newSession.duration} 
                  onChange={handleInputChange}
                >
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="1.5 hours">1.5 hours</option>
                  <option value="2 hours">2 hours</option>
                  <option value="3 hours">3 hours</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="topic">Topic/Description</label>
              <input 
                type="text" 
                id="topic" 
                name="topic" 
                value={newSession.topic} 
                onChange={handleInputChange}
                placeholder="What will you study?" 
              />
            </div>

            <button type="submit" className="add-session-btn">
              <i className="fas fa-plus"></i> Add Session
            </button>
          </form>
        </div>

        {/* Current Sessions List */}
        <div className="sessions-list">
          <h2>Upcoming Study Sessions</h2>
          {sessions.length === 0 ? (
            <div className="empty-state">
              <i className="fas fa-calendar-plus"></i>
              <p>No study sessions planned yet</p>
              <span>Add your first session using the form above</span>
            </div>
          ) : (
            <div className="sessions-grid">
              {sessions.map(session => (
                <div key={session.id} className="session-card">
                  <div className="session-header">
                    <h3>{session.subject}</h3>
                    <span className="session-duration">{session.duration}</span>
                  </div>
                  
                  <div className="session-details">
                    <div className="session-time">
                      <i className="fas fa-calendar"></i>
                      <span>{new Date(session.date).toLocaleDateString()}</span>
                    </div>
                    <div className="session-time">
                      <i className="fas fa-clock"></i>
                      <span>{session.time}</span>
                    </div>
                    {session.topic && (
                      <div className="session-topic">
                        <i className="fas fa-book"></i>
                        <span>{session.topic}</span>
                      </div>
                    )}
                  </div>

                  <div className="session-actions">
                    <button className="action-btn edit-btn">
                      <i className="fas fa-edit"></i>
                    </button>
                    <button className="action-btn delete-btn">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyPlannerPage;