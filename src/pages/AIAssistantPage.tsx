import React, { useState, useRef, useEffect } from 'react';
import './AIAssistantPage.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistantPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your Study Buddy AI assistant. How can I help you with your studies today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response (will be replaced with real API call later)
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputMessage),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('math') || lowerMessage.includes('calculus') || lowerMessage.includes('algebra')) {
      return "I'd be happy to help with mathematics! Could you specify which concept you're struggling with? For example, are you working on algebra, calculus, or geometry?";
    }
    
    if (lowerMessage.includes('physics') || lowerMessage.includes('newton') || lowerMessage.includes('force')) {
      return "Physics is fascinating! Newton's laws of motion are fundamental. The first law states that an object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.";
    }
    
    if (lowerMessage.includes('history') || lowerMessage.includes('historical')) {
      return "History helps us understand our past. Which time period or event are you studying? I can provide context, key dates, and important figures.";
    }
    
    if (lowerMessage.includes('english') || lowerMessage.includes('grammar') || lowerMessage.includes('writing')) {
      return "I can help with English studies! Whether it's grammar, essay writing, or literature analysis, just let me know what you need help with.";
    }
    
    if (lowerMessage.includes('explain') || lowerMessage.includes('what is') || lowerMessage.includes('how does')) {
      return "Based on your question, I'd recommend breaking this down into smaller concepts. Could you provide more specific details about what you'd like me to explain?";
    }
    
    return "Thank you for your question! I'm here to help you understand complex concepts, summarize information, or explain topics in a way that's easy to understand. Could you provide a bit more detail about what you're looking for?";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="ai-assistant-container">
      <div className="ai-header">
        <h1>AI Study Assistant</h1>
        <p>Get instant help with your studies - explanations, summaries, and answers</p>
      </div>

      <div className="ai-content">
        {/* Quick Questions Section */}
        <div className="quick-questions">
          <h3>Quick Questions</h3>
          <div className="quick-buttons">
            <button 
              onClick={() => handleQuickQuestion('Explain quantum physics basics')}
              className="quick-btn"
            >
              Explain quantum physics
            </button>
            <button 
              onClick={() => handleQuickQuestion('Help me with algebra homework')}
              className="quick-btn"
            >
              Algebra help
            </button>
            <button 
              onClick={() => handleQuickQuestion('Summarize World War 2')}
              className="quick-btn"
            >
              Summarize WW2
            </button>
            <button 
              onClick={() => handleQuickQuestion('What is photosynthesis?')}
              className="quick-btn"
            >
              Photosynthesis
            </button>
          </div>
        </div>

        {/* Chat Container */}
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}-message`}>
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{formatTime(message.timestamp)}</div>
                </div>
                <div className="message-avatar">
                  {message.sender === 'ai' ? '🤖' : '👤'}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message ai-message">
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="message-avatar">🤖</div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <div className="input-container">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask anything about your studies..."
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>

        {/* Features Section */}
        <div className="ai-features">
          <h3>What I can help you with:</h3>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <span>Explain concepts</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <span>Summarize notes</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-question-circle"></i>
              </div>
              <span>Answer questions</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <span>Study strategies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;