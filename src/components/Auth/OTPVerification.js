import React, { useState } from 'react';
import './OTPVerification.css';

const OTPVerification = ({ email, onVerify, onResend, onCancel }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      setOtp([...otp.map((d, idx) => (idx === index ? '' : d))]);

      // Focus previous input
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const otpString = otp.join('');
      if (otpString.length !== 6) {
        throw new Error('Please enter a valid 6-digit OTP');
      }

      await onVerify(otpString);
    } catch (error) {
      setError(error.message || 'Failed to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <h2>OTP Verification</h2>
      <p>Enter the 6-digit code sent to {email}</p>

      {error && <div className="otp-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="otp-input-group">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={e => handleChange(e.target, index)}
              onKeyDown={e => handleKeyDown(e, index)}
              className="otp-input"
              disabled={loading}
            />
          ))}
        </div>

        <div className="otp-actions">
          <button 
            type="submit" 
            className="otp-verify-button"
            disabled={loading}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <button 
            type="button" 
            className="otp-cancel-button"
            onClick={onCancel}
            disabled={loading}
          >
            Cancel
          </button>
        </div>

        <div className="otp-resend">
          <button 
            type="button" 
            className="otp-resend-button"
            onClick={onResend}
            disabled={loading}
          >
            Resend OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerification; 