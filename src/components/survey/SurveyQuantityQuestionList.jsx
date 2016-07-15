import React, { PropTypes } from 'react';
import SurveyQuantityQuestionListRow from './SurveyQuantityQuestionListRow.jsx';


const listStyle = {
    textAlign : 'center'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const SurveyQuantityQuestionList = ({template}) => {
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
                template.questions.map(question =>
                    <SurveyQuantityQuestionListRow key = {question.id} question = {question}/>
                )
            }
            </tbody>
        </table>
    );
};

SurveyQuantityQuestionList.propTypes = {
    template: PropTypes.object.isRequired,
    selectedValue: PropTypes.string
};

export default SurveyQuantityQuestionList;