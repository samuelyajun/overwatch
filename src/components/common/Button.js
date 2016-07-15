/**
 * Created by Jblair on 7/5/2016.
 */
import React, {PropTypes} from 'react';

const Button = ({type, buttonClassName, onClick, label}) =>  {
    return (
        <button type = {type}
    className = {buttonClassName}
    onClick = {onClick}
        >{label}
        </button>
);
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
};

export default Button;