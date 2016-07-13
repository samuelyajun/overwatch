import React, {PropTypes} from 'react';

const Checkbox = (props) => {
    return(
        <span>
            <input
                type="checkbox"
                checked={props.checked}
                name={props.name}
                onClick={props.onClick}
            /> {props.name}
        </span>
    );
};

Checkbox.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool
};

export default Checkbox;
