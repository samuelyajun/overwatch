import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {RadioGroup, Radio} from 'react-radio-group';


const rowStyle = {
    textAlign : 'center'
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
        <tr>
            <td style={rowStyle}>{question.id}</td>
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

//<li style={radioStyle}><Radio value = {question.optionChoices[0].id}/></li>
//<li style={radioStyle}><Radio value = {question.optionChoices[1].id}/></li>
//<li style={radioStyle}><Radio value = {question.optionChoices[2].id}/></li>
//<li style={radioStyle}><Radio value = {question.optionChoices[3].id}/></li>
//<li style={radioStyle}><Radio value = {question.optionChoices[4].id}/></li>


//<td style={rowStyle}><RadioInput value = {question.optionChoices[1].id} name = {question.id}/></td>
//<td style={rowStyle}><RadioInput value = {question.optionChoices[2].id} name = {question.id}/></td>
//<td style={rowStyle}><RadioInput value = {question.optionChoices[3].id} name = {question.id}/></td>
//<td style={rowStyle}><RadioInput value = {question.optionChoices[4].id} name = {question.id}/></td>
export default SurveyListRow;