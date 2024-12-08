import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './CoachProfile.css';

const CoachProfile = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    sport: user?.sport || '',
    experience: user?.experience || '',
    qualifications: user?.qualifications?.join('\n') || '',
    phone: user?.phone || '',
    achievements: user?.achievements || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const updatedData = {
        ...formData,
        qualifications: formData.qualifications.split('\n').filter(q => q.trim())
      };
      
      await updateProfile(updatedData);
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update profile. Please try again.');
      console.error('Update error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coach-profile-container">
      <div className="profile-header">
        <h1>Coach Profile</h1>
        <button 
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
          disabled={loading}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="profile-content">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="edit-form">
            <div className="profile-section">
              <h2>Personal Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Sport:</label>
                  <select
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                  >
                    <option value="">Select a sport</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Athletics">Athletics</option>
                    <option value="Table Tennis">Table Tennis</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Tennis">Tennis</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Experience (years):</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h2>Qualifications</h2>
              <div className="form-group">
                <textarea
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                  placeholder="Enter qualifications (one per line)"
                  rows="4"
                />
              </div>
            </div>

            <div className="profile-section">
              <h2>Achievements</h2>
              <div className="form-group">
                <textarea
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  placeholder="Enter your achievements"
                  rows="4"
                />
              </div>
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="save-button"
                disabled={loading}
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button 
                type="button" 
                className="cancel-button"
                onClick={() => setIsEditing(false)}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="profile-section">
              <h2>Personal Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>Name:</label>
                  <span>{user?.name || 'Not provided'}</span>
                </div>
                <div className="info-item">
                  <label>Email:</label>
                  <span>{user?.email || 'Not provided'}</span>
                </div>
                <div className="info-item">
                  <label>Phone:</label>
                  <span>{user?.phone || 'Not provided'}</span>
                </div>
                <div className="info-item">
                  <label>Sport:</label>
                  <span>{user?.sport || 'Not provided'}</span>
                </div>
                <div className="info-item">
                  <label>Experience:</label>
                  <span>{user?.experience || 'Not provided'} years</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h2>Qualifications</h2>
              <div className="qualifications-list">
                {user?.qualifications?.map((qual, index) => (
                  <div key={index} className="qualification-item">
                    {qual}
                  </div>
                )) || <p>No qualifications added</p>}
              </div>
            </div>

            <div className="profile-section">
              <h2>Achievements</h2>
              <div className="achievements-content">
                <p>{user?.achievements || 'No achievements added yet'}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoachProfile; 