import React, { PropTypes } from 'react';
import {RadioGroup, Radio} from 'react-radio-group';


const listStyle = {
    textAlign: 'center'
};

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

let tableStyle = "table table-hover table-striped";

const LikertQuestionList = ({survey}) => {
    return (
        <table className={tableStyle}>
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th style={listStyle}>Strongly <br/> Disagree</th>
                <th style={listStyle}>Disagree</th>
                <th style={listStyle}>Neutral</th>
                <th style={listStyle}>Agree</th>
                <th style={listStyle}>Strongly<br/>Agree</th>
            </tr>
            </thead>
            <tbody>
                { 
                    survey.template.questions.map(question => {
                        return (
                            <tr key={question.id}>
                                <td style={rowStyles}><b>{question.id}.</b></td>
                                <td style={rowStyles}> {question.questionText}</td>
                                 <td colSpan="5">
                                    <RadioGroup name = {question.id}>
                                        <ul style={radioGroupStyle}>
                                            <li style={radioStyle}>
                                                <Radio value = "1"/>
                                            </li>
                                            <li style={radioStyle}>
                                                <Radio value = "2"/>
                                            </li>
                                            <li style={radioStyle}>
                                                <Radio value = "3"/>
                                            </li>
                                            <li style={radioStyle}>
                                                <Radio value = "4"/>
                                            </li>
                                            <li style={radioStyle}>
                                                <Radio value = "5"/>
                                            </li>
                                        </ul>
                                    </RadioGroup>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

LikertQuestionList.propTypes = {
    survey: PropTypes.object.isRequired
};

export default LikertQuestionList;