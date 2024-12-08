import React, { useState, useEffect } from 'react';
import './Account.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    rollNumber: '',
    sports: [],
    achievements: [],
    bio: '',
    socialLinks: {
      instagram: '',
      twitter: '',
      facebook: ''
    }
  });

  const [isEditing, setIsEditing] = useState(false);

  // Simulated profile data
  useEffect(() => {
    setProfile({
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.j@klu.ac.in',
      phone: '+91 9876543210',
      department: 'Computer Science',
      rollNumber: '2200030795',
      sports: [
        'Badminton',
        'Volleyball',
        'Athletics',
        'Yoga',
        'Basketball',
        'Table Tennis'
      ],
      achievements: [
        'State Level Women\'s Badminton Championship - Gold Medal',
        'Inter-University Volleyball Tournament - Best Player',
        'National Level Athletics Meet - 100m Sprint Silver Medal',
        'University Level Basketball Tournament - Team Captain',
        'District Level Table Tennis Championship - Winner'
      ],
      bio: 'Passionate athlete specializing in multiple sports. Captain of the university women\'s basketball team and state-level badminton player. Dedicated to promoting women\'s sports and inspiring young athletes.',
      socialLinks: {
        instagram: 'sarah_sports',
        twitter: 'sarah_athlete',
        facebook: 'sarah.sportstar'
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialLinkChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call to update profile
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <img src="https://via.placeholder.com/150" alt="Profile" />
          {isEditing && (
            <button className="change-avatar">
              <i className="fas fa-camera"></i>
            </button>
          )}
        </div>
        <div className="profile-title">
          <h1>{`${profile.firstName} ${profile.lastName}`}</h1>
          <p>{profile.department}</p>
          <button 
            className="edit-profile-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="info-grid">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={profile.department}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={profile.rollNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
            rows="4"
          ></textarea>
        </div>

        <div className="sports-section">
          <h3>Sports & Activities</h3>
          <div className="sports-activities">
            {profile.sports.map((sport, index) => (
              <div key={index} className="sport-tag">
                {sport}
                {isEditing && (
                  <button type="button" className="remove-sport">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            ))}
            {isEditing && (
              <button type="button" className="add-sport">
                <i className="fas fa-plus"></i> Add Sport
              </button>
            )}
          </div>
        </div>

        <div className="achievements-section">
          <h3>Achievements</h3>
          <div className="achievements-list">
            {profile.achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <i className="fas fa-trophy"></i>
                <span>{achievement}</span>
                {isEditing && (
                  <button type="button" className="remove-achievement">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
            ))}
            {isEditing && (
              <button type="button" className="add-achievement">
                <i className="fas fa-plus"></i> Add Achievement
              </button>
            )}
          </div>
        </div>

        <div className="social-links-section">
          <h3>Social Links</h3>
          <div className="social-links">
            <div className="form-group">
              <label>
                <i className="fab fa-instagram"></i> Instagram
              </label>
              <input
                type="text"
                name="instagram"
                value={profile.socialLinks.instagram}
                onChange={handleSocialLinkChange}
                disabled={!isEditing}
                placeholder="@username"
              />
            </div>
            <div className="form-group">
              <label>
                <i className="fab fa-twitter"></i> Twitter
              </label>
              <input
                type="text"
                name="twitter"
                value={profile.socialLinks.twitter}
                onChange={handleSocialLinkChange}
                disabled={!isEditing}
                placeholder="@username"
              />
            </div>
            <div className="form-group">
              <label>
                <i className="fab fa-facebook"></i> Facebook
              </label>
              <input
                type="text"
                name="facebook"
                value={profile.socialLinks.facebook}
                onChange={handleSocialLinkChange}
                disabled={!isEditing}
                placeholder="username"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="form-actions">
            <button type="submit" className="save-profile">
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile; 