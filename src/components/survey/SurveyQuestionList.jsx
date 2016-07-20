import React, { PropTypes } from 'react';
import SurveyQuestionListRow from './SurveyQuestionListRow.jsx';


const listStyle = {
    textAlign: 'center'
};


const SurveyQuestionList = ({survey}) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>&nbsp;</th>
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
                    survey.template.questions.map(question => {
                            return <SurveyQuestionListRow key={question.id} question={question}/>
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

SurveyQuestionList.propTypes = {
    survey: PropTypes.object.isRequired
};

export default SurveyQuestionList;