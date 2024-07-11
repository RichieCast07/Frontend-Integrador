import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../molecules/InputField';
import Button from '../atoms/Button';
import FormContainer from '../templates/FormContainer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/organisms/styles.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="app-container">
            <FormContainer icon="user">
                <form onSubmit={handleLogin} className="form">
                    <label className="input-label" htmlFor="username">Usuario</label>
                    <InputField
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Usuario"
                    />
                    <label className="input-label" htmlFor="password">Contraseña</label>
                    <div className="input-field">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="password-toggle"
                        >
                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </span>
                    </div>
                    <Button label="Iniciar Sesión" className="btn btn-primary" />
                    <p className="auth-link" style={{ color: 'black' }}>
                        ¿No tienes una cuenta? <Link to="/register" className="link">Regístrate aquí</Link>
                    </p>
                </form>
            </FormContainer>
        </div>
    );
};

export default LoginForm;
