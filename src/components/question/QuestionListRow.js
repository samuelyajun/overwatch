import React, {PropTypes} from 'react';
import RadioGroup from '../common/RadioGroup';
import RadioInput from '../common/RadioInput';



const QuestionListRow = ({question, value}) => {

    return (
        <tr>
            <td>{question.questionText}</td>
            <td>{question.responseType}</td>
            <td>
                <RadioGroup name = {"test"}>
                    <RadioInput value="0"/>
                    <RadioInput value="1"/>
                    <RadioInput value="2"/>
                    <RadioInput value="3"/>
                    <RadioInput value="4"/>
                </RadioGroup>
            </td>
        </tr>
    );
};

QuestionListRow.propTypes = {
    question: PropTypes.object.isRequired,
    value: PropTypes.number
};

export default QuestionListRow;