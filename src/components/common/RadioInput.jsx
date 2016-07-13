import React, {PropTypes} from 'react';


const RadioInput = ({name, value}) => {
    return (
        <input className = "radioSelection"
               type="radio"
               name = {name}
               value = {value}
               required
        />
    );
};

RadioInput.propTypes = {
    name: PropTypes.number.isRequired,
    value: PropTypes.number
};

export default RadioInput;