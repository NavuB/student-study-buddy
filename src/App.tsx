import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DevHeader from './components/DevHeader';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import StudyPlannerPage from './pages/StudyPlannerPage';
import AIAssistantPage from './pages/AIAssistantPage';
import QuizPage from './pages/QuizPage';
import ProgressCheckerPage from './pages/ProgressCheckerPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add Dev Header for navigation */}
        <DevHeader />
        
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/planner" element={<StudyPlannerPage />} />
          <Route path="/ai-assistant" element={<AIAssistantPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/progress" element={<ProgressCheckerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
