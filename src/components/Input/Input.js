import React from 'react';
import './Input.css';

const Input = ({ 
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false 
}) => {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? 'error' : ''}`}
        required={required}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input; 