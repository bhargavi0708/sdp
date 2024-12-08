import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/Card/Card';
import './LiveEvents.css';

const LiveEvents = () => {
  const { user, isLoggedIn } = useAuth();
  const [liveEvents] = useState([
    {
      id: 1,
      sport: "Basketball",
      teams: "CSE vs AIDS",
      score: "45 - 42",
      time: "Q3 5:30",
      venue: "Main Stadium",
      status: "Live",
      streamUrl: "https://stream.example.com/basketball"
    },
    {
      id: 2,
      sport: "Cricket",
      teams: "CS-IT vs ECE",
      score: "156/4",
      time: "18.2 Overs",
      venue: "Cricket Ground",
      status: "Live",
      streamUrl: "https://stream.example.com/cricket"
    },
    {
      id: 3,
      sport: "Volleyball",
      teams: "IoT vs EEE",
      score: "2 - 1",
      time: "Set 3",
      venue: "Indoor Court",
      status: "Live",
      streamUrl: "https://stream.example.com/volleyball"
    },
    {
      id: 4,
      sport: "Table Tennis",
      teams: "CSE vs ECE",
      score: "11 - 8",
      time: "Game 3",
      venue: "Sports Hall",
      status: "Live",
      streamUrl: "https://stream.example.com/tabletennis"
    },
    {
      id: 5,
      sport: "Badminton",
      teams: "EEE vs AIDS",
      score: "21 - 18",
      time: "Game 2",
      venue: "Indoor Court",
      status: "Live",
      streamUrl: "https://stream.example.com/badminton"
    }
  ]);

  const [selectedStream, setSelectedStream] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const chatEndRef = useRef(null);

  // Sample chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "John Doe",
      message: "Great match so far!",
      timestamp: "10:30"
    },
    {
      id: 2,
      user: "Jane Smith",
      message: "Amazing play by CSE team!",
      timestamp: "10:31"
    }
  ]);

  // Auto scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleWatchStream = (event) => {
    setSelectedStream(event);
    // Reset chat messages for new stream
    setMessages([]);
  };

  const closeStream = () => {
    setSelectedStream(null);
    setChatMessage('');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatMessage.trim() || !isLoggedIn) return;

    const newMessage = {
      id: messages.length + 1,
      user: user?.name || 'Anonymous',
      message: chatMessage.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setChatMessage('');
  };

  return (
    <div className="live-events-container">
      <h1>Live Matches</h1>
      <div className="events-list">
        {liveEvents.map(event => (
          <Card key={event.id}>
            <div className="live-event-card">
              <div className="event-header">
                <span className="sport-type">{event.sport}</span>
                <span className="live-indicator">● LIVE</span>
              </div>
              <div className="event-content">
                <h3>{event.teams}</h3>
                <div className="score-time">
                  <span className="score">{event.score}</span>
                  <span className="time">{event.time}</span>
                </div>
                <p className="event-venue">{event.venue}</p>
              </div>
              <button 
                className="watch-button"
                onClick={() => handleWatchStream(event)}
              >
                Watch Live Stream
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Stream Modal */}
      {selectedStream && (
        <div className="stream-modal-overlay">
          <div className="stream-modal">
            <div className="stream-header">
              <h2>{selectedStream.teams}</h2>
              <button className="close-stream" onClick={closeStream}>×</button>
            </div>
            <div className="stream-content">
              <div className="video-container">
                <div className="placeholder-stream">
                  <h3>Live Stream</h3>
                  <p>{selectedStream.sport} Match</p>
                  <p>{selectedStream.teams}</p>
                  <p>Score: {selectedStream.score}</p>
                </div>
              </div>
              <div className="stream-info">
                <div className="match-details">
                  <p><strong>Venue:</strong> {selectedStream.venue}</p>
                  <p><strong>Time:</strong> {selectedStream.time}</p>
                </div>
                <div className="live-chat">
                  <h4>Live Chat</h4>
                  <div className="chat-messages">
                    {messages.map(msg => (
                      <div 
                        key={msg.id} 
                        className={`chat-message ${msg.user === user?.name ? 'own-message' : ''}`}
                      >
                        <div className="message-header">
                          <span className="message-user">{msg.user}</span>
                          <span className="message-time">{msg.timestamp}</span>
                        </div>
                        <p className="message-content">{msg.message}</p>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                  <form onSubmit={handleSendMessage} className="chat-input">
                    {isLoggedIn ? (
                      <>
                        <input
                          type="text"
                          value={chatMessage}
                          onChange={(e) => setChatMessage(e.target.value)}
                          placeholder="Type a message..."
                        />
                        <button type="submit">Send</button>
                      </>
                    ) : (
                      <div className="chat-login-prompt">
                        Please login to participate in chat
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveEvents; 