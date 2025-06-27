import React from 'react';
import Icon from '../Icon/Icon.jsx';
import './InputField.css';

const InputField = ({ 
  type, 
  placeholder, 
  value, 
  onChange, 
  iconName, 
  showPassword, 
  onTogglePassword,
  error 
}) => {
  return (
    <div className="input-group">
      <div className="input-container">
        <Icon name={iconName} className="input-icon" />
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input-field ${error ? 'input-error' : ''}`}
        />
        {type === 'password' && (
          <button type="button" onClick={onTogglePassword} className="password-toggle">
            <Icon name={showPassword ? 'eyeOff' : 'eye'} className="toggle-icon" />
          </button>
        )}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default InputField;