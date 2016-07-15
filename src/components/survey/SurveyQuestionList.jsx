import React, { PropTypes } from 'react';
import SurveyQuestionListRow from './SurveyQuestionListRow.jsx';


const listStyle = {
    textAlign : 'center'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const SurveyQuestionList = ({questions}) => {
    return (
        <table className="table" style={tableStyle}>
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Question</th>
                <th>&nbsp;</th>
                <th style={listStyle}>Strongly Disagree</th>
                <th style={listStyle}>Disagree</th>
                <th style={listStyle}>Neutral</th>
                <th style={listStyle}>Agree</th>
                <th style={listStyle}>Strongly Agree</th>
            </tr>
            </thead>
            <tbody>
            {
                questions.surveyTemplate.questions.map(question =>
                    <SurveyQuestionListRow key = {question.id} question = {question}/>
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuestionList.propTypes = {
    questions: PropTypes.array,
    selectedValue: PropTypes.string
};

export default SurveyQuestionList;