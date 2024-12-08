import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I am KLSH Bot, your sports assistant. How can I help you today?'
    },
    {
      type: 'bot',
      content: 'You can ask me about sports facilities, tournaments, schedules, or registration!'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    const botResponse = await getBotResponse(inputMessage);
    setMessages(prev => [...prev, {
      type: 'bot',
      content: botResponse
    }]);
  };

  const getBotResponse = async (message) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const lowerMessage = message.toLowerCase();
    
    // Simple response logic
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! How can I assist you with sports activities today?";
    }
    else if (lowerMessage.includes('sport')) {
      return "We offer various sports including Cricket, Basketball, Football, Volleyball, and more. Which sport interests you?";
    }
    else if (lowerMessage.includes('tournament') || lowerMessage.includes('event')) {
      return "We have several upcoming tournaments. You can check the tournaments page for registration and schedules.";
    }
    else if (lowerMessage.includes('register') || lowerMessage.includes('sign up')) {
      return "To register for tournaments or events, please visit the specific tournament page and click on the 'Register' button.";
    }
    else if (lowerMessage.includes('schedule') || lowerMessage.includes('timing')) {
      return "You can find all event schedules on our Live Matches page. Would you like me to guide you there?";
    }
    else if (lowerMessage.includes('coach') || lowerMessage.includes('training')) {
      return "We have experienced coaches for all sports. You can register as a student and request coaching sessions.";
    }
    else if (lowerMessage.includes('facility') || lowerMessage.includes('ground')) {
      return "Our facilities include cricket grounds, basketball courts, football field, and indoor sports complex.";
    }
    else if (lowerMessage.includes('thank')) {
      return "You're welcome! Feel free to ask if you need anything else.";
    }
    else {
      return "I'm not sure about that. Could you please rephrase or ask something about our sports, tournaments, or facilities?";
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>KLSH Bot</h3>
            <p>Your 24/7 Sports Assistant</p>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type}`}
              >
                {message.type === 'bot' && (
                  <div className="bot-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                )}
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask KLSH Bot anything..."
            />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 