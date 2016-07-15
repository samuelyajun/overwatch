import React, { PropTypes } from 'react';
import SurveyQuestionListRow from './SurveyQuestionListRow.jsx';


const listStyle = {
    textAlign : 'center'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const SurveyQuestionList = ({template}) => {
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
                template.questions.map(question =>
                    <SurveyQuestionListRow key = {question.id} question = {question}/>
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuestionList.propTypes = {
    template: PropTypes.object.isRequired,
    selectedValue: PropTypes.string
};

export default SurveyQuestionList;