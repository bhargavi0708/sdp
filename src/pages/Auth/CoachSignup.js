import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useAuth } from '../../context/AuthContext';
import './Auth.css';

const CoachSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const selectedSport = location.state?.sport || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    sport: selectedSport,
    experience: '',
    certifications: '',
    department: '',
    achievements: '',
    specialization: '',
    availability: []
  });

  const [error, setError] = useState('');

  const departments = ["CSE", "CS-IT", "ECE", "EEE", "AIDS", "IoT"];
  const timeSlots = [
    "Morning (6 AM - 9 AM)",
    "Evening (4 PM - 7 PM)",
    "Weekend (Flexible)"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedAvailability = checked 
        ? [...formData.availability, value]
        : formData.availability.filter(slot => slot !== value);
      
      setFormData(prev => ({
        ...prev,
        availability: updatedAvailability
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (formData.experience < 2) {
      setError('Minimum 2 years of experience required');
      return;
    }

    if (formData.availability.length === 0) {
      setError('Please select at least one availability slot');
      return;
    }

    // Simulate successful registration
    login({
      ...formData,
      role: 'coach'
    });
    navigate('/account/profile');
  };

  return (
    <div className="auth-container">
      <Card title={`${selectedSport} Coach Registration`}>
        <form onSubmit={handleSubmit} className="auth-form">
          {error && <div className="error-alert">{error}</div>}
          
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

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="form-group">
            <label>Department Assignment</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="auth-select"
              required
            >
              <option value="">Select Department</option>
              {departments.map((dept, index) => (
                <option key={index} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <Input
            label="Years of Experience"
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            min="2"
          />

          <Input
            label="Certifications"
            type="text"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
            placeholder="List your relevant certifications"
            required
          />

          <Input
            label="Achievements"
            type="text"
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            placeholder="Notable achievements in coaching"
          />

          <Input
            label="Specialization Details"
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            placeholder={`Specific expertise in ${selectedSport}`}
            required
          />

          <div className="form-group">
            <label>Availability</label>
            <div className="availability-options">
              {timeSlots.map((slot, index) => (
                <label key={index} className="availability-option">
                  <input
                    type="checkbox"
                    name="availability"
                    value={slot}
                    checked={formData.availability.includes(slot)}
                    onChange={handleChange}
                  />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </div>

          <Button type="submit" variant="primary">
            Register as Coach
          </Button>

          <div className="auth-links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CoachSignup; 