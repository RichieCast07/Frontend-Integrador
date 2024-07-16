import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './components/organisms/LoginForm';
import RegisterForm from './components/organisms/RegisterForm';
import ProductManagement from './components/pages/ProductManagement';
import SidebarMenu from './components/molecules/SidebarMenu';
import ManageSuppliers from './components/pages/ManageSuppliers';
import './components/styles/organisms/styles.css'
import ManageCategories from './components/pages/ManageCategories';

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

const AppContent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isAuthRoute = location.pathname === '/register' || location.pathname === '/login';

    return (
        <div className="app-container">
            {!isAuthRoute && (
                <>
                    <SidebarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                    {!isOpen && (
                        <button className="menu-btn" onClick={toggleMenu}>
                            <i className="fas fa-bars"></i>
                        </button>
                    )}
                </>
            )}
            <Routes>
                <Route path="/" element={<ProductManagement toggleMenu={toggleMenu} />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/products" element={<ProductManagement toggleMenu={toggleMenu} />} />
                <Route path="/suppliers" element={<ManageSuppliers />} />
                <Route path="/categories" element={<ManageCategories />} />
            </Routes>
        </div>
    );
}

export default App;
