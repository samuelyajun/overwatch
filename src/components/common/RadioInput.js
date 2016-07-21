import React, {PropTypes} from 'react';


const RadioInput = ({name, value, onChange}) => {
    return (
        <input className = "radioSelection"
               type="radio"
               name = {name}
               value = {value}
               onChange = {onChange}
               required
        />
    );
};

RadioInput.propTypes = {
    name: PropTypes.number.isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default RadioInput;