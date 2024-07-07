import React from 'react';
import Logo from '../atoms/Logo';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <header className="header-line">
            <Logo />
        </header>
    );
};

export default Navbar;
