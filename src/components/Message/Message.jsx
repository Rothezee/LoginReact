import React from 'react';
import Icon from '../Icon/Icon.jsx';
import './Message.css';

const Message = ({ type, text, onClose }) => {
  if (!text) return null;
  
  const messageClass = type === 'error' ? 'message-error' : 'message-success';
  const iconName = type === 'error' ? 'alertCircle' : 'checkCircle';
  
  return (
    <div className={`message ${messageClass}`}>
      <Icon name={iconName} className="message-icon" />
      <span className="message-text">{text}</span>
      {onClose && (
        <button onClick={onClose} className="message-close">
          <Icon name="close" className="close-icon" />
        </button>
      )}
    </div>
  );
};

export default Message;