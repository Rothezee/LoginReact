import React, { useState } from 'react';
import Icon from '../Icon/Icon.jsx';
import Message from '../Message/Message.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (formData) => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    // Simulación de llamada a API
    setTimeout(() => {
      console.log('Login:', formData);
      setMessage({ 
        type: 'success', 
        text: `¡Bienvenido! Has iniciado sesión correctamente.` 
      });
      setIsLoading(false);
    }, 1500);
  };
  const handleRegister = async (formData) => {
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    // Simulación de llamada a API
    setTimeout(() => {
      console.log('Register:', formData);
      setMessage({ 
        type: 'success', 
        text: `¡Cuenta creada exitosamente! Bienvenido ${formData.name}.` 
      });
      setIsLoading(false);
    }, 1500);
  };

  const clearMessage = () => {
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-avatar">
            <Icon name="user" className="avatar-icon" />
          </div>
          <h1 className="login-title">
            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h1>
          <p className="login-subtitle">
            {isLogin 
              ? 'Accede a tu cuenta para continuar' 
              : 'Únete a nuestra plataforma'
            }
          </p>
        </div>

        <Message 
          type={message.type} 
          text={message.text} 
          onClose={clearMessage} 
        />

        {isLoading && (
          <div className="loading-container">
            <Icon name="loading" className="loading-spinner" />
          </div>
        )}

        {isLogin ? (
          <LoginForm
            onSubmit={handleLogin}
            onSwitchToRegister={() => setIsLogin(false)}
          />
        ) : (
          <RegisterForm
            onSubmit={handleRegister}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}

        <div className="divider-container">
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">
              <span>O continúa con</span>
            </div>
          </div>
          
          <div className="social-buttons">
            <button className="social-button">
              <Icon name="google" className="social-icon" />
              <span>Google</span>
            </button>
            <button className="social-button">
              <Icon name="facebook" className="social-icon" />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;