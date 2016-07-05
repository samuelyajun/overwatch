/**
 * Created by Jblair on 7/5/2016.
 */
import React, {PropTypes} from 'react';

const Button = ({type, buttonClassName, onClick}) =>  {
    return (
        <button type = {type}
    className = {buttonClassName}
    onClick = {onClick}
        >{type}
        </button>
);
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    buttonClassName: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;