import React from 'react';
import './Button.css';

const Button = ({ children, onClick, variant = 'primary', type = 'button', disabled = false }) => {
  return (
    <button 
      className={`button ${variant}`} 
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 