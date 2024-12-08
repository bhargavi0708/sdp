import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import OTPVerification from '../../components/Auth/OTPVerification';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // First step: Send login credentials and get OTP
      // This would typically make an API call to send OTP
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setShowOTP(true);
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPVerify = async (otp) => {
    try {
      // Verify OTP and complete login
      // This would typically make an API call to verify OTP
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      await login(email, password);
      
      // Redirect to intended page or home
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
    } catch (error) {
      throw new Error('Invalid OTP. Please try again.');
    }
  };

  const handleOTPResend = async () => {
    try {
      // Resend OTP
      // This would typically make an API call to resend OTP
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      alert('New OTP has been sent to your email');
    } catch (error) {
      setError('Failed to resend OTP. Please try again.');
    }
  };

  if (showOTP) {
    return (
      <OTPVerification
        email={email}
        onVerify={handleOTPVerify}
        onResend={handleOTPResend}
        onCancel={() => setShowOTP(false)}
      />
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to KL Sports Hub</h2>
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Login'}
          </button>
        </form>

        <div className="auth-links">
          <div className="register-options">
            <p>Don't have an account?</p>
            <div className="register-buttons">
              <Link to="/register/student" className="register-button student">
                Register as Student
              </Link>
              <Link to="/register/coach" className="register-button coach">
                Register as Coach
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 