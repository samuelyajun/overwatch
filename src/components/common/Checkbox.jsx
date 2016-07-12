import React, {PropTypes} from 'react';

const Checkbox = (props) => {
    return(
        <span>
            <input
                type="checkbox"
                checked={props.checked}
                value={props.value}
                name={props.name}
                onClick={props.onClick}
            /> {props.name}
        </span>
    );
};

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.any
};

export default Checkbox;
