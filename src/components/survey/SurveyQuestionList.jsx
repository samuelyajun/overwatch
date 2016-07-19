import React, { PropTypes } from 'react';
import SurveyQuestionListRow from './SurveyQuestionListRow.jsx';


const listStyle = {
    textAlign: 'center'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const SurveyQuestionList = ({surveys}) => {
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
                surveys[0].surveyTemplate.questions.map(question => {
                        return <SurveyQuestionListRow key={question.id} question={question}/>
                    }
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuestionList.propTypes = {
    surveys: PropTypes.array.isRequired
};

export default SurveyQuestionList;