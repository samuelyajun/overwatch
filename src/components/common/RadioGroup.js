import React, {PropTypes} from 'react';
import RadioInput from './RadioInput';



const RadioGroup = ({ onChange, selectedValue, question}) => {
    return (
        <div className="form-group" selectedValue={selectedValue} value={this.state.value} name={question} onChange={onChange}>
            {
                question.optionChoices.map((option) => {
                    return (
                        <RadioInput key = {option.id} name={option.optionChoiceName} value={option.id}/>
                    );
                })
            }
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

//<RadioInput name={question} value="1"/>
//<RadioInput name={question} value="2"/>
//<RadioInput name={question} value="3"/>
//<RadioInput name={question} value="4"/>

export default RadioGroup;