import React, {PropTypes} from 'react';

const Button = ({type, buttonClassName, onClick, label, style}) =>  {
    return (
        <button 
            type = {type}
            className = {buttonClassName}
            onClick = {onClick}
            style = {style}
        >{label}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
    style: PropTypes.string
};

export default Button;