import React, {PropTypes} from 'react';
import Checkbox from './Checkbox.jsx';

class CheckboxGroup extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div className="form-group">
                   {
                        this.props.list.map((obj) => {
                            return (
                                <label key={obj} className="checkbox-inline">
                                    <Checkbox onClick={this.props.onClick} name={obj} />
                                </label>
                            );
                        })
                    }
            </div>
        );
    }
}

CheckboxGroup.propTypes = {
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CheckboxGroup;
