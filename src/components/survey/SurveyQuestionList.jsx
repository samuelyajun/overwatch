import React, { PropTypes } from 'react';
import SurveyQuestionListRow from './SurveyQuestionLisRow.jsx'


const listStyle = {
    textAlign : 'center'
};

const SurveyQuestionList = ({survey}) => {
    return (
        <table className="table">
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
                survey.surveyTemplate.questions.map((question) =>
                    <SurveyQuestionListRow key = {question.id} question = {question}/>
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuestionList.propTypes = {
    survey: PropTypes.object.isRequired
};

export default SurveyQuestionList;