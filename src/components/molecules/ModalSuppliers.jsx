import React from 'react';
import '../styles/molecules/ModalSuppliers.css';

const ModalSuppliers = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-suppliers-overlay">
            <div className="modal-suppliers-container">
                <div className="modal-suppliers-header">
                    <h2>Agregar proveedor</h2>
                    <button className="modal-suppliers-close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <div className="modal-suppliers-body">
                    {/* Contenido del modal */}
                    <form className="modal-suppliers-form-container">
                        <div className="modal-suppliers-form-fields">
                            <div className="modal-suppliers-form-fields-row">
                                <div className="modal-suppliers-input-container">
                                    <label className="modal-suppliers-label-name">Nombre</label>
                                    <input type="text" className="modal-suppliers-input modal-suppliers-name-input" />
                                </div>
                            </div>
                            <div className="modal-suppliers-form-fields-row">
                                <div className="modal-suppliers-input-container">
                                    <label className="modal-suppliers-label-email">Email</label>
                                    <input type="email" className="modal-suppliers-input modal-suppliers-email-input" />
                                </div>
                            </div>
                            <div className="modal-suppliers-form-fields-row">
                                <div className="modal-suppliers-input-container">
                                    <label className="modal-suppliers-label-phone-number">Numero de Telefono</label>
                                    <input type="text" className="modal-suppliers-input modal-suppliers-phone-number-input" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-suppliers-footer">
                    <button className="modal-suppliers-submit-btn-add">Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default ModalSuppliers;
