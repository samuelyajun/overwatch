// contains the list of questions for the survey and actions to submit or cancel the survey response
// needs to be built and corrected to form instead of table

import React from 'react';

const SurveyResponseForm = ({}) => {
    return (

            <table>
            <thead>
            <tr>
                <th>$nbsp;</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Response Type</th>
            </tr>
            </thead>
            <tbody>
            {questions.map(question =>
                <QuestionListRow key={question.id} question={question} />
            )}
            </tbody>
        </table>

    );
};

SurveyResponseForm.propTypes = {

};

export default SurveyResponseForm;