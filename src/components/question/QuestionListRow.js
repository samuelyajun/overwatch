import React, {PropTypes} from 'react';
import RadioGroup from '../common/RadioGroup';
import RadioInput from '../common/RadioInput';



const QuestionListRow = ({question, onChange, selectedValue}) => {

    return (
        <tr>
            <td>{question.id}</td>
            <td>{question.questionText}</td>
            <td><RadioInput value = {question.selectedValue} name = {question.id}/></td>
            <td><RadioInput value = {question.selectedValue} name = {question.id}/></td>
            <td><RadioInput value = {question.selectedValue} name = {question.id}/></td>
            <td><RadioInput value = {question.selectedValue} name = {question.id}/></td>
            <td><RadioInput value = {question.selectedValue} name = {question.id}/></td>
        </tr>
    );
};

QuestionListRow.propTypes = {
    question: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string
};

export default QuestionListRow;