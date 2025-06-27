import React from 'react';
import './Button.css'; 

const Button = ({ type, children, onClick, disabled, variant = 'primary' }) => {
  const buttonClass = `button ${variant === 'primary' ? 'button-primary' : 'button-secondary'}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;