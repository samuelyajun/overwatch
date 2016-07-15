import React, { PropTypes } from 'react';
import SurveyQuantityQuestionListRow from './SurveyQuantityQuestionListRow.jsx';


const listStyle = {
    textAlign : 'center'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const SurveyQuantityQuestionList = ({questions}) => {
    return (
        <table className="table" style={tableStyle}>
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Question</th>
            </tr>
            </thead>
            <tbody>
            {
                questions.surveyTemplate.questions.map(question =>
                    <SurveyQuantityQuestionListRow key = {question.id} question = {question}/>
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuantityQuestionList.propTypes = {
    questions: PropTypes.array,
    selectedValue: PropTypes.string
};

export default SurveyQuantityQuestionList;