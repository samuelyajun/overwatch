import React, {PropTypes} from 'react';


const RadioInput = ({value}) => {
    return (
        <input
               type="radio"
               value = {value}
        />
    );
};

RadioInput.propTypes = {
    value: PropTypes.number.isRequired
};

export default RadioInput;