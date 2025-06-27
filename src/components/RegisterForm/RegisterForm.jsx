import React, { useState } from 'react';
import InputField from '../InputField/InputField.jsx';
import Button from '../Button/Button.jsx';
import './RegisterForm.css';

const RegisterForm = ({ onSubmit, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    else if (formData.password.length < 6) newErrors.password = 'Mínimo 6 caracteres';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="form-container">
      <InputField
        type="text"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={e => handleChange('name', e.target.value)}
        iconName="user"
        error={errors.name}
      />
      <InputField
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={e => handleChange('email', e.target.value)}
        iconName="mail"
        error={errors.email}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={e => handleChange('password', e.target.value)}
        iconName="lock"
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword((prev) => !prev)}
        error={errors.password}
      />
      <InputField
        type="password"
        placeholder="Confirmar contraseña"
        value={formData.confirmPassword}
        onChange={e => handleChange('confirmPassword', e.target.value)}
        iconName="lock"
        showPassword={showConfirmPassword}
        onTogglePassword={() => setShowConfirmPassword((prev) => !prev)}
        error={errors.confirmPassword}
      />

      <Button type="button" onClick={handleSubmit}>
        Crear cuenta
      </Button>

      <Button type="button" variant="secondary" onClick={onSwitchToLogin}>
        ¿Ya tienes cuenta? Inicia sesión
      </Button>
    </div>
  );
};

export default RegisterForm;