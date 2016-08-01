import React, {PropTypes} from 'react';

const Checkbox = (props) => {
    return(
        <label className='col-xs-12'>
            <input
                type="checkbox"
                checked={props.checked}
                value={props.value}
                name={props.name}
                onClick={props.onClick}
            /> {props.name}
        </label>
    );
};

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.any
};

export default Checkbox;
