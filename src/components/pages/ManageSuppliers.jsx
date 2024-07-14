import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import ModalSuppliers from '../molecules/ModalSuppliers';
import ModalEditManageSuppliers from '../molecules/ModalEditManageSuppliers';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import DeleteModal from '../molecules/DeleteModal';
import '../styles/pages/ManageSuppliers.css';

const ManageSuppliers = ({ toggleSuppliersMenu }) => {
    const [isModalSuppliersOpen, setIsModalSuppliersOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleModalSuppliersToggle = () => {
        setIsModalSuppliersOpen(!isModalSuppliersOpen);
    };

    const handleEditModalToggle = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };

    const handleDeleteModalToggle = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const handleDelete = () => {
        // Logica para eliminar el proveedor
        console.log('Proveedor eliminado');
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="product-management">
            <header className="navbar">
                <div className="navbar-left">
                    <button className="menu-btn" onClick={toggleSuppliersMenu}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="header-logo">
                        <Logo className="logo-suppliers"/>
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
                        <i className="fa-solid fa-plus new-product-btn" onClick={handleModalSuppliersToggle}></i>
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
                                <button className="add-pencil-btn" onClick={handleEditModalToggle}>
                                    <i className="fa-solid fa-pencil"></i>
                                </button>
                                <button className="delete-btn" onClick={handleDeleteModalToggle}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        {/* Más proveedores */}
                    </div>
                </div>
            </div>
            <ModalSuppliers isOpen={isModalSuppliersOpen} onClose={handleModalSuppliersToggle}>
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
                                <label className="label-phone-number">Teléfono</label>
                                <Input type="text" className="input phone-number-input" />
                            </div>
                        </div>
                    </div>
                    <div className="right-side">
                        <Button className="submit-btn-add">Agregar</Button>
                    </div>
                </div>
            </ModalSuppliers>
            <ModalEditManageSuppliers isOpen={isEditModalOpen} onClose={handleEditModalToggle} />
            <DeleteModal isOpen={isDeleteModalOpen} onRequestClose={handleDeleteModalToggle} onDelete={handleDelete} />
        </div>
    );
};

export default ManageSuppliers;
