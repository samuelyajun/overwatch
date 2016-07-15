import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RadioInput from '../common/RadioInput.jsx';


const rowStyle = {
    textAlign : 'center'
};

const SurveyListRow = ({ question, onChange, selectedValue }) => {
    return (
        <tr>
            <td style={rowStyle}>{question.id}.</td>
            <td>{question.questionText}</td>
            <td>&nbsp;</td>
            <td style={rowStyle}><RadioInput value = {question.responseValue} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.responseValue} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.responseValue} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.responseValue} name = {question.id}/></td>
            <td style={rowStyle}><RadioInput value = {question.responseValue} name = {question.id}/></td>
        </tr>
    );
};

SurveyListRow.propTypes = {
    question : PropTypes.object.isRequired,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string
};

export default SurveyListRow;