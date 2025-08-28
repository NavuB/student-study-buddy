import React, { useState } from 'react';
import './QuizPage.css';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizPage: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  const sampleQuestions: Record<string, Question[]> = {
    mathematics: [
      {
        id: 1,
        question: "What is the value of π (pi) approximately?",
        options: ["3.14", "2.71", "1.62", "4.13"],
        correctAnswer: 0,
        explanation: "π (pi) is approximately 3.14, which is the ratio of a circle's circumference to its diameter."
      },
      {
        id: 2,
        question: "Solve for x: 2x + 5 = 15",
        options: ["x = 5", "x = 10", "x = 7.5", "x = 5.5"],
        correctAnswer: 0,
        explanation: "2x + 5 = 15 → 2x = 10 → x = 5"
      },
      {
        id: 3,
        question: "What is the area of a circle with radius 4 units?",
        options: ["16π", "8π", "12π", "4π"],
        correctAnswer: 0,
        explanation: "Area of circle = πr² = π(4)² = 16π"
      }
    ],
    physics: [
      {
        id: 1,
        question: "What is the unit of force in the International System of Units?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswer: 0,
        explanation: "The newton (symbol: N) is the unit of force in the International System of Units."
      },
      {
        id: 2,
        question: "Which law states that every action has an equal and opposite reaction?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
        correctAnswer: 2,
        explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction."
      }
    ],
    history: [
      {
        id: 1,
        question: "In which year did World War II end?",
        options: ["1945", "1918", "1939", "1941"],
        correctAnswer: 0,
        explanation: "World War II ended in 1945 with the surrender of Germany in May and Japan in September."
      }
    ]
  };

  const subjects = [
    { id: 'mathematics', name: 'Mathematics', icon: 'fas fa-calculator' },
    { id: 'physics', name: 'Physics', icon: 'fas fa-atom' },
    { id: 'history', name: 'History', icon: 'fas fa-landmark' },
    { id: 'biology', name: 'Biology', icon: 'fas fa-dna' },
    { id: 'chemistry', name: 'Chemistry', icon: 'fas fa-flask' },
    { id: 'english', name: 'English', icon: 'fas fa-book' }
  ];

  const startQuiz = (subject: string) => {
    setSelectedSubject(subject);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setSelectedSubject('');
  };

  const currentQuestions = selectedSubject ? sampleQuestions[selectedSubject] || [] : [];

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Knowledge Quiz</h1>
          <p>Test your understanding and track your progress</p>
        </div>

        <div className="subject-selection">
          <h2>Choose a Subject</h2>
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="subject-card"
                onClick={() => startQuiz(subject.id)}
              >
                <div className="subject-icon">
                  <i className={subject.icon}></i>
                </div>
                <h3>{subject.name}</h3>
                <p>{sampleQuestions[subject.id]?.length || 5} questions</p>
              </div>
            ))}
          </div>
        </div>

        <div className="quiz-stats">
          <div className="stat-card">
            <i className="fas fa-check-circle"></i>
            <h3>85%</h3>
            <p>Average Score</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-clock"></i>
            <h3>5 min</h3>
            <p>Average Time</p>
          </div>
          <div className="stat-card">
            <i className="fas fa-trophy"></i>
            <h3>12</h3>
            <p>Quizzes Completed</p>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-section">
          <div className="results-card">
            <div className="results-header">
              <i className="fas fa-trophy"></i>
              <h2>Quiz Completed!</h2>
            </div>
            
            <div className="score-display">
              <div className="score-circle">
                <span className="score-percent">
                  {Math.round((score / currentQuestions.length) * 100)}%
                </span>
                <span className="score-text">Score</span>
              </div>
              
              <div className="score-details">
                <p><strong>{score}</strong> out of <strong>{currentQuestions.length}</strong> correct</p>
                <div className="score-breakdown">
                  <span className="correct">{score} Correct</span>
                  <span className="incorrect">{currentQuestions.length - score} Incorrect</span>
                </div>
              </div>
            </div>

            <div className="results-actions">
              <button onClick={handleRestartQuiz} className="retry-btn">
                <i className="fas fa-redo"></i>
                Try Another Quiz
              </button>
              <button onClick={handleRestartQuiz} className="home-btn">
                <i className="fas fa-home"></i>
                Quiz Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = currentQuestions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
          ></div>
        </div>
        <span className="progress-text">
          Question {currentQuestion + 1} of {currentQuestions.length}
        </span>
      </div>

      <div className="question-section">
        <h2 className="question-text">{question.question}</h2>
        
        <div className="options-grid">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`option-card ${selectedAnswer === index ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="option-indicator">
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <span className="option-text">{option}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="quiz-actions">
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="next-btn"
        >
          {currentQuestion === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default QuizPage;