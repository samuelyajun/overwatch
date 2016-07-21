import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {RadioGroup, Radio} from 'react-radio-group';

const rowStyles = {
    verticalAlign: 'middle'
};

const questionStyling = {
    textAlign: 'left'
};

const radioGroupStyle = {
   textAlign: 'center',
    padding: '0px',
    margin: '0px auto',
    overflow: 'hidden'

};

const radioStyle = {
    display: 'inline',
    padding: '2px',
    width: '20%',
    float: 'left'
};

const SurveyListRow = ({ question }) => {

    return (
        <tr style={rowStyles}>
            <td style={questionStyling}>{question.id}</td>
            <td>{question.questionText}</td>
            <td colSpan={question.optionChoices.length}>
                <RadioGroup name = {question.id}>
                    <ul style={radioGroupStyle}>
                        {
                            question.optionChoices.map((responseOption) => {
                                return (
                                    <li style={radioStyle}>
                                        <Radio key={responseOption.id} value = {responseOption.id}/>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </RadioGroup>
            </td>

        </tr>
    );
};

SurveyListRow.propTypes = {
    question : PropTypes.object.isRequired
};


export default SurveyListRow;