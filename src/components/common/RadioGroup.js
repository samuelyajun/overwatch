import React, {PropTypes} from 'react';
import RadioInput from './RadioInput';



const RadioGroup = ({name, onChange, selectedValue, question}) => {
    return (
        <div className="form-group" selectedValue={selectedValue} value={this.state.value} name={question} onChange={onChange}>
            <RadioInput name={question} value="0"/>
            <RadioInput name={question} value="1"/>
            <RadioInput name={question} value="2"/>
            <RadioInput name={question} value="3"/>
            <RadioInput name={question} value="4"/>
        </div>
    );
};

RadioGroup.propTypes = {
    name: PropTypes.object,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string,
    question: PropTypes.object,
    value: PropTypes.number
};

export default RadioGroup;