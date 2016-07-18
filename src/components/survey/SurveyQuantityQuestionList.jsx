import React, { PropTypes } from 'react';
import SurveyQuantityQuestionListRow from './SurveyQuantityQuestionListRow.jsx';


const listStyle = {
    textAlign : 'center'
};

const SurveyQuantityQuestionList = ({survey}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Question</th>
            </tr>
            </thead>
            <tbody>
            {
                survey.surveyTemplate.questions.map((question) =>
                    <SurveyQuantityQuestionListRow key = {question.id} question = {question}/>
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuantityQuestionList.propTypes = {
    survey: PropTypes.object.isRequired
};

export default SurveyQuantityQuestionList;