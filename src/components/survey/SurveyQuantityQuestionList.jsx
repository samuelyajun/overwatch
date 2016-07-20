import React, { PropTypes } from 'react';
import SurveyQuantityQuestionListRow from './SurveyQuantityQuestionListRow.jsx';


const listStyle = {
    textAlign : 'center'
};

let tableStyle = {
    class: "table table-hover table-bordered table-striped"
};

const SurveyQuantityQuestionList = ({survey}) => {
    console.log(survey.template.questions);
    return (
        <table className="table" style={tableStyle}>
            <tbody>
            {
                survey.template.questions.map(question => {
                       return  <SurveyQuantityQuestionListRow key={question.id} question={question}/>;
                    }
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