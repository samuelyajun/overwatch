import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioInput from '../common/RadioInput.jsx';


const rowStyle = {
    textAlign : 'center'
};

const SurveyListRow = ({ question }) => {
    return (
        <tr>
            <td style={rowStyle}>{question.id}.</td>
            <td>{question.questionText}</td>
            <td>&nbsp;</td>
            <td style={rowStyle}><RadioInput value = {question.optionChoices[0].id} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.optionChoices[1].id} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.optionChoices[2].id} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.optionChoices[3].id} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.optionChoices[4].id} name = {question.id}/></td>
        </tr>
    );
};

SurveyListRow.propTypes = {
    question : PropTypes.object.isRequired
};

export default SurveyListRow;