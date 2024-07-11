import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import '../styles/organisms/styles.css';

const InputField = ({ type, placeholder, iconName }) => {
    return (
        <div className="input-field">
            {iconName && <Icon name={iconName} />}
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    iconName: PropTypes.string,
};

export default InputField;
