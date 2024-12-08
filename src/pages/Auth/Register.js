import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    sport: ''
  });

  const sports = [
    "Basketball",
    "Cricket",
    "Football",
    "Volleyball",
    "Athletics",
    "Badminton",
    "Table Tennis",
    "Swimming",
    "Chess",
    "Carrom",
    "Kabaddi",
    "Tennis"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.role === 'coach') {
      navigate('/coach/signup', { state: { sport: formData.sport } });
    } else {
      console.log('Register data:', formData);
    }
  };

  return (
    <div className="auth-container">
      <Card title="Create Account">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="role-selector">
            <label>Register as:</label>
            <div className="role-options">
              <label className={`role-option ${formData.role === 'student' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleChange}
                />
                <span>Student</span>
              </label>
              <label className={`role-option ${formData.role === 'coach' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="role"
                  value="coach"
                  checked={formData.role === 'coach'}
                  onChange={handleChange}
                />
                <span>Coach</span>
              </label>
            </div>
          </div>

          {formData.role === 'coach' && (
            <div className="sport-selector">
              <label>Select Sport:</label>
              <select
                name="sport"
                value={formData.sport}
                onChange={handleChange}
                className="auth-select"
                required
              >
                <option value="">Choose a sport</option>
                {sports.map((sport, index) => (
                  <option key={index} value={sport}>{sport}</option>
                ))}
              </select>
            </div>
          )}

          {formData.role === 'student' ? (
            <>
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="primary">
                Register
              </Button>
            </>
          ) : (
            <div className="coach-signup-prompt">
              {formData.sport ? (
                <>
                  <p>Register as {formData.sport} Coach</p>
                  <p className="coach-requirements">Requirements:</p>
                  <ul className="requirements-list">
                    <li>Minimum 2 years of coaching experience</li>
                    <li>Valid coaching certification</li>
                    <li>Background in {formData.sport}</li>
                  </ul>
                </>
              ) : (
                <p>Please select a sport to continue registration</p>
              )}
              <Button 
                type="submit" 
                variant="primary"
                disabled={!formData.sport}
              >
                Continue to Coach Registration
              </Button>
            </div>
          )}

          <div className="auth-links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register; 