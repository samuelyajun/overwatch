import React, { PropTypes } from 'react';

const NumberInput = ({name, label, onChange, placeholder, value, error, type, min}) => {
    let wrapperClass = 'form-group';

    const topMargin = {
        margin : '15px'
    };

    if(error && error.length > 0) {
        wrapperClass += " " + 'has-error';
        type = type ? type : "text";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field col-xs-2" style={topMargin}>
                <input type={type}
                       name = {name}
                       className="form-control"
                       placeholder={placeholder}
                       value={value}
                       onChange = {onChange}
                       min = {min}
                />
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.number,
    value: PropTypes.number,
    error: PropTypes.string,
    type: PropTypes.string,
    min : PropTypes.string

};

export default NumberInput;
