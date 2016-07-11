import React, {propTypes} from 'react';

class ScrollableCheckboxGroup extends React.Component {


    render() {
        return(
            <div>

            </div>
        );
    }
}

ScrollableCheckboxGroup.propTypes = {
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ScrollableCheckboxGroup;
