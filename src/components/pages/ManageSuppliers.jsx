import React, { useState } from 'react';
import '../styles/ManageSuppliers.css';
import Logo from '../atoms/Logo';
import ModalSuppliers from '../atoms/ModalSuppliers';
import Button from '../atoms/Button';
import Input from '../atoms/Input';


const ProductManagement = ({ toggleMenu }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="product-management">
            <header className="navbar">
                <div className="navbar-left">
                    <button className="menu-btn" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="header-line">
                        <Logo />
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="profile-circle">
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
            </header>
            <div className="content">
                <div className="actions">
                    <div className="left-actions">
                        <h1>Administrar proveedores</h1>
                    </div>
                    <div className="right-actions">
                        <i className="fa-solid fa-plus new-product-btn" onClick={handleModalToggle}></i>
                    </div>
                </div>
                <div className="product-list-container">
                    <div className="product-list">
                        <div className="product-item">
                            <button className="edit-btn">
                                <div className="red-square"></div>
                            </button>
                            <div className="product-details">
                                <p>Nombre Producto</p>
                                <p>$ 999.99</p>
                                <p>9999</p>
                                <p>Proveedor</p>
                            </div>
                            <div className="product-actions">
                                <button className="add-pencil-btn">
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="delete-btn">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        {/* Más productos */}
                    </div>
                </div>
            </div>
            <ModalSuppliers isOpen={isModalOpen} onClose={handleModalToggle}>
                    <div className="modal-body">
                        <div className="product-form-container">
                            <div className="left-side">
                            <div className="form-fields">
                                    <label className="label-name">Nombre</label>
                                    <Input type="text" className="input name-input" />
                                </div>
                                <div className="form-fields">
                                    <label className="label-email">Email</label>
                                    <Input type="text" className="input email-input" />
                                </div>
                                <div className="form-fields">
                                    <label className="label-phone-number">Telefono</label>
                                    <Input type="text" className="input phone-number-input" />
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <Button className="submit-btn-add">Agregar</Button>
                        </div>
                    </div>
            </ModalSuppliers>
        </div>
    );
};

export default ProductManagement;