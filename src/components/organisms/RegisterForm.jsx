import React, { useState } from 'react';
import InputField from '../molecules/InputField';
import Button from '../atoms/Button';
import FormContainer from '../templates/FormContainer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/styles.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="app-container">
            <div className="register-form-container">
                <FormContainer>
                    <div className="form-header">
                        <h1>Registro</h1>
                        <div className="icon-circle">
                            <i className="user-icon"></i>
                        </div>
                    </div>
                    <form onSubmit={handleRegister} className="form">
                        <label className="input-label" htmlFor="username">Usuario</label>
                        <InputField
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Usuario"
                        />
                        <label className="input-label" htmlFor="email">Correo electrónico</label>
                        <InputField
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                        />
                        <label className="input-label" htmlFor="password">Contraseña</label>
                        <div className="input-field">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Escribe una contraseña"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="password-toggle"
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </span>
                        </div>
                        <label className="input-label" htmlFor="confirmPassword">Confirmar contraseña</label>
                        <div className="input-field">
                            <input
                                id="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Escribe la contraseña nuevamente"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="password-toggle"
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </span>
                        </div>
                        <Button label="Registrarme" className="btn btn-primary" />
                    </form>
                </FormContainer>
            </div>
        </div>
    );
};

export default RegisterForm;
