import React, {PropTypes} from 'react';


const RadioGroup = ({name, onChange, selectedValue}) => {
    return (
        <div className="form-group" selectedValue={selectedValue} name={name} onChange={onChange}> </div>
    );
};

RadioInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.string.isRequired
};

export default RadioGroup;