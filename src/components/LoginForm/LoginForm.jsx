import React, { useState } from 'react';
import InputField from '../InputField/InputField.jsx';
import Button from '../Button/Button.jsx';
import './LoginForm.css';

const LoginForm = ({ onSubmit, onSwitchToRegister }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) newErrors.email = 'El email es requerido';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
        if (!formData.password) newErrors.password = 'La contraseña es requerida';

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
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                iconName="mail"
                error={errors.email}
            />

            <InputField
                type="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                iconName="lock"
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                error={errors.password}
            />

            <div className="form-options">
                <label className="checkbox-label">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkbox-text">Recordarme</span>
                </label>
                <button type="button" className="forgot-password">
                    ¿Olvidaste tu contraseña?
                </button>
            </div>

            <Button type="button" onClick={handleSubmit}>
                Iniciar sesión
            </Button>

            <Button type="button" variant="secondary" onClick={onSwitchToRegister}>
                ¿No tienes cuenta? Regístrate
            </Button>
        </div>
    );
};

export default LoginForm;