import React from 'react';
import './Account.css';

const MyRegistrations = () => {
  const registrations = [
    {
      id: 1,
      eventType: 'Tournament',
      name: 'Inter-Department Cricket Championship',
      date: '2024-03-15',
      status: 'Approved',
      role: 'Player',
      team: 'CSE Warriors',
      venue: 'KLU Main Ground',
      time: '2:00 PM'
    },
    {
      id: 2,
      eventType: 'Training',
      name: 'Basketball Training Camp',
      date: '2024-03-20',
      status: 'Pending',
      role: 'Participant',
      venue: 'Indoor Court 1',
      time: '4:30 PM'
    },
    {
      id: 3,
      eventType: 'Match',
      name: 'Friendly Football Match',
      date: '2024-03-18',
      status: 'Approved',
      role: 'Player',
      team: 'CSE United',
      venue: 'KLU Football Ground',
      time: '5:00 PM'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return '#28a745';
      case 'pending':
        return '#ffc107';
      case 'rejected':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="registrations-container">
      <h1 className="section-title">My Registrations</h1>
      
      <div className="registrations-grid">
        {registrations.map(registration => (
          <div key={registration.id} className="registration-card">
            <div className="registration-header">
              <span className="event-type-tag">{registration.eventType}</span>
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(registration.status) }}
              >
                {registration.status}
              </span>
            </div>

            <div className="registration-content">
              <h3>{registration.name}</h3>
              
              <div className="registration-details">
                <div className="detail-item">
                  <i className="far fa-calendar"></i>
                  <span>{formatDate(registration.date)}</span>
                </div>
                
                <div className="detail-item">
                  <i className="far fa-clock"></i>
                  <span>{registration.time}</span>
                </div>
                
                <div className="detail-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{registration.venue}</span>
                </div>
                
                <div className="detail-item">
                  <i className="fas fa-user-tag"></i>
                  <span>{registration.role}</span>
                </div>
                
                {registration.team && (
                  <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <span>{registration.team}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="registration-actions">
              <button className="btn-view-details">
                View Details
                <i className="fas fa-chevron-right"></i>
              </button>
              {registration.status === 'Pending' && (
                <button className="btn-cancel">
                  Cancel Registration
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRegistrations; 