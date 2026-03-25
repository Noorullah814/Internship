import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  disabled = false, 
  onClick 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} 
      btn-${size} 
      ${disabled ? 'btn-disabled' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;