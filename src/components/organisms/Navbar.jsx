import React from 'react';
import Logo from '../atoms/Logo';
import '../styles/organisms/Navbar.css';

const Navbar = () => {
    return (
        <header className="header-line">
            <Logo className={"Logo"}/>
        </header>
    );
};

export default Navbar;
