import React, {PropTypes} from 'react';
import Checkbox from './Checkbox.jsx';

const scrollStyle = {
    width: '300px',
    height: '100px',
    border: '2px solid #ccc'
}

const ScrollableCheckboxGroup = ({options, onClick}) => {
    return(
        <div style={scrollStyle}>
            {
                options.map((option, index) => {
                    <Checkbox
                        key={option.id}
                        value={option.id}
                        name={option.name}
                        onClick={onClick} />
                })
            }
        </div>
    );
};

ScrollableCheckboxGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ScrollableCheckboxGroup;
