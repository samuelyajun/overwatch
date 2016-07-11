import React, {propTypes} from 'react';

const scrollStyle = {
    width: '300px',
    border: '2px solid'
}

const ScrollableCheckboxGroup = ({options, onClick}) => {
    return(
        <div style={scrollStyle}>
            {
                this.options.map((option, index) => {
                    <Checkbox key={option.id} value={option.id} name={option.name} />
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
